import React from 'react';

import CartLogo from '../../assets/logo-cart.svg';
import CartItems from '../../components/CartItems';
import CartResume from '../../components/CartResume';
import { Container, CartImg, Wrapper } from './styles';

function Cart() {
    return (
        <Container>
            <CartImg src={CartLogo} alt="logo do carrinho" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    );
}
export default Cart;
