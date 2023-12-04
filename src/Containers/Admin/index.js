import React from 'react';

import SideMenuAdmin from '../../components/SideMenuAdmin';
import paths from '../../constants/paths';
import EditProducts from './EditProducts';
import ListProducts from './ListProducts';
import NewProducts from './NewProduct';
import Orders from './Orders';
import { Container, ContainerItens } from './styles';

function Admin({ match: { path } }) {
    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItens>
                {path === paths.Order && <Orders />}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProduct && <NewProducts />}
                {path === paths.EditProduct && <EditProducts />}
            </ContainerItens>
        </Container>
    );
}
export default Admin;
