import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Registration, MainPage, Login } from "../pages";

export function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact/>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  )
}