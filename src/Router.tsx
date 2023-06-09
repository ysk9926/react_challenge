import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./Routers/Coin";
import Coins from "./Routers/Coins";

function Router() {
  return (
    <BrowserRouter basename="/react_challenge/">
      <Switch>
        <Route path={`/:coinId`}>
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
