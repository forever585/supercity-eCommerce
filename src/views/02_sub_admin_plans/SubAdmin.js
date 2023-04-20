import React, {Component} from "react";
import {Link} from "react-router-dom";
import TableWithAction from "../../components/TableWithAction";

class SubAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: ["Watersports", "Soccer", "Chess", "Running"],
            data: [
                {
                    id: 1, name: "P1", category: "Watersports",
                    description: "P1 (Watersports)", price: 3
                },
                {
                    id: 2, name: "P2", category: "Watersports",
                    description: "P2 (Watersports)", price: 4
                },
                {
                    id: 3, name: "P3", category: "Running",
                    description: "P3 (Running)", price: 5
                },
                {
                    id: 4, name: "P4", category: "Chess",
                    description: "P4 (Chess)", price: 6
                },
                {
                    id: 5, name: "P5", category: "Chess",
                    description: "P6 (Chess)", price: 7
                },
            ]
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="card-title"><b>keywords.Sub Admin List</b></h1>
                        </div>
                        <div className="col-md-6">
                            <Link to={window.location.href + '/add'} className="btn btn-primary p-1 ml-auto"
                                  style={{width: '15%', float: 'right', padding: ' 3px 0px 3px 0px'}}>Add</Link>
                        </div>
                    </div>
                </div>

                <div className="container"><br/>
                    <TableWithAction type={{"IMAGE": 'name', "NAME": "name", "EMAIL": "category"}}
                                     data={this.state.data}/>

                </div>
            </div>
        )
    }
}

export default SubAdmin