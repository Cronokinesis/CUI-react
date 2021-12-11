import config from '../config';
const baseURL = `${config.apiPath}`;

const processFetch = (res) => {
  return Promise.all([ res.ok, res.json() ])
    .then(([ ok, response ]) => {
      if (!ok || !response?.success) {
        return Promise.reject(response);
      }
      return Promise.resolve(response);
    });
}

const getApi = (url) => {
  return fetch(`${baseURL}${url}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: 'Bearer token',
    },
  }).then(processFetch);
}

const postApi = (url, data = {}) => {
  return fetch(`${baseURL}${url}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer token',
    },
    body: JSON.stringify(data),
  }).then(processFetch);
}

const putApi = (url, data = {}) => {
  return fetch(`${baseURL}${url}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer token',
    },
    body: JSON.stringify(data),
  }).then(processFetch);
}

const deleteApi = (url, data = {}) => {
  return fetch(`${baseURL}${url}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer token',
    },
    body: JSON.stringify(data),
  }).then(processFetch);
}

export {
  getApi,
  postApi,
  putApi,
  deleteApi,
};