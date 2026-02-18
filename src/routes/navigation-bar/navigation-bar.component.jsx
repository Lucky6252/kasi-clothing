import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { CartContext } from "../../contexts/cart-list.context";

import { Navigation, LogoContainer, NavLink, NavLinks } from "./navigation-bar.styles";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { visibility, setVisibility } = useContext(CartContext);

  return (
    <Fragment>
      <Navigation>
        
        <NavLink to="/">
          <LogoContainer>
            <CrwnLogo />
          </LogoContainer>
        </NavLink>

        <NavLinks> 
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser} >
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>

        {visibility && <CartDropdown />}
      </Navigation>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
