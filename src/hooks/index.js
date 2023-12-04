import React from 'react';

import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';

const appProvider = ({ children }) => (
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
);

export default appProvider;
