/*
    This class is dedicated to call REST API provided by the back endpoint
    which is built on Spring Boot/Spring/Spring JDBC Template.
*/
import axios from 'axios';

const CMESSAGE_API_BASE_URL = 'http://designsolend.us-west-2.elasticbeanstalk.com/cmessages';

class ApiService {

    fetchCmessages() {
        return axios.get(CMESSAGE_API_BASE_URL);
    }

    fetchCmessageById(cmessageId) {
        return axios.get(CMESSAGE_API_BASE_URL + '/' + cmessageId);
    }

    deleteCmessage(cmessageId) {
        return axios.delete(CMESSAGE_API_BASE_URL + '/' + cmessageId);
    }

    addCmessage(cmessage) {
        return axios.post(CMESSAGE_API_BASE_URL, cmessage);
    }

    editCmessage(cmessage) {
        return axios.put(CMESSAGE_API_BASE_URL + '/' + cmessage.id, cmessage);
    }

}

export default new ApiService();
