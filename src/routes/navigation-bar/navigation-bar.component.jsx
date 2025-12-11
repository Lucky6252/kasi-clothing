import { Fragment } from "react/jsx-runtime";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation-bar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { CartContext } from "../../contexts/cart-list.context";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { visibility, setVisibility } = useContext(CartContext);

  

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
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
            <CartIcon />
        </div>
        {visibility && <CartDropdown /> }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
