/*
    This class is dedicated to call REST API provided by the back endpoint
    which is built on Spring Boot/Spring/Spring JDBC Template.
*/
import axios from 'axios';

import {ContactEndpoint} from '../common/constant.js';

import {TestListcmsg, TestStatusText} from '../util/testdata.js';

// export function apiFetchCmsg() {
//   return axios.get(ContactEndpoint);
// }
//
// for test
export function apiFetchCmsg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText, data:TestListcmsg});
    }, 2000);
  });
}

// export function apiFetchCmsgById(cmsgId) {
//   return axios.get(ContactEndpoint + '/' + cmsgId);
// }
//
// for test
export function apiFetchCmsgById(cmsgId) {
  console.log('api fetch: ', cmsgId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText, data:TestListcmsg[cmsgId-1]});
    }, 2000);
  });
}

export function apiDeleteCmsg(cmsgId) {
  return axios.delete(ContactEndpoint + '/' + cmsgId);
}


// export function apiEditCmsg(cmsg) {
//   return axios.put(ContactEndpoint + '/' + cmsg.id, cmsg);
// }
//
// for test
export function apiEditCmsg(cmsg) {
  console.log('api Saved: ', cmsg);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText});
    }, 2000);
  });
}


// export function apiAddCmsg(cmsg){
//   return axios.post(ContactEndpoint, cmsg);
// }
//
// for test
export function apiAddCmsg(cmsg) {
  console.log('api Saved: ', cmsg);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({statusText: TestStatusText});
    }, 2000);
  });
}
