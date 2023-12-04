import React from 'react';
import { useHistory } from 'react-router-dom';

import { useCart } from '../../hooks/CartContext';
import { Button } from '../Button';
import { Container, Image, ProductName, ProductPrice } from './styles';

export function CardProducts({ product }) {
    const { putProductsInCart } = useCart();
    const { push } = useHistory();
    console.log(product);
    return (
        <Container>
            <Image src={product.url} alt="Imagem do produto" />
            <div>
                <ProductName> {product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button
                    onClick={() => {
                        putProductsInCart(product);
                        push('/carrinho');
                    }}
                >
                    Adicionar
                </Button>
            </div>
        </Container>
    );
}
