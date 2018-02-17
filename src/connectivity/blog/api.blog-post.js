import fetch from 'isomorphic-fetch';

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

export function createBlogPost(data) {
  return fetch(API_BASE_URL + '/posts', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
}

export function updateBlogPost(id, data) {
  return fetch(API_BASE_URL + '/posts/' + id, {
    method: 'PUT',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
}

export function deleteBlogPost(id) {
  return fetch(API_BASE_URL + '/posts/' + id, {
    method: 'DELETE',
    mode: 'CORS'
  }).then(res => res)
  .catch(err => err);
}