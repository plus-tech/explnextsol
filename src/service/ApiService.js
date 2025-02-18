/*
    This class is dedicated to call REST API provided by the back endpoint
    which is built on Spring Boot/Spring/Spring JDBC Template.
*/
import axios from 'axios';

import {ContactEndpoint} from '../common/constant.js';


export function apiFetchCmsg() {
  return axios.get(ContactEndpoint);
}

export function apiFetchCmsgById(cmsgId) {
  return axios.get(ContactEndpoint + '/' + cmsgId);
}

export function apiDeleteCmsg(cmsgId) {
  return axios.delete(ContactEndpoint + '/' + cmsgId);
}


export function apiEditCmsg(cmsg) {
  return axios.put(ContactEndpoint + '/' + cmsg.id, cmsg);
}

export function apiAddCmsg(cmsg){
  return axios.post(ContactEndpoint, cmsg);
}
