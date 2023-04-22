import React, {Component} from "react";
import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {data} from "../../data/examData";
import {buttonType} from "../../data/configuration";

class Id extends Component{
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
                            <h1 className="card-title"><b>ID List</b></h1>
                        </div>
                        <div className="col-md-6">
                            <Link to={window.location.href + '/add'} className="btn btn-primary p-1 ml-auto"
                                  style={{width: '15%', float: 'right', padding: ' 3px 0px 3px 0px'}}>Add</Link>
                        </div>
                    </div>
                </div>

                <div className="container"><br/>
                    <CustomTable type={{"ID": 'id', "ID NAME": "name"}}
                                 typeEx={{}}
                                 style={{}}
                                 image={[]}
                                 button={{
                                     "ACTION": buttonType.editAndDelete,
                                 }}
                                 searchField={true}
                                 data={this.state.data}/>

                </div>
            </div>
        )
    }
}

export default Id