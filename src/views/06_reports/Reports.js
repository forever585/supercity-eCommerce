import React, {Component} from "react";
import {data} from "../../data/examData";
import CustomTable from "../../components/CustomTable";

class Reports extends Component {

    constructor(props) {
        super(props);
        this.today = new Date();
        this.state = {
            data: data.products,
            date: this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate(),
        }
    }

    render() {
        return (
            <div>

                <div>
                    <hr/>
                    <br/>
                    <br/>
                    <div className="separator"><h4 style={{color: "grey"}}>Delivery Boy Reports</h4></div>
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Top Delivery Boys</h4>
                                </div>

                                <div className="container"><br/>
                                    <CustomTable
                                        type={{
                                            "DELIVERY BOY": 'name',
                                            "LAST 30 DAYS ORDERS": "category",
                                        }}
                                        typeEx={{}}
                                        style={{
                                            "category": "green-italic",
                                        }}
                                        image={["image"]}
                                        button={{}}
                                        searchField={false}
                                        data={this.state.data}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Delivery Boy Orders Reports</h4>
                                </div>

                                <div className="container"><br/>
                                    <CustomTable
                                        type={{
                                            "DELIVERY BOY": 'name',
                                            "LAST 30 DAYS ORDERS": "category",
                                        }}
                                        typeEx={{}}
                                        style={{
                                            "category": "green-italic",
                                        }}
                                        image={["image"]}
                                        button={{}}
                                        searchField={true}
                                        data={this.state.data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr/>
                    <br/>
                    <br/>
                    <div className="separator"><h4 style={{color: "grey"}}>Store Reports</h4></div>
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Top Stores</h4>
                                </div>

                                <div className="container"><br/>
                                    <CustomTable
                                        type={{
                                            "STORE": 'name',
                                            "LAST 30 DAYS ORDERS": "category",
                                        }}
                                        typeEx={{}}
                                        style={{
                                            "category": "green-italic",
                                        }}
                                        image={["image"]}
                                        button={{}}
                                        searchField={false}
                                        data={this.state.data}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Store Orders Reports</h4>
                                </div>

                                <div className="container"><br/>
                                    <CustomTable
                                        type={{
                                            "STORE": 'name',
                                            "LAST 30 DAYS ORDERS": "category",
                                        }}
                                        typeEx={{}}
                                        style={{
                                            "category": "green-italic",
                                        }}
                                        image={["image"]}
                                        button={{}}
                                        searchField={true}
                                        data={this.state.data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr/>
                    <br/>
                    <br/>
                    <div className="separator"><h4 style={{color: "grey"}}>Users Reports</h4></div>
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Top 10 Users Reports</h4>
                                </div>

                                <div className="container"><br/>
                                    <CustomTable
                                        type={{
                                            "USER": 'name',
                                            "CURRENT MONTH": "category",
                                        }}
                                        typeEx={{}}
                                        style={{
                                            "category": "green-italic",
                                        }}
                                        image={["image"]}
                                        button={{}}
                                        searchField={false}
                                        data={this.state.data}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Worst 10 Users Reports</h4>
                                </div>

                                <div className="container"><br/>
                                    <CustomTable
                                        type={{
                                            "PRODUCT NAME": 'name',
                                            "QUALITY": "category",
                                        }}
                                        typeEx={{}}
                                        style={{
                                            "category": "green-italic",
                                        }}
                                        image={["image"]}
                                        button={{}}
                                        searchField={true}
                                        data={this.state.data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reports