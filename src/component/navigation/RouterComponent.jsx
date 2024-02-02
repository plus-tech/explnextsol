//
// Page navigation

import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom'

import ListCmessageComponent from "../contact/ListCmessageComponent";
import AddCmessageComponent from "../contact/AddCmessageComponent";
import EditCmessageComponent from "../contact/EditCmessageComponent";

import HomeComponent from "../pages/HomeComponent";
import JavaeeComponent from "../pages/JavaeeComponent";
import OracleComponent from "../pages/OracleComponent";
import PentahoComponent from "../pages/PentahoComponent";
import TableauComponent from "../pages/TableauComponent";
import AwsComponent from "../pages/AwsComponent";
import PythonComponent from "../pages/PythonComponent";
import AboutComponent from "../pages/AboutComponent";

const AppRouter = () => {
  return(
    <div>
      <div className="col-md-6">
        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />

          <Route path="/javaee" element={<JavaeeComponent />} />
          <Route path="/pentaho" element={<PentahoComponent />} />
          <Route path="/oracle" element={<OracleComponent />} />
          <Route path="/tableau" element={<TableauComponent />} />
          <Route path="/aws" element={<AwsComponent />} />
          <Route path="/python" element={<PythonComponent />} />
          <Route path="/about" element={<AboutComponent />} />

          <Route path="/cmessages" element={<ListCmessageComponent />} />
          <Route path="/addcmessage" element={<AddCmessageComponent />} />
          <Route path="/editcmessage" element={<EditCmessageComponent />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;
