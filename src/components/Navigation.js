import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div className="app-sidebar-content">
                <div className="menu">
                    <div className="menu-header">
                        Navigation
                    </div>
                    <div className="menu-item">
                        <NavLink to={"/home"} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-laptop"/></span>
                            <span className="menu-text">Dashboard</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#sub-admin" className="menu-link collapse">
                            <span className="menu-icon"><i className="fas fa-user-astronaut"/></span>
                            <span className="menu-text">Sub-Admin Management</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="sub-admin" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/roles"} className="menu-link" activeclassname="active">
                                <span className="menu-text">Roles</span>
                            </NavLink>
                            <NavLink to={"/subadmin/list"} className="menu-link" activeclassname="active">
                                <span className="menu-text">Sub-Admin</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <NavLink to={"/tax/list"} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-hashtag"/></span>
                            <span className="menu-text">Taxes</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={"/id/list"} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-credit-card"/></span>
                            <span className="menu-text">ID</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={"/membership/list"} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-tag"/></span>
                            <span className="menu-text">Membership Plans</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#report" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-cubes"/></span>
                            <span className="menu-text">Reports</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="report" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/report/item_sale/by_store"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Item Requirement(Day-Wise)</span>
                            </NavLink>
                            <NavLink to={"/report/total_item_sales/last-30-days"} className="menu-link"
                                     activeclassname="active">

                                <span className="menu-text">Item Sales Report(Last 30 Days)</span>
                            </NavLink>
                            <NavLink to={"/report/tax"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Tax Reports</span>
                            </NavLink>
                            <NavLink to={"/report/order"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Reports</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#send-notification" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-bell"/></span>
                            <span className="menu-text">Send Notifications</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="send-notification" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/notification/to-user"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Send Notification to Users</span>
                            </NavLink>
                            <NavLink to={"/notification/to-store"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Send Notification to Store</span>
                            </NavLink>
                            <NavLink to={"/notification/to-driver"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Send Notification to Driver</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#list-notification" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-bell"/></span>
                            <span className="menu-text">List Notifications</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="list-notification" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/notification/list/user"} className="menu-link" activeclassname="active">

                                <span className="menu-text">User Notifications</span>
                            </NavLink>
                            <NavLink to={"/notification/list/store"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Notifications</span>
                            </NavLink>
                            <NavLink to={"/notification/list/driver"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Driver Notifications</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#user-management" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-users"/></span>
                            <span className="menu-text">Users Management</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="user-management" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/user/list"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Users Data</span>
                            </NavLink>
                            <NavLink to={"/users/wallet-recharge-history"} className="menu-link"
                                     activeclassname="active">

                                <span className="menu-text">Wallet Recharge History</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#category-management" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-cubes"/></span>
                            <span className="menu-text">Category Management</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="category-management" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/category/list"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Parent Categories</span>
                            </NavLink>
                            <NavLink to={"/sub-category/list"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Sub Categories</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#product-management" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-cubes"/></span>
                            <span className="menu-text">Product Catalog</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="product-management" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/product/list"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Admin Products</span>
                            </NavLink>
                            <NavLink to={"/store-product/list"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Products(request)</span>
                            </NavLink>
                            <NavLink to={"/tending-search/product/add"} className="menu-link" activeclassname="active">

                                <span className="menu-text">keywords.Tending Search</span>
                            </NavLink>
                            <NavLink to={"/bulk/upload"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Bulk Upload</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#area-management" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-map"/></span>
                            <span className="menu-text">Area Management</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="area-management" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/city/list"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Cities</span>
                            </NavLink>
                            <NavLink to={"/society/list"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Area/Society</span>
                            </NavLink>
                            <NavLink to={"/area/bulk_upload/city-society"} className="menu-link"
                                     activeclassname="active">

                                <span className="menu-text">Bulk Upload</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#store-management" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-building"/></span>
                            <span className="menu-text">Store Management</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="store-management" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store List</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Earning/Payments</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Approval</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#order-management" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-calendar"/></span>
                            <span className="menu-text">Orders Management</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="order-management" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Reject By Store</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">All Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Pending Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Cancelled Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Ongoing Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Out For Delivery Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Payment Failed Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Completed Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Day Wise Orders</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Missed Orders</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#payout" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-check"/></span>
                            <span className="menu-text">Payout</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="payout" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Payout Requests</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Payout Validation</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#reward" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-trophy"/></span>
                            <span className="menu-text">Rewards</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="reward" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Rewards</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Redeem Value</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#delivery-boy" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-users"/></span>
                            <span className="menu-text">Delivery Boy</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="delivery-boy" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Delivery Boy</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Delivery Boy Incentive</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#pages" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-bookmark"/></span>
                            <span className="menu-text">Pages</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="pages" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">About Us</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Terms & Conditions</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#feedback" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-comment"/></span>
                            <span className="menu-text">Feedback</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="feedback" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Users Feedback</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Feedback</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Delivery Boy Feedback</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div data-toggle="collapse" data-target="#callback-requests" className="menu-link collapse">
                            <span className="menu-icon"><i className="fa fa-phone"/></span>
                            <span className="menu-text">Callback Requests</span>
                            <span className="menu-caret"><b className="caret"/></span>
                        </div>
                        <div id="callback-requests" className="collapse" style={{paddingLeft: '20px', paddingBottom: '10px'}}>
                            <NavLink to={"/b"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Users Callback Requests</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Stores Callback Requests</span>
                            </NavLink>
                            <NavLink to={"/c"} className="menu-link" activeclassname="active">

                                <span className="menu-text">Delivery Boy Callback Requests</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-header">
                        Settings
                    </div>
                    <div className="menu-item">
                        <NavLink to={"/home"} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-cog"/></span>
                            <span className="menu-text">Settings</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={"/home"} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-list"/></span>
                            <span className="menu-text">Cancelling Reasons</span>
                        </NavLink>
                    </div>

                </div>


            </div>
        )
    }
}

export default Navigation