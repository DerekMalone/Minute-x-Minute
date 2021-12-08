import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTeams = async () => {
  const teamArray = axios
    .get(`${dbUrl}/teams.json`)
    .then((response) => Object.values(response.data));
  return teamArray;
};

export default getTeams;
