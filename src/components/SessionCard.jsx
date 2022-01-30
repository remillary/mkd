import React from 'react';
import {inject, observer} from "mobx-react";
import {actions} from '../lib/store';

const SessionCard = inject('store')(observer((props) => {

  const { selection, cart } = props.store;

  const { name, oneWaySession, roundTripSession } = props.tariff;
  
  const owsid = oneWaySession.id;
  const rtsid = roundTripSession.id;

  const addToCart = () => {
    actions.addSelectionToCard(owsid, rtsid);
  }

  const ticketsQuantityChanged = () => {
    return (
        Number(selection[owsid]) !== Number(cart[owsid]) ||
        Number(selection[rtsid]) !== Number(cart[rtsid])
    )
  }
  
  const ticketButtonLabel = () => {
    if (!cart[owsid] && !cart[rtsid])
      return 'Добавить в корзину';
    else if(!selection[owsid] && cart[owsid] && !selection[rtsid] && cart[rtsid])
      return 'Убрать из корзины';
    else
      return 'Обновить корзину';
  }

  return (
    <div className="ticket_card">
      <div className="ticket_top">
        <img src="img/adult-icon.svg" alt="" className="ticket-icon"/>
        <h2 className="ticket_title">{name}</h2>
        <div className="ticket_desc">
          <svg width="49" height="67" viewBox="0 0 49 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30.6944 44.112C31.249 44.3893 31.6704 44.752 31.9584 45.2C32.257 45.648 32.4064 46.1653 32.4064 46.752C32.4064 47.4453 32.209 48.0533 31.8144 48.576C31.4197 49.088 30.865 49.488 30.1504 49.776C29.4357 50.0533 28.609 50.192 27.6704 50.192C26.7317 50.192 25.905 50.0533 25.1904 49.776C24.4864 49.488 23.937 49.088 23.5424 48.576C23.1584 48.0533 22.9664 47.4453 22.9664 46.752C22.9664 46.1653 23.1104 45.648 23.3984 45.2C23.697 44.752 24.1184 44.3893 24.6624 44.112C24.2464 43.856 23.9264 43.536 23.7024 43.152C23.4784 42.7573 23.3664 42.3093 23.3664 41.808C23.3664 41.1573 23.5477 40.592 23.9104 40.112C24.273 39.632 24.7797 39.264 25.4304 39.008C26.081 38.7413 26.8277 38.608 27.6704 38.608C28.5237 38.608 29.2757 38.7413 29.9264 39.008C30.5877 39.264 31.0997 39.632 31.4624 40.112C31.825 40.592 32.0064 41.1573 32.0064 41.808C32.0064 42.3093 31.8944 42.7573 31.6704 43.152C31.4464 43.536 31.121 43.856 30.6944 44.112ZM27.6704 40.512C27.1477 40.512 26.7264 40.64 26.4064 40.896C26.097 41.1413 25.9424 41.4827 25.9424 41.92C25.9424 42.3467 26.097 42.6827 26.4064 42.928C26.7157 43.1733 27.137 43.296 27.6704 43.296C28.2037 43.296 28.6304 43.1733 28.9504 42.928C29.2704 42.6827 29.4304 42.3467 29.4304 41.92C29.4304 41.4827 29.2704 41.1413 28.9504 40.896C28.6304 40.64 28.2037 40.512 27.6704 40.512ZM27.6704 48.288C28.321 48.288 28.833 48.144 29.2064 47.856C29.5904 47.5573 29.7824 47.1627 29.7824 46.672C29.7824 46.1813 29.5904 45.792 29.2064 45.504C28.833 45.216 28.321 45.072 27.6704 45.072C27.0304 45.072 26.5237 45.216 26.1504 45.504C25.777 45.792 25.5904 46.1813 25.5904 46.672C25.5904 47.1733 25.777 47.568 26.1504 47.856C26.5237 48.144 27.0304 48.288 27.6704 48.288Z"
              fill="#28477C"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M25.1525 8.68396L0.229712 23.0186C-0.041778 23.1272 -0.258974 24.1589 0.718394 24.1589L12.7725 17.4802L25.8041 9.82421C25.9127 9.76992 26.195 9.75906 26.4556 10.15C26.7163 10.5409 26.4556 20.0865 26.4556 20.0865C26.4514 20.1552 26.4461 20.2308 26.4404 20.3125C26.3739 21.2649 26.249 23.053 26.9443 24.4847C27.2569 25.1282 27.7228 25.6397 28.1109 26.0658L28.1109 26.0658C28.2889 26.2611 28.4504 26.4385 28.5733 26.6023C27.5959 26.7652 25.5109 27.1887 24.9896 27.5797L24.5009 27.9054C24.5009 27.8896 24.5031 27.8617 24.5061 27.8246C24.5235 27.6076 24.5661 27.0742 24.338 26.7652C23.8847 26.151 22.9256 26.2279 22.3833 26.7652C21.9667 27.178 21.9272 27.71 22.0575 28.2312H17.4965C16.8209 28.6816 16.1447 30.3203 15.4694 31.9567L15.4694 31.9567L15.4693 31.9569C15.3305 32.2932 15.1918 32.6294 15.0531 32.9552C11.3349 41.6888 13.7499 57.2264 13.7499 57.2264C13.7499 57.2264 14.4992 63.6118 16.8449 67H45.0256C45.9486 65.3711 47.0108 62.6278 47.7948 59.6698C49.3089 53.9566 49.0171 50.2241 48.5894 44.7547C48.5426 44.1561 48.4942 43.5367 48.4463 42.8917C48.1275 38.5942 47.2083 33.2809 46.8174 31.9778C46.7425 31.7905 46.6762 31.551 46.6027 31.2854C46.3564 30.3957 46.0291 29.213 45.0256 28.7199C44.4433 28.4338 44.3088 28.3941 43.3966 28.3941C42.8971 28.4358 41.7276 28.4136 41.062 28.4009C40.8594 28.3971 40.7035 28.3941 40.6274 28.3941C40.5676 28.3941 40.5133 28.396 40.4645 28.3976C40.2473 28.4049 40.1387 28.4086 40.1387 28.2312C40.1387 28.2101 40.1393 28.1841 40.1399 28.1541V28.154C40.1458 27.8757 40.1589 27.2513 39.813 26.9281C39.519 26.6534 39.2368 26.6318 38.8356 26.6023C38.4497 26.5739 37.9885 26.6349 37.8582 26.7652C37.8039 26.8195 37.6628 26.9932 37.5324 27.2539C37.2609 27.3625 36.2293 27.091 36.2293 27.091L32.4827 26.1136C32.3198 26.0593 31.7617 25.7575 31.3425 25.462L31.1944 25.3578C29.9925 24.5128 28.8991 23.7441 28.8991 22.3671V9.82421C28.8991 9.82421 29.0925 9.62036 29.2248 9.49843C29.4031 9.33419 29.5804 9.23979 29.7522 9.14834C29.9683 9.03328 30.1757 8.92288 30.3651 8.68396C30.8923 8.01884 30.8538 6.56633 30.8538 6.56633L40.7903 1.02794C40.804 1.01881 40.8195 1.00876 40.8364 0.997826C41.0205 0.878599 41.3671 0.654082 41.279 0.376364C41.2246 0.204851 41.1141 0.131042 40.9532 0.0505761C40.7256 -0.0632202 40.3016 0.0505761 40.3016 0.0505761L30.3651 5.58897L29.8764 5.26318C29.7135 5.15459 29.29 4.96997 28.8991 5.10029C28.8991 5.10029 26.5463 5.80826 26.2927 7.05502C26.2167 7.42904 26.2927 8.03238 26.2927 8.03238L25.1525 8.68396ZM46.0029 47.597L40.5856 52.3952C40.5069 50.8838 40.4645 49.2788 40.4645 47.6156C40.4645 38.6192 41.7043 31.3262 43.2337 31.3262C44.762 31.3262 46.0012 38.6092 46.0029 47.597ZM45.9797 49.7352L40.7152 54.398C41.1526 60.0083 42.1158 63.905 43.2337 63.905C44.641 63.905 45.8031 57.7302 45.9797 49.7352ZM39.3242 34.5841H17.3336C15.6511 42.0873 15.537 46.2514 16.0304 53.6427H38.8356C38.1997 46.2629 38.2053 42.0977 39.3242 34.5841Z"
                  fill="#28477C"/>
          </svg>
          <span className="cabin">8-ми <br/> местные <br/> кабины</span>
        </div>
      </div>
      <div className="ticket_price">
        <div className="ticket_price_col">
          <img src="img/1side.svg" alt="" className="ticket_price_img"/>
          <span className="number_txt">{oneWaySession.price}₽</span>
          <div className="main_number_plugin line" style={{width: 18}}>
            <input type="text"
                   min={0}
                   max={100}
                   pattern="[0-9]*"
                   value={selection[owsid] || 0}
                   onChange={() => {}}
                   className="input_plugin_number"
                   style={{width: 18, height: 32}}
            />
            <div className="plus_plugin_number" onClick={() => actions.addToSelection(owsid)}/>
            <div className="minus_plugin_number" onClick={() => actions.removeFromSelection(owsid)}/>
          </div>
        </div>
        <div className="ticket_price_col">
          <img src="img/2side.svg" alt="" className="ticket_price_img"/>
          <span className="number_txt">{roundTripSession.price}₽</span>
          <div className="main_number_plugin line" style={{width: 18}}>
            <input type="text"
                   min={0}
                   max={100}
                   pattern="[0-9]*"
                   value={selection[rtsid] || 0}
                   onChange={() => {}}
                   className="input_plugin_number"
                   style={{width: 18, height: 32}}/>
            <div className="plus_plugin_number" onClick={() => actions.addToSelection(rtsid)}/>
            <div className="minus_plugin_number" onClick={() => actions.removeFromSelection(rtsid)}/>
          </div>
        </div>
      </div>
      <button
          className="btn ticket_btn"
          disabled={!ticketsQuantityChanged()}
          onClick={addToCart}
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_364:341)">
            <path
              d="M14.5605 5.30279H13.0139L9.63026 1.0732C9.47868 0.883738 9.20215 0.852947 9.0126 1.00459C8.82308 1.1562 8.79234 1.43273 8.94398 1.62225L11.8884 5.30279H3.11159L6.05605 1.62225C6.20766 1.43273 6.17692 1.15617 5.98743 1.00459C5.79788 0.852947 5.52135 0.883708 5.36977 1.0732L1.98606 5.30279H0.439453C0.196758 5.30279 0 5.49955 0 5.74224V6.62115C0 6.86385 0.196758 7.0606 0.439453 7.0606H14.5605C14.8032 7.0606 15 6.86385 15 6.62115V5.74224C15 5.49955 14.8032 5.30279 14.5605 5.30279Z"
              fill="white"/>
            <path
              d="M2.65358 13.7731C2.70748 13.9617 2.87992 14.0918 3.07612 14.0918H11.9238C12.12 14.0918 12.2924 13.9617 12.3463 13.7731L14.0131 7.93945H0.986847L2.65358 13.7731ZM9.51276 11.8223L9.95222 9.1856C9.99212 8.94618 10.2185 8.78435 10.4579 8.82436C10.6974 8.86427 10.8591 9.09067 10.8192 9.33009L10.3797 11.9668C10.3439 12.1818 10.1577 12.3341 9.94677 12.3341C9.92277 12.3341 9.89846 12.3321 9.87399 12.328C9.63458 12.2881 9.47286 12.0617 9.51276 11.8223ZM7.0605 9.25781C7.0605 9.01512 7.25726 8.81836 7.49995 8.81836C7.74265 8.81836 7.93941 9.01512 7.93941 9.25781V11.8945C7.93941 12.1372 7.74265 12.334 7.49995 12.334C7.25726 12.334 7.0605 12.1372 7.0605 11.8945V9.25781ZM4.57126 8.82436C4.8107 8.78449 5.03708 8.94618 5.07698 9.1856L5.51644 11.8223C5.55634 12.0617 5.39462 12.2881 5.15521 12.328C5.13077 12.3321 5.10643 12.3341 5.08243 12.3341C4.87147 12.3341 4.68531 12.1818 4.64948 11.9668L4.21003 9.33009C4.17013 9.09067 4.33185 8.86424 4.57126 8.82436Z"
              fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_364:341">
              <rect width="15" height="15" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span>{ticketButtonLabel()}</span>
      </button>
    </div>
  );
}));

export
{
  SessionCard
}
  ;
