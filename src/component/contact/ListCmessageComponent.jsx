import * as React from 'react';
import {useNavigate} from "react-router-dom";

import {apiFetchCmsg, apiDeleteCmsg} from "../../service/ApiService";
import {MenuItemPath} from "../../common/constant.js";

/*
const [userInfo, setUserInfo] = React.useState(userInfoInitial);

const onChange = (e) =>{
  setUserInfo({...userInfo, [e.target.name]: e.target.value});
};
<form id="regForm" action='/register.php' onSubmit={handleSubmit}>
  <h1>Register:</h1>
  { currentTab == 0 &&
  <div className="tab">Name:
    <p><input placeholder="First name..." name="fname" value={userInfo.fname}
      onChange={onChange} />
    </p>
  </div>
  }

  const [userInfo, setUserInfo] = React.useState({
    email: '',
    psw: '',
    pswrepeat: '',
    remember: 'on',
  });
*/


export default function ListCmessageComponent() {
  const navigate = useNavigate();

  const [cmsglist, setCmsglist] = React.useState(null);
  const [message, setMessage] = React.useState("");

  React.useEffect( () => {
    let ignore = false;

    apiFetchCmsg()
      .then(response => {
        if (!ignore) {
          setCmsglist(response.data);
          setMessage(response.statusText);
        }
      });

    return () => {
      ignore = true;
    }
  }, [cmsglist, message]);

  const deleteCmessage = (cmessageId) => {
    apiDeleteCmsg(cmessageId)
     .then(res => {
       setMessage('Contact message deleted successfully.');
       setCmsglist(cmsglist.filter(cmsg => cmsg.id !== cmessageId));
     })
  }

  const editCmessage = (id) => {
    window.localStorage.setItem("cmessageId", id);
    navigate(MenuItemPath.editcmsg);
  }

  const addCmessage = () => {
    window.localStorage.removeItem("cmessageId");
    navigate(MenuItemPath.addcmsg);
  }

  return (
    <div className="toplevelpage">
      <h3 className="text-center">Leave a Message</h3>
      <br />
      <hr />
      <p>Please be kindly advised: This is a pilot page calling the REST APIs deployed on Beanstalk.
      Your message can be viewed, edited or deleted by any other visitor.
      </p>
      <button id="addMessage" className="btn btn-danger" onClick={() => addCmessage()}>Add</button>
      <br /><br />
      <table id="ContactMessage" className="table table-striped">
        <thead>
          <tr>
            <th className="hidden">Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cmsglist && cmsglist.map( cmsg =>
              <tr key={cmsg.id}>
                <td>{cmsg.firstName}</td>
                <td>{cmsg.lastName}</td>
                <td>{cmsg.email}</td>
                <td>{cmsg.cmessage}</td>
                <td>{cmsg.cdate}</td>
                <td>
                  <button className="btn btn-success" onClick={() => editCmessage(cmsg.id)}> Edit </button>
                  <button className="btn btn-success" onClick={() => deleteCmessage(cmsg.id)}> Delete </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      <p>
      Note: The RDS is permanently shut down.
      </p>
    </div>
  );
}
