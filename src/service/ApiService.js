/*
    The collection of functions here is dedicated to call REST APIs provided by the back endpoint
    which are built on Spring Boot/Spring/Spring JDBC Template.
*/
import axios from 'axios';

import {ContactEndpoint} from '../common/constant.js';

import {TestListcmsg, TestStatusText} from '../util/testdata.js';


export function apiFetchCmsg() {
  // return axios.get(ContactEndpoint);

  //
  // for test
  console.log('test apiFetchCmsg');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText, data:TestListcmsg});
    }, 2000);
  });
}


export function apiFetchCmsgById(cmsgId) {
  // return axios.get(ContactEndpoint + '/' + cmsgId);

  //
  // for test
  console.log('test apiFetchCmsgById: ', cmsgId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText, data:TestListcmsg[cmsgId-1]});
    }, 2000);
  });
}


export function apiDeleteCmsg(cmsgId) {
  return axios.delete(ContactEndpoint + '/' + cmsgId);
}


export function apiEditCmsg(cmsg) {
  // return axios.put(ContactEndpoint + '/' + cmsg.id, cmsg);

  //
  // for test
  console.log('test apiEditCmsg: ', cmsg);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText});
    }, 2000);
  });
}


export function apiAddCmsg(cmsg){
  // return axios.post(ContactEndpoint, cmsg);

  //
  // for test
  console.log('test apiAddCmsg: ', cmsg);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText});
    }, 2000);
  });
}
