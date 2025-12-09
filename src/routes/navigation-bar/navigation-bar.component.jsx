import { Fragment } from "react/jsx-runtime";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation-bar.styles.scss'
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";


const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <div className="logo-container">
            <CrwnLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
