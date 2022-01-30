import {EffiProtocol, format_effi_date} from 'effi-js-lib/effi_protocol';
import {Tariffs} from './sessionsGrouping';

class Api {
  rules = [];
  costs = [];
  effi = new EffiProtocol();

  constructor(opts) {
    opts = opts || {};

    this.effi = new EffiProtocol({
      host: opts.host
    });
  }

  requestServiceRules(callback) {
    this.effi.request({
      url: '/nologin/srv/Baloon/IdentifierServiceRule/IdentifierServiceRuleListGet_API',
      success: (data) => {
        this.rules = data || [];
        this.costs = this.parseCosts(data);
        callback(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  requestCheckPromo(promo, date, callback) {
    let data = `adate=ADate:s:${format_effi_date(date)}&&promocode=s:${promo}`;
    this.effi.request({
      url: '/nologin/srv/Baloon/PersonOrder/CheckPromocode_API',
      data: data,
      success: (data) => {
        this.order.discount = data || [];
        callback(data);

      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  requestServiceRulesByDate(date, callback) {
    let data = `adate=ADate:s:${format_effi_date(date)}`;
    this.effi.request({
      url: '/nologin/srv/Baloon/WeekTariff/SeansesByDateListGet_FE',
      data: data,
      success: (data) => {
        if (!data) {
          callback([]);
          return;
        }
        callback(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  requestPlaceAPI(callback) {
    let data = `email=s:${this.order.email}`
    + `&adate=ADate:s:${format_effi_date(this.order.date)}`
    + `&&week_tariffid=i:${this.order.id}`
    + `&qty=i:${this.order.count}`
    + `&promocode=s:${this.order.promo}`;
    this.effi.request({
      url: '/nologin/srv/Baloon/PersonOrder/Place_WEB',
      data: data,
      success: (data) => {
        callback(data);
        this.requestRaiseInvoice(data.amount, data.id);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  requestPlaceAnyAPI(selectedTariffs, callback) {
    let orderDesc = 's:';
    // this.windowReference = window.open();

    selectedTariffs.forEach(st => {
      if (st.count > 0) {
        orderDesc += `${st.id}:${st.count}:`;
      }
    });

    const data = `email=s:${this.order.email}&adate=ADate:s:${format_effi_date(this.order.date)}&&orderdesc=${orderDesc}`;
    this.effi.request({
      url: '/nologin/srv/Baloon/PersonOrder/PlaceAny_FE',
      data,
      crossDomain: true,
      success: (data) => {
        if (typeof callback === 'function') {
          callback(data);
        }
        this.requestRaiseInvoice(data.amount, data.id);
      },
      error: (err) => {
        // if (this.windowReference) {
        //   this.windowReference.close();
        // }
        console.error(err);
      },
    });
  }

  requestPlaceAnyAPIPromoCode(email, date, tariffs, promocode = '', callback) {
    let orderDesc = 's:';

    Object.entries(tariffs).forEach(([id, count]) => {
      if (count > 0) {
        orderDesc += `${id}:${count}:`;
      }
    });

    const data = `email=s:${email}&adate=ADate:s:${format_effi_date(date)}&&orderdesc=${orderDesc}&promocode=s:${promocode}`;
    this.effi.request({
      url: '/nologin/srv/Baloon/PersonOrder/PlaceAnyOnePromocode',
      data,
      crossDomain: true,
      success: (data) => {
        if (typeof callback === 'function') {
          callback(data);
        }
        this.requestRaiseInvoice(data.amount, data.id);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  requestRaiseInvoice(amount, orderid) {
    let data = `orderid=i:${orderid}&amount=decimal:s:${amount}&&`;

    data += `success_url=s:${encodeURIComponent(this.host + "/tickets-success-download")}&fail_url=s:${this.host + "/tickets-fail"}&`;
    this.effi.request({
      url: '/nologin/srv/Baloon/PersonInvoice/RaiseInvoice_FE',
      data: data,
      success: (data) => {
        window.location.href = data.action_url;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  openCheckout = () => {
    window.location.href = "#/checkout";
  }

  parseCosts = (data) => {
    let costs = [];
    data.map((item, i) => {
      costs.push({
        index: i,
        name: item.name,
        weekday_cost: item.weekday_cost,
        weekend_cost: item.weekend_cost
      })
    })
    return costs;
  }

}

export {Api};
