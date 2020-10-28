import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo">
      <Link className="header-link" to="">
        LOGO
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
      </ul>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
