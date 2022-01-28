import {Warning2} from "./Warning2";
import {Cart} from "../components/Cart";
import {Premium} from "./Premium";
import {Warning} from "./Warning";
import {Tickets} from "./Tickets";

const Main = () => {
  return (
    <>
      <Tickets/>
      <Warning/>
      <Premium/>
      <Cart/>
      <Warning2/>
    </>
  );
};

export {Main};
