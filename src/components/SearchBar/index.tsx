import React, { useState } from 'react';

import useDebouncedFunction from '../../hooks/useDebouncedFunction';

import * as Styled from './index.styles';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  const debouncedSearch = useDebouncedFunction(handleSearch, 600);

  React.useEffect(() => {
    if (searchTerm) {
      debouncedSearch();
    }
  }, [debouncedSearch, searchTerm]);

  return (
    <Styled.SearchWrapper>
      <Styled.SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </Styled.SearchWrapper>
  );
};

export default SearchBar;
