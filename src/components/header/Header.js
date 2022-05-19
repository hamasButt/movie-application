import React from 'react'
import RoutingLinks from "../../common/Routing/RoutingLinks";
import user from '../../images/user.png'
import './header.css'
function Header() {
    return (
        <div className="header">
                <RoutingLinks
                    className="logo"
                    path="/"
                    label="Movie App"
                />
            <div className="user-image">
                <img src={user} alt="user"/>
            </div>
        </div>
    )
}

export default Header
