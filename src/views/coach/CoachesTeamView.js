import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CoachesTeamComp } from '../../components';
import getTeams from '../../helpers/teamHelpers';

export default function CoachesTeamView() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTeams().then((teamArray) => {
      if (isMounted) setTeams(teamArray);
      console.warn(teams);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {teams ? (
        <>
          <Link to="/teamForm" type="button" className="btn btn-success">
            Create a New Team
          </Link>
          {teams.map((team) => (
            <CoachesTeamComp key={team.teamName} team={team} />
          ))}
        </>
      ) : (
        <>
          <h4>No Team yet</h4>
          <button type="button" className="btn btn-success">
            Create a New Team
          </button>
        </>
      )}
      <h1>Coaches Team View Page</h1>
    </div>
  );
}
