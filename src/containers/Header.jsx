import {CartButton} from "../components/CartButton";
import {CalendarButton} from "../components/CalendarButton";
import {SelectedDate} from "../components/SelectedDate";
import {DateSelector} from "../components/DateSelector";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header_title">Купить билет</h1>
      <div className="header_row">
        <div className="calendar_wrp">
          <SelectedDate/>
          <DateSelector/>
        </div>
        <span className="header_txt">акции, %</span>
        <CartButton/>
      </div>
    </header>
  );
}

export {Header};
