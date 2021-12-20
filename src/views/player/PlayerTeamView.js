import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PlayersTeamComp } from '../../components';
import { getTeams } from '../../helpers/index';

export default function PlayerTeamView() {
  const [teams, setTeams] = useState([]);

  const PlayersCardsContainer = styled.div`
    flex-wrap: wrap;
    margin: 2rem 0;
  `;

  const PlayersTeamTitle = styled.div`
    justify-content: center;
    color: #e65722;
  `;

  const PlayerTeamContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  const PlayerTeamCards = styled.div`
    justify-content: center;
    width: 80%;
    margin: 1rem;
  `;

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
    <PlayersCardsContainer>
      <PlayersTeamTitle>
        <h1>Coaches Team View Page</h1>
      </PlayersTeamTitle>
      <PlayerTeamContainer>
        {teams ? (
          <PlayerTeamCards>
            {teams.map((team) => (
              <PlayersTeamComp key={team.teamName} team={team} />
            ))}
          </PlayerTeamCards>
        ) : (
          <>
            <h4>No Team yet</h4>
          </>
        )}
      </PlayerTeamContainer>
    </PlayersCardsContainer>
  );
}
