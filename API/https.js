import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = "https://bhagavad-gita3.p.rapidapi.com";

axios.interceptors.request.use(
  (config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        'Content-Type': 'application/json , multipart/form-data',
        'X-RapidAPI-Key': 'c337285d20mshdf756b8e42c6ed4p1f609bjsn3ca269ad7f61',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
      }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @param {string} url
 * @param {Object} params
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
        // eslint-disable-next-line no-shadow
        paramsSerializer(params) {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const apiGetchaptersDataList = () => get(`/v2/chapters/`)
export const apiGetChaptersData = (params) => get(`/v2/chapters/${params}/`)
export const apiGetChaptersVerseData = (params) => get(`/v2/chapters/${params}/verses/`)

