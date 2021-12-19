import {Api} from "./api";

const appApi = new Api({
  host: process.env.REACT_APP_API_URL,
});

export {appApi};
