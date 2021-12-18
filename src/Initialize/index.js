import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import MinxMinNavbar from '../components/Navbar';
import Route from '../routes/index';
import { SignIn } from '../views';
//  CoachesTeamView,  , CoachesDrillsView from above line
// import {
//   CoachesTeamForm,
//   CoachesDrillForm,
//   CoachesPracticeForm,
// } from '../components';
// import CoachesPracticesView from '../views/coach/CoachesPracticesView';

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
      } else if (authed && authed.uid !== process.env.REACT_APP_COACH_UID) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
          profileImage: authed.photoURL,
          isCoach: false,
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
        <>
          <div className="text-center mt-2">
            <MinxMinNavbar user={user} />
            <Route user={user} />
          </div>
        </>
      ) : (
        <SignIn user={user} />
      )}
    </>
  );
}

/* <button
type="button"
className="btn btn-danger"
onClick={signOutUser}
>
Sign Out
</button> */

export default Initialize;
