import './App.css';
import {Header} from "./containers/Header";
import {Footer} from "./containers/Footer";
import {Main} from "./containers/Main";
import {Provider} from 'mobx-react';
import {store} from "./lib/store";
import moment from "moment";
import 'moment/locale/ru';

function App() {
  moment.locale('ru');

  return (
    <Provider store={store}>
      <div className="wrapper container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
