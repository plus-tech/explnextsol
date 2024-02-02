import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddCmessageComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            cmessage: '',
            cdate: '',
            message: null
        }
        this.saveCmessage = this.saveCmessage.bind(this);
    }

    saveCmessage = (e) => {
        e.preventDefault();
        let cmessage = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, cmessage: this.state.cmessage, cdate: this.state.cdate};
        ApiService.addCmessage(cmessage)
            .then(res => {
                this.setState({message : 'Message added successfully.'});
                this.props.history.push('/cmessages');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h3 className="text-center">Add a Message</h3>
                <br />
                <hr />
                <form>

                  <table id="AddMessage" className="table table-striped">
                    <tr>
                    <td><label>First Name</label></td>
                    <td><input type="text" placeholder="firstName" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                    <td><label>Last Name</label></td>
                    <td><input type="text" placeholder="lastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                    <td><label>Email</label></td>
                    <td><input type="text" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/></td>
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

export default AddCmessageComponent;

/*
<div className="form-group">
    <label>First Name:</label>
    <input type="text" placeholder="firstName" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
</div>

<div className="form-group">
    <label>Last Name:</label>
    <input type="text" placeholder="lastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
</div>

<div className="form-group">
    <label>Email:</label>
    <input type="text" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
</div>

<div className="form-group">
    <label>Message:</label>
    <input type="textarea" placeholder="cmessage" name="cmessage" className="form-control" value={this.state.cmessage} onChange={this.onChange}/>
</div>
*/
