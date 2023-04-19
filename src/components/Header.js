import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../asset/img/logo.png"

class Header extends Component {

    render() {
        return (
            <div className="app-header">
                <div className="brand">
                    <div className="desktop-toggler">
                        <button type="button" className="menu-toggler" data-toggle="sidebar-minify">
                            <span className="bar"/>
                            <span className="bar"/>
                        </button>
                    </div>

                    <Link href="#" className="brand-logo">
                        <img src={logo} alt="" height="20"/>
                    </Link>
                </div>
                <div className="menu">
                    <form className="menu-search" method="POST" name="header_search_form">
                    </form>
                    <div className="menu-item dropdown">


                    </div>
                    <div className="menu-item dropdown">
                        <Link href="#" data-toggle="dropdown" data-display="static" className="menu-link">
                            <div className="menu-img online">
                                <img
                                    src={logo} alt="" className="mw-100 mh-100 rounded-circle"/>
                            </div>
                            <div className="menu-text">mails@thesupercity.com</div>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right mr-lg-3">
                            <Link className="dropdown-item d-flex align-items-center"
                                  href="http://localhost/pak-kum-liong/adminpanel/profile">Edit Profile <i
                                className="fa fa-user-circle fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                            <Link className="dropdown-item d-flex align-items-center"
                                  href="http://localhost/pak-kum-liong/adminpanel/password/change">Change Password <i
                                className="fa fa-key fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                            <Link className="dropdown-item d-flex align-items-center"
                                  href="http://localhost/pak-kum-liong/adminpanel/global_settings">Admin Setting <i
                                className="fa fa-wrench fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item d-flex align-items-center"
                                  href="http://localhost/pak-kum-liong/adminpanel/logout">Log Outt <i
                                className="fa fa-toggle-off fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header