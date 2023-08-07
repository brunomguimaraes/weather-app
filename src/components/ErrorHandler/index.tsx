import React from 'react';

import * as Styled from './index.styles';

interface ErrorHandlerProps {
  message: string;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ message }) => (
  <Styled.ErrorWrapper>{message}</Styled.ErrorWrapper>
);

export default ErrorHandler;
