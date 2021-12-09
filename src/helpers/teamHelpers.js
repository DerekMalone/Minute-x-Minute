import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTeams = async () => {
  const teamArray = axios
    .get(`${dbUrl}/teams.json`)
    .then((response) => Object.values(response.data));
  return teamArray;
};

const createTeam = (teamItem) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/teams.json`, teamItem)
    .then((obj) => {
      const fbkey = { firebaseKey: obj.data.name };
      axios.patch(`${dbUrl}/teams/${obj.data.name}.json`, fbkey).then(() => {
        getTeams().then(resolve);
      });
    })
    .catch(reject);
});

export { getTeams, createTeam };
