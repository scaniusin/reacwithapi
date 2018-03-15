import asyncFetch from '../async-fetch';
import {getBaseRequestConfig} from '../baseRequestConfig';
/* global API_BASE_URL */

export async function fetchMyWalletAddress(userId) {

  const url = API_BASE_URL + '/wallet/' + userId + '/address';

  const response = await asyncFetch(url, getBaseRequestConfig());

  return await response.json();
}

export async function createUpdateWallet(userId, publicAddress) {

  const baseRequestConfig = getBaseRequestConfig();

  const requestConfig = Object.assign({}, baseRequestConfig, {
    method: 'POST',
    body: JSON.stringify({
      "user_id": userId,
      "public_address": publicAddress,
    })
  });

  const url = API_BASE_URL + '/wallet/' + userId + '/address';

  const response = await asyncFetch(url, requestConfig);

  return response.json();
}