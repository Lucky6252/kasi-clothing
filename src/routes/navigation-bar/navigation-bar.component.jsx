import { Fragment } from "react/jsx-runtime";
import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <Link className="nav-link" to="/">
          <div className="logo-container">Logo</div>
        </Link>
        <div className="link-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
