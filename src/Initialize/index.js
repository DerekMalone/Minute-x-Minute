import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import { SignIn } from '../views';
import { signOutUser } from '../api/auth';

function Initialize() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && authed.uid === process.env.REACT_APP_COACH_UID) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
          profileImage: authed.photoURL,
          isCoach: true,
        };
        setUser(userObj);
        console.warn(user); // need to try and resolve issue where user is not being set upon login?
      } else if (authed && authed.uid !== process.env.REACT_APP_COACH_UID) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
          profileImage: authed.photoURL,
          isCoach: false,
        };
        setUser(userObj);
        console.warn(userObj);
      } else if (user || user === null) {
        setUser(null);
        console.warn(user);
      }
    });
    //   if (authed) {
    //     const userObj = {
    //       uid: authed.uid,
    //       fullName: authed.displayName,
    //       user: authed.email.split('@')[0],
    //       profileImage: authed.photoURL,
    //       isCoach: process.env.REACT_APP_COACH_UID === authed.uid,
    //     };
    //     setUser(userObj);
    //     console.warn(user); // need to try and resolve issue where user is not being set upon login?
    //   } else if (user || user === null) {
    //     setUser(null);
    //   }
    // });
  }, []);

  return (
    <>
      {user ? (
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
        <SignIn user={user} />
      )}
      <h2>Landing Page</h2>
    </>
  );
}

export default Initialize;
