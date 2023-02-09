import React from "react";
import image from "../assets/images/logo.png";
import ContentWrapper from "./ContentWrapper";
import ProductDetail from "./ProductDetail";
import ProductsList from "./ProductsList";
import UsersList from "./UsersList";
import UsersDetail from "./UsersDetail";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-50 p-3" src={image} alt="DTeachLife" />
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <Link className="nav-link" to="/products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Products</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-folder"></i>
            <span>Usuarios</span>
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route exact path="/products">
          <ProductsList />
        </Route>
        <Route exact path="/products/detail/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/users">
          <UsersList />
        </Route>
        <Route exact path="/users/detail/:id">
          <UsersDetail />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
export default SideBar;
