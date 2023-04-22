import React, {Component} from "react";
import {data} from "../../data/examData";
import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";

class ItemSalesReport extends Component {
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
                    <h1 className="card-title"><b>Total Item Sales Report (Last 30 Days)</b></h1>
                </div>

                <div className="container"><br/>
                    <CustomTable
                        type={{
                            "PRODUCT NAME": 'name',
                            "KEYWORDS.STOCK": "category",
                        }}
                        typeEx={{}}
                        style={{}}
                        image={["image"]}
                        button={{}}
                        searchField={true}
                        data={this.state.data}/>
                </div>
            </div>
        )
    }
}

export default ItemSalesReport