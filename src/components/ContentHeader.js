import React,{Component} from "react";
import {Link} from "react-router-dom";

class ContentHeader extends Component{

    constructor(props) {
        super(props);
        this.state = {
            theme: "primary"
        };
        this.themes = ["English", "Bulgarian", "Hindi", "Chinese"];
    }
    setTheme = (event) => {
        this.setState({ theme : event.target.value });
    };

    render(){
        return(
           <div>
               <div className="row">
                   <div className="col-md-7">
                       <h1 className="page-header mb-3">
                           Hi, The SuperCity. <small>Here is your admin panel.</small>
                       </h1>
                   </div>
                   <div className="col-md-5" align="right">
                       <div className="col-md-4" align="right">
                           <select className="form-control" value={ this.state.theme }
                                   onChange={ this.setTheme }>
                               { this.themes.map(theme =>
                                   <option key={ theme } value={ theme }>{theme}</option>) }
                           </select>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default ContentHeader