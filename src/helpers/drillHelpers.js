import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getDrills = async () => {
  const drill = await axios.get(`${dbUrl}/drills.json`);
  const drillData = Object.values(drill.data);
  return drillData;
};

const getSingleDrill = (fbKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/drills/${fbKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createDrill = (drillItem) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/drills.json`, drillItem)
    .then((obj) => {
      const fbkey = { firebaseKey: obj.data.name };
      axios.patch(`${dbUrl}/drills/${obj.data.name}.json`, fbkey).then(() => {
        getDrills().then(resolve);
      });
    })
    .catch(reject);
});

const deleteDrill = (drillKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/drills/${drillKey}.json`)
    .then(() => getDrills().then(resolve))
    .catch(reject);
});

// const getSingleDrill = (drillKey) => new Promise((resolve, reject) => {
//   axios
//     .get(`${dbUrl}/drills/${drillKey}.json`)
//     .then((response) => resolve(response.data))
//     .catch(reject);
// });

export {
  getDrills, getSingleDrill, createDrill, deleteDrill,
};
