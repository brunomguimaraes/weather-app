import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  background-color: ${props => props.theme.colors.error};
  border-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textPrimary};
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
`;