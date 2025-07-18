//
// Page navigation

import {
  Route,
  Routes,
} from 'react-router-dom'

import {MenuItemPath} from "../../common/constant.js";

import ListCmessageComponent from "../contact/ListCmessageComponent";
import AddCmessageComponent from "../contact/AddCmessageComponent";
import EditCmessageComponent from "../contact/EditCmessageComponent";

import HomeComponent from "../pages/HomeComponent";
import JavaComponent from "../pages/JavaComponent";
import OracleComponent from "../pages/OracleComponent";
import PentahoComponent from "../pages/PentahoComponent";
import TableauComponent from "../pages/TableauComponent";
import AwsComponent from "../pages/AwsComponent";
import PythonComponent from "../pages/PythonComponent";
import AboutComponent from "../pages/AboutComponent";

const AppRouter = () => {
  return(
      <Routes>
        <Route path={MenuItemPath.default}      exact element={<HomeComponent />} />
        <Route path={MenuItemPath.home}         element={<HomeComponent />} />

        <Route path={MenuItemPath.java}         element={<JavaComponent />} />
        <Route path={MenuItemPath.pentaho}      element={<PentahoComponent />} />
        <Route path={MenuItemPath.oracle}       element={<OracleComponent />} />
        <Route path={MenuItemPath.tableau}      element={<TableauComponent />} />
        <Route path={MenuItemPath.aws}          element={<AwsComponent />} />
        <Route path={MenuItemPath.python}       element={<PythonComponent />} />
        <Route path={MenuItemPath.about}        element={<AboutComponent />} />

        <Route path={MenuItemPath.viewcmsg}     element={<ListCmessageComponent />} />
        <Route path={MenuItemPath.addcmsg}      element={<AddCmessageComponent />} />
        <Route path={MenuItemPath.editcmsg}     element={<EditCmessageComponent />} />
      </Routes>
  )
}

export default AppRouter;
