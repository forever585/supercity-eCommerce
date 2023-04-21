import React, {Component} from "react";
import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {data} from "../../data/placeholderData";
import {buttonType} from "../../data/configuration";

class Tax extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: ["Watersports", "Soccer", "Chess", "Running"],
            data: data.products
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="card-title"><b>Tax Type List</b></h1>
                        </div>
                        <div className="col-md-6">
                            <Link to={window.location.href + '/add'} className="btn btn-primary p-1 ml-auto"
                                  style={{width: '15%', float: 'right', padding: ' 3px 0px 3px 0px'}}>Add</Link>
                        </div>
                    </div>
                </div>

                <div className="container"><br/>
                    <CustomTable type={{"TAX TYPE NAME": "name"}}
                                 typeEx={{}}
                                 style={{}}
                                 image={[]}
                                 buttonType={buttonType.editAndDelete}
                                 data={this.state.data}/>

                </div>
            </div>

        )
    }
}

export default Tax