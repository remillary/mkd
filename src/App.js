import './App.css';
import {Header} from "./containers/Header";
import {Footer} from "./containers/Footer";
import {Main} from "./containers/Main";

function App() {
  return (
    <div className="wrapper container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
