import React, { useState } from 'react';

import useDebouncedFunction from '../../hooks/useDebouncedFunction';

import * as Styled from './index.styles';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const debouncedSearch = useDebouncedFunction(handleSearch, 600);

  React.useEffect(() => {
    if (searchTerm) {
      debouncedSearch();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

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
