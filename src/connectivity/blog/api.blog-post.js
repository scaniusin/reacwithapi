import fetch from 'isomorphic-fetch';
import {getBaseRequestConfig} from '../baseRequestConfig';
import asyncFetch from "../async-fetch";
/* global API_BASE_URL */

export function fetchBlogPost(id) {
  return fetch(API_BASE_URL + '/posts/' + id, {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchBlogPosts() {
  return fetch(API_BASE_URL + '/posts', {
    method: 'GET',
    mode:'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export async function createBlogPost(data, userId) {
  // return fetch(API_BASE_URL + '/posts/' + uid, {
  //   method: 'POST',
  //   mode: 'cors',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => {
  //   return res;
  // }).catch(err => err);



    const baseRequestConfig = getBaseRequestConfig();

    const requestConfig = Object.assign({}, baseRequestConfig, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    /* global API_BASE_URL */
    const url = API_BASE_URL + '/posts/' + userId;

    const response = await asyncFetch(url, requestConfig);

    return response;
    // return response.json();  //not working
}

export async function updateBlogPost(id, data, userId) {
  // return fetch(API_BASE_URL + '/posts/' + id, {
  //   method: 'PUT',
  //   mode: 'cors',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => {
  //   return res;
  // }).catch(err => err);

    const baseRequestConfig = getBaseRequestConfig();

    const requestConfig = Object.assign({}, baseRequestConfig, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    /* global API_BASE_URL */
    const url = API_BASE_URL + '/posts/' + userId + '/' + id;

    const response = await asyncFetch(url, requestConfig);

    return response;
}

export function deleteBlogPost(id) {
  return fetch(API_BASE_URL + '/posts/' + id, {
    method: 'DELETE',
    mode: 'cors'
  }).then(res => res)
  .catch(err => err);
}