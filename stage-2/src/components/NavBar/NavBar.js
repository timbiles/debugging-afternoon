import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../../images/dev-mountain-logo.png'
import {Link} from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <div>
                <div className="navbar-container">
                    <div className="logo-container">
                        <Link to="/" replace><img className="logo-image" src={Logo} alt=""/></Link>
                    </div>

                    <div className="navbar-links-container">
                        <ul className="navbar-links">
                            <li><Link to="/" replace>Home</Link></li>
                            <li><Link to="/storefront" replace>Store</Link></li>
                            <li><Link to="/shoppingcart" replace>Shopping Cart</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default NavBar;