import React, {Component} from "react";
import Table from "../../components/Table";

class Roles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: ["Watersports", "Soccer", "Chess", "Running"],
            products: [
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    </div>
                    <div className="col-lg-12">

                    </div>
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-header card-header-primary">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="card-title"><b>keywords.Role List</b></h1>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="http://localhost/Aditya/adminpanel/roles/add"
                                           className="btn btn-primary p-1 ml-auto"
                                           style={{width: '15%', float: 'right', padding: ' 3px 0px 3px 0px'}}>Add</a>
                                    </div>
                                </div>
                            </div>

                            <div className="container"><br/>
                                <div id="datatableDefault_wrapper"
                                     className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row mb-3">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-8 text-right">
                                            <div className="d-flex justify-content-end">
                                                <div id="datatableDefault_filter" className="dataTables_filter"><label>Search:<input
                                                    type="search" className="form-control form-control-sm"
                                                    placeholder="" aria-controls="datatableDefault"/></label></div>
                                                <div className="dt-buttons btn-group flex-wrap">
                                                    <button className="btn btn-secondary buttons-print btn-default"
                                                            tabIndex="0" aria-controls="datatableDefault" type="button">
                                                        <span>Print</span></button>
                                                    <button
                                                        className="btn btn-secondary buttons-csv buttons-html5 btn-default"
                                                        tabIndex="0" aria-controls="datatableDefault" type="button">
                                                        <span>CSV</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dataTables_scroll">
                                        <div className="dataTables_scrollHead"
                                             style={{
                                                 overflow: ' hidden',
                                                 position: ' relative',
                                                 border: ' 0px',
                                                 width: ' 100%'
                                             }}>
                                            <div className="dataTables_scrollHeadInner"
                                                 style={{
                                                     boxSizing: ' content-box',
                                                     width: ' 991px',
                                                     paddingRight: ' 0px'
                                                 }}>
                                            </div>
                                        </div>
                                        <div className="dataTables_scrollBody"
                                             style={{position: ' relative', overflow: ' auto', width: ' 100%'}}>
                                            <Table head={[1,2,3]} body={["id","name"]} data={this.state.products} />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="mr-auto">
                                            <div className="dataTables_info" id="datatableDefault_info" role="status"
                                                 aria-live="polite">Showing 1 to 1 of 1 entries
                                            </div>
                                        </div>
                                        <div className="mb-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Roles