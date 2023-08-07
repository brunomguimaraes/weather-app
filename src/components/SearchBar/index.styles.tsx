import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid #ccc;
  border-radius: 50px;  // Gives a rounded effect
  width: 250px;  // Adjust width as needed
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077cc;
  }
`;
