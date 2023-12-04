import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import api from '../../services/api';
import formatCurrency from '../../Utils/formatCurrency';
import { Button } from '../Button';
import { Container } from './styles';

function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(5);

    const { cartProducts } = useCart();

    useEffect(() => {
        const sumAllItens = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sumAllItens);
    }, [cartProducts]);

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity };
        });

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando o seu pedido....',
            success: 'Pedido realizado com sucesso!',
            error: 'Falha ao realizar seu pedido,tente novamente!'
        });
    };

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="delivery-tax">taxa de entrega</p>
                    <p className="delivery-price">
                        {formatCurrency(deliveryTax)}
                    </p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button
                onClick={submitOrder}
                style={{ width: '100%', marginTop: 30 }}
            >
                Finalizar Pedido
            </Button>
        </div>
    );
}
export default CartResume;
