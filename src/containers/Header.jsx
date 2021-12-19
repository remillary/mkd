import {BasketButton} from "../components/BasketButton";
import {CalendarButton} from "../components/CalendarButton";
import {SelectedDate} from "../components/SelectedDate";
import {DateSelector} from "../components/DateSelector";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header_title">Купить билет</h1>
      <div className="header_row">
        <div className="calendar_wrp">
          <DateSelector/>
          <CalendarButton/>
        </div>
        <span className="header_txt">акции, %</span>
        <BasketButton/>
      </div>
    </header>
  );
}

export {Header};
