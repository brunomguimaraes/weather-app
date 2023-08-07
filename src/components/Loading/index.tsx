import React from 'react';

import * as Styled from './index.styles';

const Loading: React.FC = () => (
  <Styled.LoadingWrapper>
    <Styled.Spinner />
  </Styled.LoadingWrapper>
);

export default Loading;
