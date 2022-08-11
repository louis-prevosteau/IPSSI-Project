import Home from "../Containers/views/Home";
import Shop from "../Containers/views/Shop";
import Cart from "../Containers/views/Cart";
import Login from "../Containers/views/Login";
import Register from "../Containers/views/Register";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import UserProfil from "../Containers/views/UserProfil";
import UpdateUserProfil from "../Containers/views/UpdateUserProfil";
import AdminCatalogue from "../Containers/views/AdminCatalogue";
import AdminProductCreation from "../Containers/views/AdminProductCreation";
import AdminCategoryCreation from "../Containers/views/AdminCategoryCreation";
import SingleProduct from "../Containers/views/SingleProduct";
import AdminDashboard from "../Containers/views/AdminDashboard";

const Router = () => {


  const SecuredRoute = ({ ...props }) => (
    console.log(props.path),
    <Route path={props.path} render={(data) => (
      console.log(data),
      localStorage.getItem('accessToken')
        ? <props.render {...data} />
        : <Redirect to='/login' />
    )} />
  )

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="*/Home" component={Home} />
      <Route path="*/Shop" component={Shop} />
      <Route path="*/Cart" component={Cart} />
      <Route path="*/Login" component={Login} />
      <Route path="*/Register" component={Register} />
      <Route path="*/User" component={UserProfil} />
      <Route path="*/UpdateProfil" component={UpdateUserProfil} />
      <Route path="*/AdminCatalogue" component={AdminCatalogue} />
      <Route path="*/AdminDashboard" component={AdminDashboard} />
      <Route path="*/AddProduct" component={AdminProductCreation} />
      <Route path="*/AddCategory" component={AdminCategoryCreation} />
      <Route path="/product/:idProduct/select" component={SingleProduct} />

    </BrowserRouter>
  );
};

export default Router;
