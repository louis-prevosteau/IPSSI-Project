import Home from "../Containers/views/Home";
import Shop from "../Containers/views/Shop";
import Cart from "../Containers/views/Cart";
import Login from "../Containers/views/Login";
import Register from "../Containers/views/Register";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" component={Home} />
      <Route path="/Shop" component={Shop} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
    </BrowserRouter>
  );
};

export default Router;
