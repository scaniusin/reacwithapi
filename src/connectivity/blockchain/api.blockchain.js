import fetch from 'isomorphic-fetch';

const API_BASE_URL_BLOCKCHAIN = 'http://localhost:3001';
// /* global API_BASE_URL */
export function fetchBlocks() {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/blocks', {
    method: 'GET',
    mode:'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchBlock(hash) {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/block/' + hash, {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchAddress(address) {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/address/' + address, {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchTransaction(transaction) {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/transaction/' + transaction, {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}


// fetchMyAddress, fetchMyBalance, fetchTransactionPool
export function fetchKeyPair() {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/keypair', {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchMyAddress() {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/address', {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchMyBalance(address) {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/balance/' + address, {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchTransactionPool() {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/transactionPool', {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchMineBlock() {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/mineBlock', {
    method: 'POST',
    mode: 'cors'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchsendTransaction(data) {
  return fetch(API_BASE_URL_BLOCKCHAIN + '/sendTransaction', {
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