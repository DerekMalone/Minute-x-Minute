import React, { useState, useEffect } from 'react';
import { PlayersTeamComp } from '../../components';
import { getTeams } from '../../helpers/index';

export default function PlayerTeamView() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTeams().then((teamArray) => {
      if (isMounted) setTeams(teamArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {teams ? (
        <>
          <h1>Coaches Team View Page</h1>
          {teams.map((team) => (
            <PlayersTeamComp key={team.teamName} team={team} />
          ))}
        </>
      ) : (
        <>
          <h4>No Team yet</h4>
        </>
      )}
    </div>
  );
}
