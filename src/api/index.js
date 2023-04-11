const baseURL = "http://localhost:5000/api";

const requestHandler = (res) => {
  return res.json();
};

const errorHandler = (err) => {
  console.error(err);
  throw err;
};

const fetchi = (url) => {
  url = baseURL + url;
  return fetch(url).then(requestHandler).catch(errorHandler);
};

const API = {
  get: (url) => fetchi(url),
};

export default API;
