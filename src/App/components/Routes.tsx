import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import { useAppSelector } from "./ReduxHooks";
import { selectUser } from "./reduxSlices/CookiesSlice";

const Routes = () => {
  //const { User } = useContext(Context);
  const User = useAppSelector(selectUser);
  return (
    <>
      <Switch>
        {/* Home */}
        <Route exact path="/">
          {User ? <Home /> : <Redirect to="/login" />}
        </Route>
        {/* Login */}
        <Route exact path="/login">
          {!User ? <Login /> : <Redirect to="/" />}
        </Route>

        {/*404 not found*/}
        <Route exact path="/404">
          {<h1>No se encuentra la pagina</h1>}
        </Route>
        <Redirect to="/404" />

        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default Routes;
