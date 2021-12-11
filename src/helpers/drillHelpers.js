import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getDrills = async () => {
  const drill = await axios.get(`${dbUrl}/drills.json`);
  const drillData = Object.values(drill.data);
  return drillData;
};

const getSingleDrill = async (fbKey) => {
  const drill = await axios.get(`${dbUrl}/drills/${fbKey}.json`);
  const drillData = drill.data;
  return drillData;
};

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

export {
  getDrills, getSingleDrill, createDrill, deleteDrill,
};
