import React from 'react';
import styled from 'styled-components';
import { signInUser } from '../api/auth';

export default function SignIn() {
  const StyledWelcome = styled.div`
    margin: 15rem 2rem;
    color: #007a4b;
  `;

  return (
    <StyledWelcome>
      <div className="text-center mt-5">
        <h1>Welcome to Minute x Minute!</h1>
        <button type="button" className="btn btn-success" onClick={signInUser}>
          Sign In
        </button>
      </div>
    </StyledWelcome>
  );
}
