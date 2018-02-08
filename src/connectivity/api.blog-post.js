import fetch from 'isomorphic-fetch';

export function fetchBlogPost(id) {
  return fetch('http://localhost:8000/posts/' + id, {
    method: 'GET',
    mode: 'CORS'
  }).then(res => res.json())
    .catch(err => err);
}