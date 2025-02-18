import * as React from 'react';
import {useNavigate} from "react-router-dom";

import {apiAddCmsg} from "../../service/ApiService";
import {MenuItemPath} from "../../common/constant.js";


export default function AddCmessageComponent() {
  const navigate = useNavigate();

  const [cmsg, setCmsg] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    cmessage: '',
    cdate: '',
    message: null
  });

  const saveCmessage = (e) => {
    e.preventDefault();
    apiAddCmsg(cmsg)
      .then(res => {
          setCmsg({...cmsg, message: 'Message added successfully.'});
      });
    //
    // navigate back to View Messages
    navigate(MenuItemPath.viewcmsg);
  }

  const onChange = (e) => {
    setCmsg({...cmsg, [e.target.name]: e.target.value });
  }

  return(
    <div className="toplevelpage">
      <h3 className="text-center">Drop a Message</h3>
      <br />
      <hr />
      <form>
        <table id="AddMessage" className="table table-striped">
          <tbody>
            <tr>
              <td><label>First Name</label></td>
              <td><input type="text" placeholder="firstName" name="firstName" className="form-control" value={cmsg.firstName} onChange={onChange}/></td>
            </tr>
            <tr>
              <td><label>Last Name</label></td>
              <td><input type="text" placeholder="lastName" name="lastName" className="form-control" value={cmsg.lastName} onChange={onChange}/></td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td><input type="text" placeholder="email" name="email" className="form-control" value={cmsg.email} onChange={onChange}/></td>
            </tr>
            <tr>
              <td><label>Message</label></td>
              <td><input type="textarea" placeholder="cmessage" name="cmessage" className="form-control" value={cmsg.cmessage} onChange={onChange}/></td>
            </tr>
            <tr>
              <td><label>&nbsp;</label></td>
              <td><button className="btn btn-success" onClick={saveCmessage}>Save</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
