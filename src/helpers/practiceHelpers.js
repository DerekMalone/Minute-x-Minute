import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPractices = async () => {
  const practArray = axios
    .get(`${dbUrl}/practices.json`)
    .then((response) => Object.values(response.data));
  return practArray;
};

const createPractice = (practItem) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/practices.json`, practItem)
    .then((obj) => {
      const fbkey = { firebaseKey: obj.data.name };
      axios
        .patch(`${dbUrl}/practices/${obj.data.name}.json`, fbkey)
        .then(() => {
          getPractices().then(resolve);
        });
    })
    .catch(reject);
});

const deletePractice = (practKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/practices/${practKey}.json`)
    .then(() => getPractices().then(resolve))
    .catch(reject);
});

const getSinglePractice = (practKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/practices/${practKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updatePractice = (practObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/practices/${practObj.firebaseKey}.json`, practObj)
    .then(() => getSinglePractice().then(resolve))
    .catch(reject);
});

export {
  getPractices,
  createPractice,
  deletePractice,
  getSinglePractice,
  updatePractice,
};
