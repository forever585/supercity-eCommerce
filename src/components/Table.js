import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../asset/img/logo.png"

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            head: props.head,
            body: props.body,
            data: props.data
        };
console.log(this.state.body)
    }

    showHeader = () => this.state.head.map(item =>
        <th key={item} className="sorting" aria-controls="datatableDefault" rowSpan="1"
            colSpan="1"
            style={{
                width: ' 378.609px',
                paddingTop: ' 0px',
                paddingBottom: ' 0px',
                borderTopWidth: ' 0px',
                borderBottomWidth: ' 0px',
                height: ' 0px'
            }}
            aria-label="Role Name: activate to sort column ascending">
            {item}
        </th>
    );

    showBody = () => this.state.data.map((val, index) =>
        <tr key={index}>
            {this.state.body.map(item =>
                <td>{val.name}</td>
            )}
        </tr>
    );

    render() {
        return (
            <div>
                <table id="datatableDefault"
                       className="table text-nowrap w-100 table-striped dataTable no-footer dtr-inline"
                       role="grid" aria-describedby="datatableDefault_info"
                       style={{width: ' 991px'}}>
                    <thead className="thead-light">
                    <tr role="row" style={{height: ' 0px'}}>
                        {this.showHeader()}
                    </tr>
                    </thead>
                    <tbody>
                    {this.showBody()}
                    {/*   {this.state.data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.category}</td>
                                <td>{val.description}</td>
                                <td>{val.price}</td>
                            </tr>
                        )
                    })}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table