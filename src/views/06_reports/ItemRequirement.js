import React, {Component} from "react";
import {data} from "../../data/examData";
import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";

class ItemRequirement extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: data.products
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="card-title"><b>Store List</b></h1>
                        </div>
                        <div className="col-md-6">
                            <Link to={window.location.href + '/add'} className="btn btn-primary p-1 ml-auto"
                                  style={{width: '15%', float: 'right', padding: ' 3px 0px 3px 0px'}}>Add</Link>
                        </div>
                    </div>
                </div>

                <div className="container"><br/>
                    <CustomTable
                        type={{
                            "STORE NAME": 'name',
                            "CITY": "city",
                            "MOBILE": "mobile",
                            "EMAIL": "id",
                            "ITEM SALE REPORT": "category",
                        }}
                        typeEx={{}}
                        style={{
                            "category": "green-italic",
                        }}
                        searchField={true}
                        image={["image"]}
                        button={{
                        }}
                        data={this.state.data}/>
                </div>
            </div>
        )
    }
}

export default ItemRequirement