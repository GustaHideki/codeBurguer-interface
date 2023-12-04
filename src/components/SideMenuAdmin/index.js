import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

import { useUser } from '../../hooks/UserContext';
import listLinks from './menu-list';
import { Container, ItemContainer, ListLink } from './styles';

function sideMenuAdmin({ path }) {
    const { logout } = useUser;
    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label} </ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
                <LogoutIcon style={{ color: '#FFFFFF' }} />
                <ListLink to="/login" onClick={logout}>
                    Sair
                </ListLink>
            </ItemContainer>
        </Container>
    );
}
export default sideMenuAdmin;
