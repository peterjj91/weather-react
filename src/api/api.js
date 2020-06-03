import queryString from 'query-string';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const API_URL = 'https://www.metaweather.com/api/location';

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((response) => {
        response.json().then((error) => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const { params = {} } = options;

    let queryForLink = queryString.stringify(
      { ...params },
      { arrayFormat: 'comma' }
    );

    return fetchApi(`${PROXY_URL}${API_URL}${url}${queryForLink}`, {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
}
