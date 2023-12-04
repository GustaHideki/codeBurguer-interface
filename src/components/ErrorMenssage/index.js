import React from 'react';

import { ErrorMessageStyles } from './styles';

function ErrorMenssage({ children }) {
    return <ErrorMessageStyles>{children}</ErrorMessageStyles>;
}
export default ErrorMenssage;
