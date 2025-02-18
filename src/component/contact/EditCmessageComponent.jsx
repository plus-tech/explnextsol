import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import {apiFetchCmsgById, apiEditCmsg} from "../../service/ApiService";
import {MenuItemPath} from "../../common/constant.js";

export default function EditCmessageComponent() {
  const navigate = useNavigate;

  const [cmsg, setCmsg] = React.useState({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    cmessage: '',
    cdate: ''
  });

  React.useEffect( () => {
    let ignore = false;

    apiFetchCmsgById(window.localStorage.getItem("cmessageId"))
      .then((response) => {
        let cmessage = response.data;

        if (!ignore) {
          setCmsg({...cmsg,
            id: cmessage.id,
            firstName: cmessage.firstName,
            lastName: cmessage.lastName,
            email: cmessage.email,
            cmessage: cmessage.cmessage,
            cdate: cmessage.cdate
          });
        }
      });

    return () => {
      ignore = true;
    }
  }, [cmsg]);

  const onChange = (e) => {
    setCmsg({...cmsg, [e.target.name]: e.target.value });
  }

  const saveCmessage = (e) => {
    e.preventDefault();
    apiEditCmsg(cmsg)
      .then(res => {
        setCmsg({...cmsg, message: 'Message added successfully.'});
      });
    //
    // navigate back to View Messages
    navigate(MenuItemPath.viewcmsg);
  }


  return (
    <div className="toplevelpage">
      <h3 className="text-center">Edit the Message</h3>
      <br />
      <hr />
      <form>
      <table id="EditMessage" className="table table-striped">
        <tbody>
          <tr>
            <td><label>First Name</label></td>
            <td><input type="text" placeholder="firstName" name="firstName" className="form-control" defaultValue={cmsg.firstName} onChange={onChange}/></td>
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
