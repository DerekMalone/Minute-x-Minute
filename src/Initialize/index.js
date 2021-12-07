import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import { SignIn } from '../views';
import { signOutUser } from '../api/auth';

function Initialize() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(null);
      }
    });
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
