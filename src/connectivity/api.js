import HttpApiCallError from '../errors/HttpApiCallError';

export async function login(username, password) {

  const url = 'http://127.0.0.1:8000/app_acceptance.php/login';

  const requestConfig = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  const response = await fetch(url, requestConfig);

  const data = await response.json();

  if (response.status === 200) {
    return data;
  }

  throw new HttpApiCallError(
    data.message || response.statusText,
    response.status
  );

}
