import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { selectCartVisibility } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

import { Navigation, LogoContainer, NavLink, NavLinks } from "./navigation-bar.styles";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const visibility = useSelector(selectCartVisibility)
  const userSignOut = () => dispatch(signOutStart());

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
            <NavLink as='span' onClick={userSignOut} >
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
