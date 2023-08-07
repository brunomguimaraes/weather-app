import React from 'react';
import styled from 'styled-components';

const NoMatchesWrapper = styled.div`
  padding: 15px;
  margin: 15px 0;
  color: #555;
  text-align: center;
`;

const NoMatches: React.FC = () => (
  <NoMatchesWrapper>No matches found for this address.</NoMatchesWrapper>
);

export default NoMatches;
