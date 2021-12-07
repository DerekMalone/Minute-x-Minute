import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import { SignIn } from '../views';
import { signOutUser } from '../api/auth';

function Initialize() {
  // const [user, setUser] = useState({});
  const [coach, setCoach] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      console.warn(process.env.REACT_APP_COACH_UID);
      if (authed) {
        console.warn(authed.uid);
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
          profileImage: authed.photoURL,
          isCoach: process.env.REACT_APP_COACH_UID === authed.uid,
        };
        setCoach(userObj);
        console.warn(coach);
      } else if (coach || coach === null) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
          profileImage: authed.photoURL,
        };
        setPlayer(userObj);
        setCoach(false);
      }
    });
  }, []);

  return (
    <>
      {coach ? (
        <div className="text-center mt-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={signOutUser}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <SignIn player={player} />
      )}
      <h2>Landing Page</h2>
    </>
  );
}

export default Initialize;
