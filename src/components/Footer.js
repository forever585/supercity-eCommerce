import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <div className="app-footer">
                © 2021 | The Supercity | Crafted with ♥ by <Link >Weblatic</Link>
            </div>
        )
    }
}

export default Footer