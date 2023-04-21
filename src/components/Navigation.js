import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import {routers} from "../data/configuration";

class Navigation extends Component {
    render() {
        return (
            <div className="app-sidebar-content">
                <div className="menu">
                    <div className="menu-header">
                        Navigation
                    </div>
                    <div className="menu-item">
                        <NavLink to={routers.home} className="menu-link" activeclassname="active">
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
                            <NavLink to={routers.roles} className="menu-link" activeclassname="active">
                                <span className="menu-text">Roles</span>
                            </NavLink>
                            <NavLink to={routers.subAdminList} className="menu-link" activeclassname="active">
                                <span className="menu-text">Sub-Admin</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-item">
                        <NavLink to={routers.taxList} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-hashtag"/></span>
                            <span className="menu-text">Taxes</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={routers.idList} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-credit-card"/></span>
                            <span className="menu-text">ID</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={routers.membershipList} className="menu-link" activeclassname="active">
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
                            <NavLink to={routers.reportItemSaleByStore} className="menu-link" activeclassname="active">

                                <span className="menu-text">Item Requirement(Day-Wise)</span>
                            </NavLink>
                            <NavLink to={routers.reportTotalItemSalesLast30Days} className="menu-link"
                                     activeclassname="active">

                                <span className="menu-text">Item Sales Report(Last 30 Days)</span>
                            </NavLink>
                            <NavLink to={routers.reportTax} className="menu-link" activeclassname="active">

                                <span className="menu-text">Tax Reports</span>
                            </NavLink>
                            <NavLink to={routers.reportOrder} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.notificationToUser} className="menu-link" activeclassname="active">

                                <span className="menu-text">Send Notification to Users</span>
                            </NavLink>
                            <NavLink to={routers.notificationToStore} className="menu-link" activeclassname="active">

                                <span className="menu-text">Send Notification to Store</span>
                            </NavLink>
                            <NavLink to={routers.notificationToDriver} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.notificationListUser} className="menu-link" activeclassname="active">

                                <span className="menu-text">User Notifications</span>
                            </NavLink>
                            <NavLink to={routers.notificationListStore} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Notifications</span>
                            </NavLink>
                            <NavLink to={routers.notificationListDriver} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.userList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Users Data</span>
                            </NavLink>
                            <NavLink to={routers.usersWalletRechargeHistory} className="menu-link"
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
                            <NavLink to={routers.categoryList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Parent Categories</span>
                            </NavLink>
                            <NavLink to={routers.subCategoryList} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.productList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Admin Products</span>
                            </NavLink>
                            <NavLink to={routers.storeProductsList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Products(request)</span>
                            </NavLink>
                            <NavLink to={routers.trendingSearchProductAdd} className="menu-link" activeclassname="active">

                                <span className="menu-text">keywords.Tending Search</span>
                            </NavLink>
                            <NavLink to={routers.bulkUpload} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.cityList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Cities</span>
                            </NavLink>
                            <NavLink to={routers.societyList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Area/Society</span>
                            </NavLink>
                            <NavLink to={routers.areaBulkUploadCitySociety} className="menu-link"
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
                            <NavLink to={routers.adminStoreList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store List</span>
                            </NavLink>
                            <NavLink to={routers.storesFinance} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Earning/Payments</span>
                            </NavLink>
                            <NavLink to={routers.storesWaitingForApprovalStoreList} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.cancelledOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">Reject By Store</span>
                            </NavLink>
                            <NavLink to={routers.adminAllOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">All Orders</span>
                            </NavLink>
                            <NavLink to={routers.adminPendingOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">Pending Orders</span>
                            </NavLink>
                            <NavLink to={routers.adminCancelledOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">Cancelled Orders</span>
                            </NavLink>
                            <NavLink to={routers.adminOngoingOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">Ongoing Orders</span>
                            </NavLink>
                            <NavLink to={routers.adminOutForDeliveryOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">Out For Delivery Orders</span>
                            </NavLink>
                            <NavLink to={routers.adminPaymentFailedOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">Payment Failed Orders</span>
                            </NavLink>
                            <NavLink to={routers.adminCompleteOrders} className="menu-link" activeclassname="active">

                                <span className="menu-text">Completed Orders</span>
                            </NavLink>
                            <NavLink to={routers.ordersTodayAll} className="menu-link" activeclassname="active">

                                <span className="menu-text">Day Wise Orders</span>
                            </NavLink>
                            <NavLink to={routers.storeMissedOrders} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.payoutReq} className="menu-link" activeclassname="active">

                                <span className="menu-text">Payout Requests</span>
                            </NavLink>
                            <NavLink to={routers.prv} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.reward} className="menu-link" activeclassname="active">

                                <span className="menu-text">Rewards</span>
                            </NavLink>
                            <NavLink to={routers.redeem} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.dBoyList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Delivery Boy</span>
                            </NavLink>
                            <NavLink to={routers.dBoyIncentive} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.aboutUs} className="menu-link" activeclassname="active">

                                <span className="menu-text">About Us</span>
                            </NavLink>
                            <NavLink to={routers.terms} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.userFeedbackList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Users Feedback</span>
                            </NavLink>
                            <NavLink to={routers.storeFeedbackList} className="menu-link" activeclassname="active">

                                <span className="menu-text">Store Feedback</span>
                            </NavLink>
                            <NavLink to={routers.driverFeedbackList} className="menu-link" activeclassname="active">

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
                            <NavLink to={routers.userCallbackRequests} className="menu-link" activeclassname="active">

                                <span className="menu-text">Users Callback Requests</span>
                            </NavLink>
                            <NavLink to={routers.storeCallbackRequests} className="menu-link" activeclassname="active">

                                <span className="menu-text">Stores Callback Requests</span>
                            </NavLink>
                            <NavLink to={routers.driverCallbackRequests} className="menu-link" activeclassname="active">

                                <span className="menu-text">Delivery Boy Callback Requests</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-header">
                        Settings
                    </div>
                    <div className="menu-item">
                        <NavLink to={routers.globalSetting} className="menu-link" activeclassname="active">
                            <span className="menu-icon"><i className="fa fa-cog"/></span>
                            <span className="menu-text">Settings</span>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={routers.cancellingReasonsList} className="menu-link" activeclassname="active">
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