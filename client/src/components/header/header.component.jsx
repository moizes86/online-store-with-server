import React, { useContext } from "react";
import "./header.styles.scss";

//ROUTING
import { Link } from "react-router-dom";

//FIREBASE
import { auth } from "../../firebase/firebase.utils";

//REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

//CONTEXTS
import { CartContext } from "../../contexts/cart.provider";

//COMPONENTS
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/gift-box.svg";

const Header = ({ currentUser }) => {
  const { hidden } = useContext(CartContext);

  return (
    <div className="header">
      <div className="logo-container">
        <Link className="header-link" to="">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="header-items">
        <ul>
          <li>
            <Link className="header-link" to="/shop">
              SHOP
            </Link>
          </li>
          {currentUser ? (
            <li className="header-link" onClick={() => auth.signOut()}>
              Sign Out
            </li>
          ) : (
            <li>
              <Link className="header-link" to="/sign-in">
                {" "}
                Sign In
              </Link>
            </li>
          )}
          <li>
            <CartIcon />
            {!hidden ? <CartDropdown /> : null}
          </li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
