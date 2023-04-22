import React, {Component} from "react";
import {data} from "../../data/examData";
import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";

class TaxReports extends Component {
    constructor(props) {
        super(props);
        this.today=new Date();
        this.state = {
            data: data.products,
            date: this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate(),
        }
    }

    showTaxReport = () => {
        console.log(this.state.date);
    };

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <h1 className="card-title"><b>Item TAX List <span>{this.state.date}</span></b></h1>
                </div>
                <div className="card-header card-header-secondary">
                    <div className="forms-sample">
                        <label>Date</label>
                        <div className="row">
                            <div className="col-md-4">
                                <input type="date" onChange={(event) => this.setState({date: event.target.value})}
                                       className="form-control"/>
                            </div>
                            <div className="col-md-4">
                                <button onClick={this.showTaxReport} className="btn btn-primary">Show Tax Report
                                </button>
                            </div>

                        </div>
                    </div>
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
        )
    }
}

export default TaxReports