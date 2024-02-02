import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditCmessageComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            cmessage: '',
            cdate: ''
        }
        this.saveCmessage = this.saveCmessage.bind(this);
        this.loadCmessage = this.loadCmessage.bind(this);
    }

    componentDidMount() {
        this.loadCmessage();
    }

    loadCmessage() {
        ApiService.fetchCmessageById(window.localStorage.getItem("cmessageId"))
            .then((response) => {
                let cmessage = response.data;
                this.setState({
                id: cmessage.id,
                firstName: cmessage.firstName,
                lastName: cmessage.lastName,
                email: cmessage.email,
                cmessage: cmessage.cmessage,
                cdate: cmessage.cdate
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveCmessage = (e) => {
        e.preventDefault();
        let cmessage = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, cmessage: this.state.cmessage};
        ApiService.editCmessage(cmessage)
            .then(res => {
                this.setState({message : 'Message added successfully.'});
                this.props.history.push('/cmessages');
            });
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Edit the Message</h3>
                <br />
                <hr />
                <form>
                <table id="EditMessage" className="table table-striped">
                  <tr>
                  <td><label>First Name</label></td>
                  <td><input type="text" placeholder="firstName" name="firstName" className="form-control" defaultValue={this.state.firstName}/></td>
                  </tr>
                  <tr>
                  <td><label>Last Name</label></td>
                  <td><input placeholder="lastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/></td>
                  </tr>
                  <tr>
                  <td><label>Email</label></td>
                  <td><input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/></td>
                  </tr>
                  <tr>
                  <td><label>Message</label></td>
                  <td><input type="textarea" placeholder="cmessage" name="cmessage" className="form-control" value={this.state.cmessage} onChange={this.onChange}/></td>
                  </tr>
                  <tr>
                  <td><label>&nbsp;</label></td>
                  <td><button className="btn btn-success" onClick={this.saveCmessage}>Save</button></td>
                  </tr>
                </table>
                </form>
            </div>
        );
    }
}

export default EditCmessageComponent;

/*
<div className="form-group">
    <label>First Name:</label>
    <input type="text" placeholder="firstName" name="firstName" className="form-control" defaultValue={this.state.firstName}/>
</div>

<div className="form-group">
    <label>Last Name:</label>
    <input placeholder="lastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
</div>

<div className="form-group">
    <label>Email:</label>
    <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
</div>

<div className="form-group">
    <label>Message:</label>
    <input type="text" placeholder="cmessage" name="cmessage" className="form-control" value={this.state.cmessage} onChange={this.onChange}/>
</div>
<button className="btn btn-success" onClick={this.saveCmessage}>Save</button>
*/
