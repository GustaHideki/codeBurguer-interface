import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import formatDate from '../../../Utils/formatDate';
import status from './order-status';
import Row from './row';
import { Container, LinkMenu, Menu } from './styles';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [activeStatus, setActiveStatus] = useState([]);
    const [rows, setRows] = useState([]);

    console.log(orders);
    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders');

            setOrders(data);
            setFilteredOrders(data);
        }

        loadOrders();
    }, []);

    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            data: formatDate(order.createdAt),
            status: order.status,
            products: order.products
        };
    }

    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredOrders(orders);
        } else {
            const statusIndex = status.findIndex(
                sts => sts.id === activeStatus
            );
            const newFilteredOrders = orders.filter(
                order => order.status === status[statusIndex].value
            );
            setFilteredOrders(newFilteredOrders);
        }
    }, [status]);

    useEffect(() => {
        const newRows = filteredOrders.map(ord => createData(ord));
        setRows(newRows);
    }, [filteredOrders]);

    function handleStatus(status) {
        if (status.id === 1) {
            setFilteredOrders(orders);
        } else {
            const newOrders = orders.filter(
                order => order.status === status.value
            );
            setFilteredOrders(newOrders);
        }
        setActiveStatus(status.id);
    }

    return (
        <Container>
            <Menu>
                {status &&
                    status.map(status => (
                        <LinkMenu
                            onClick={() => handleStatus(status)}
                            isActiveStatus={activeStatus === status.id}
                            key={status.id}
                        >
                            {status.label}
                        </LinkMenu>
                    ))}
            </Menu>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Status do pedido</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <Row
                                key={row.orderId}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
export default Orders;
