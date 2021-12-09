import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import { Route } from 'react-router-dom';
import MinxMinNavbar from '../components/Navbar';
import { CoachesTeamView, SignIn, CoachesDrillsView } from '../views';
import { CoachesTeamForm, CoachesDrillForm } from '../components';
import CoachesPracticesView from '../views/coach/CoachesPracticesView';

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
        // console.warn(user?.isCoach);
      } else if (authed && authed.uid !== process.env.REACT_APP_COACH_UID) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
          profileImage: authed.photoURL,
          isCoach: false,
        };
        setUser(userObj);
        // console.warn(userObj);
      } else if (user || user === null) {
        setUser(null);
        // console.warn(user);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <div className="text-center mt-2">
            {/* <button
            type="button"
            className="btn btn-danger"
            onClick={signOutUser}
          >
            Sign Out
          </button> */}
          </div>
        </>
      ) : (
        <SignIn user={user} />
      )}
      <MinxMinNavbar user={user} />
      <Route user={user} />
      <CoachesTeamView />
      <CoachesPracticesView />
      <CoachesDrillsView />
      <CoachesTeamForm />
      <CoachesDrillForm />
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
