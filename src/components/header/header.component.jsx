import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from '../../assets/gift-box.svg';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="logo-container">
      <Link className="header-link" to="">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="header-items">
      <ul>
        <li><Link className="header-link" to="/shop">SHOP</Link></li>
        {currentUser ? (
          <li className="header-link" onClick={() => auth.signOut()}>Sign Out</li>
        ) : (
          <li><Link className="header-link" to="/sign-in">
            {" "}
            Sign In
          </Link></li>
        )}
        <li>
          <CartIcon />
          {!hidden? <CartDropdown /> : null }
          
          </li>
      </ul>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
