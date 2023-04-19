import {Routes, Route} from "react-router-dom";
import Home from "../views/01_dashboard/Home";
import Roles from "../views/02_sub_admin_plans/Roles";
import SubAdmin from "../views/02_sub_admin_plans/SubAdmin";
import Tax from "../views/03_taxes/Tax";
import Id from "../views/04_id/Id";
import React from "react";


export const Router = () => (
    <Routes>
        <Route path="/">
            <Route path="" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="roles" element={<Roles/>}/>
            <Route path="subadmin/list" element={<SubAdmin/>}/>
            <Route path="tax/list" element={<Tax/>}/>
            <Route path="id/list" element={<Id/>}/>
        </Route>
    </Routes>
);
