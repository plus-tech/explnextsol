import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListCmessageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cmessages: [],
            message: null
        }
        this.deleteCmessage = this.deleteCmessage.bind(this);
        this.editCmessage = this.editCmessage.bind(this);
        this.addCmessage = this.addCmessage.bind(this);
        this.reloadCmessageList = this.reloadCmessageList.bind(this);
    }

    componentDidMount() {
        this.reloadCmessageList();
    }

    reloadCmessageList() {
        ApiService.fetchCmessages()
            .then(response => {
                this.setState({cmessages: response.data, message: response.statusText})
            });
    }

    deleteCmessage(cmessageId) {
        ApiService.deleteCmessage(cmessageId)
           .then(res => {
               this.setState({message : 'Contact message deleted successfully.'});
               this.setState({cmessages: this.state.cmessages.filter(cmessage => cmessage.id !== cmessageId)});
           })

    }

    editCmessage(id) {
        window.localStorage.setItem("cmessageId", id);
        this.props.history.push('/editcmessage');
    }

    addCmessage() {
        window.localStorage.removeItem("cmessageId");
        this.props.history.push('/addcmessage');
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Leave a Message</h3>
                <br />
                <hr />
                <p>Please be kindly advised: This is a pilot page calling the REST APIs deployed on Beanstalk.
                Your message can be viewed, edited or deleted by any other visitor.
                </p>
                <button id="leaveMessage" className="btn btn-danger" onClick={() => this.addCmessage()}>Add</button>
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
                            this.state.cmessages.map( cmessage =>
                                    <tr key={cmessage.id}>
                                        <td>{cmessage.firstName}</td>
                                        <td>{cmessage.lastName}</td>
                                        <td>{cmessage.email}</td>
                                        <td>{cmessage.cmessage}</td>
                                        <td>{cmessage.cdate}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editCmessage(cmessage.id)}> Edit </button>
                                            <button className="btn btn-success" onClick={() => this.deleteCmessage(cmessage.id)}> Delete </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <p>
                Note: The RDS is temporarily shut down.
                </p>
            </div>
        );
    }

}

export default ListCmessageComponent;
