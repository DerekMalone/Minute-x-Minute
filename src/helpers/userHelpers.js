import firebase from 'firebase/app';

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

export default getCurrentUsersUid;
