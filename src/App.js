import React from "react";
import './App.css';
import Navigation from "./components/Navigation";
import {Routers} from "./route/Routers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentHeader from "./components/ContentHeader";
import {Link} from "react-router-dom";
import CustomTable from "./components/CustomTable";

function App() {
    return (
        <div className="app">
            <div className="app-header">
                <Header/>
            </div>
            <div className="app-sidebar">
                <Navigation/>
            </div>
            <div className="app-content">
                <ContentHeader/>
                <div className="container-fluid">
                    <Routers/>
                </div>
            </div>
            <div className="app app-footer-fixed">
                <Footer/>
            </div>
            <Link href="#" data-click="scroll-top" className="btn-scroll-top fade"><i
                className="fa fa-arrow-up"/></Link>
        </div>
    );
}

export default App;
