import React, {Component} from "react";
import dashboardImg from "../../asset/img/page/dashboard.svg";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card text-white-transparent-7 mb-3 overflow-hidden">
                            <div className="card-img-overlay d-block d-lg-none bg-blue rounded"></div>
                            <div className="card-img-overlay d-none d-md-block bg-blue rounded dashboard-first"></div>

                            <div className="card-img-overlay d-none d-md-block bottom-0 top-auto">
                                <div className="row">
                                    <div className="col-md-8 col-xl-6"></div>
                                    <div className="col-md-4 col-xl-6 mb-n2">
                                        <img src={dashboardImg}
                                             alt="" className="d-block ml-n3 mb-5 img1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body position-relative">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="d-flex">
                                            <div className="mr-auto">
                                                <h5 className="text-white-transparent-8 mb-3">This Week Earning</h5>
                                                <h3 className="text-white mt-n1 mb-1">0</h3>
                                                <p className="mb-1 text-white-transparent-6 text-truncate">
                                                    <i className="fa fa-caret-up"/> <b>0 %</b> increase compare to
                                                    last week
                                                </p>
                                            </div>
                                        </div>

                                        <hr className="hr-transparent bg-white-transparent-2 mt-3 mb-3">
                                        </hr>


                                        <div className="row">
                                            <div className="col-6 col-lg-5">
                                                <div className="mt-1">
                                                    <i className="fa fa-fw fa-shopping-bag fs-28px text-black-transparent-5"/>
                                                </div>
                                                <div className="mt-1">
                                                    <div>Store Earnings</div>
                                                    <div className="font-weight-600 text-white">3329.06</div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-5">
                                                <div className="mt-1">
                                                    <i className="fa fa-fw fa-retweet fs-28px text-black-transparent-5"/>
                                                </div>
                                                <div className="mt-1">
                                                    <div>Admin Earnings</div>
                                                    <div className="font-weight-600 text-white">2109.94</div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="hr-transparent bg-white-transparent-2 mt-3 mb-3">
                                        </hr>
                                        <div className="mt-3 mb-2">
                                            <a href="http://localhost/pak-kum-liong/adminpanel/storess/finance"
                                               className="btn btn-yellow btn-rounded btn-sm pl-5 pr-5 pt-2 pb-2 fs-14px font-weight-600">
                                                <i className="fa fa-wallet mr-2 ml-n2"/>Go To Store Earnings
                                            </a>
                                        </div>
                                        <p className="fs-12px">
                                            It Takes You To The Store Earnings Section.
                                        </p>
                                    </div>

                                    <div className="col-md-4 d-none d-md-block block-style"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <div
                                    className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-orange min-height-202">
                                    <div className="card-img-overlay mb-n4 mr-n4 d-flex mb-0 mt-auto">
                                        <img src="assets/img/icon/order.svg" alt=""
                                             className="ml-auto d-block mb-n3 max-height-105"/>
                                    </div>
                                    <div className="card-body position-relative">
                                        <h5 className="text-white-transparent-8 mb-3 fs-16px">New Orders</h5>
                                        <h3 className="text-white mt-n1">0</h3>
                                        <div className="progress bg-black-transparent-5 mb-2 height-6">
                                            <div className="progrss-bar progress-bar-striped bg-white width-0"></div>
                                        </div>
                                        <div>
                                            <div className="text-white-transparent-8 mb-4">
                                                <i className="fa fa-caret-up"/>
                                                <span>0 % increase</span>
                                                <div>compare to last week</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-teal min-height-202">
                                    <div className="card-img-overlay mb-n4 mr-n4 d-flex bottom-0 top-auto">
                                        <img src="assets/img/icon/visitor.svg" alt=""
                                             className="ml-auto d-block mb-n3 max-height-105"/>
                                    </div>
                                    <div className="card-body position-relative">
                                        <h5 className="text-white-transparent-8 mb-3 fs-16px">Cancelled Orders</h5>
                                        <h3 className="text-white mt-n1">0</h3>
                                        <div className="progress bg-black-transparent-5 mb-2 height-6">
                                            <div className="progrss-bar progress-bar-striped bg-white width-0"></div>
                                        </div>
                                        <div>
                                            <div className="text-white-transparent-8 mb-4">
                                                <i className="fa fa-caret-up"/>
                                                <span>0 % increase</span>
                                                <div>compare to last week</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-pink min-height-202">
                                    <div className="card-img-overlay mb-n4 mr-n4 d-flex bottom-0 top-auto">
                                        <img src="assets/img/icon/email.svg" alt=""
                                             className="ml-auto d-block mb-n3 max-height-105"/>
                                    </div>
                                    <div className="card-body position-relative">
                                        <h5 className="text-white-transparent-8 mb-3 fs-16px">Pending Orders</h5>
                                        <h3 className="text-white mt-n1">0</h3>
                                        <div className="progress bg-black-transparent-5 mb-2 height-6">
                                            <div className="progrss-bar progress-bar-striped bg-white width-0"></div>
                                        </div>

                                        <div>
                                            <div className="text-white-transparent-8 mb-4">
                                                <i className="fa fa-caret-up"/>
                                                <span>0 % increase</span>
                                                <div>compare to last week</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div
                                    className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-indigo min-height-202">

                                    <div className="card-img-overlay mb-n4 mr-n4 d-flex bottom-0 top-auto">
                                        <img src="assets/img/icon/browser.svg" alt=""
                                             className="ml-auto d-block mb-n3 max-height-105"/>
                                    </div>

                                    <div className="card-body position-relative">
                                        <h5 className="text-white-transparent-8 mb-3 fs-16px">This Week App Users</h5>
                                        <h3 className="text-white mt-n1">0</h3>
                                        <div className="progress bg-black-transparent-5 mb-2 height-6">
                                            <div className="progrss-bar progress-bar-striped bg-white width-0"></div>
                                        </div>
                                        <div>
                                            <div className="text-white-transparent-8 mb-4">
                                                <i className="fa fa-caret-up"/>
                                                <span>0 % increase</span>
                                                <div>compare to last week</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1">Bestseller</h5>
                                        <div className="fs-13px">Top product sales this week</div>
                                    </div>

                                </div>

                                No data found


                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1">Orders</h5>
                                        <div className="fs-13px">Latest order history</div>
                                    </div>

                                </div>

                                <div className="table-responsive mb-n2">
                                    <table className="table table-borderless mb-0">
                                        <thead>
                                        <tr className="text-dark">
                                            <th className="pl-0">No</th>
                                            <th>Cart ID</th>
                                            <th>User Details</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-right pr-0">Amount</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="pl-0">1</td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <div className="ml-3 flex-grow-1">
                                                        <div className="font-weight-600 text-dark">KGOP6396</div>
                                                        <div className="fs-13px">2022-07-29</div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="ml-3 flex-grow-1">
                                                    <div className="font-weight-600 text-dark">Manish Baviskar</div>
                                                    <div className="fs-13px">7490997669</div>
                                                </div>
                                            </td>
                                            <td className="text-center"><span
                                                className="label bg-warning-transparent-2 text-warning style1">
																																																							Pending</span>
                                            </td>
                                            <td className="text-right pr-0"> 1760</td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0">2</td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <div className="ml-3 flex-grow-1">
                                                        <div className="font-weight-600 text-dark">NGFV2392</div>
                                                        <div className="fs-13px">2022-07-22</div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="ml-3 flex-grow-1">
                                                    <div className="font-weight-600 text-dark">ADIcted</div>
                                                    <div className="fs-13px">9506033105</div>
                                                </div>
                                            </td>
                                            <td className="text-center"><span
                                                className="label bg-warning-transparent-2 text-warning style1">
																																																							Pending</span>
                                            </td>
                                            <td className="text-right pr-0"> 368</td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0">3</td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <div className="ml-3 flex-grow-1">
                                                        <div className="font-weight-600 text-dark">FKKC8181</div>
                                                        <div className="fs-13px">2022-07-22</div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="ml-3 flex-grow-1">
                                                    <div className="font-weight-600 text-dark">ADIcted</div>
                                                    <div className="fs-13px">9506033105</div>
                                                </div>
                                            </td>
                                            <td className="text-center"><span
                                                className="label bg-warning-transparent-2 text-warning style1">
																																																							Pending</span>
                                            </td>
                                            <td className="text-right pr-0"> 370</td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0">4</td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <div className="ml-3 flex-grow-1">
                                                        <div className="font-weight-600 text-dark">NRCC3359</div>
                                                        <div className="fs-13px">2022-07-04</div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="ml-3 flex-grow-1">
                                                    <div className="font-weight-600 text-dark">Manish Baviskar</div>
                                                    <div className="fs-13px">7490997669</div>
                                                </div>
                                            </td>
                                            <td className="text-center"><span
                                                className="label bg-warning-transparent-2 text-warning style1">
																																																							Pending</span>
                                            </td>
                                            <td className="text-right pr-0"> 899</td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0">5</td>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <div className="ml-3 flex-grow-1">
                                                        <div className="font-weight-600 text-dark">IEVJ60e8</div>
                                                        <div className="fs-13px">2022-07-01</div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="ml-3 flex-grow-1">
                                                    <div className="font-weight-600 text-dark">Manish Baviskar</div>
                                                    <div className="fs-13px">7490997669</div>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <span
                                                    className="label bg-success-transparent-2 text-success style1">																																	Completed</span>
                                            </td>
                                            <td className="text-right pr-0"> 899</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home