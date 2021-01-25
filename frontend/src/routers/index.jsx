import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Registration, MainPage, Login } from "../pages";
import { CheckAuthWrapper } from "../checkAuthWrapper";

export function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <CheckAuthWrapper>
          <Route path="/" component={MainPage} exact/>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </CheckAuthWrapper>
      </Switch>
    </BrowserRouter>
  )
}