import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import paths from '../constants/paths';
import Admin from '../Containers/Admin';
import Cart from '../Containers/Cart';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Products from '../Containers/Products';
import Register from '../Containers/Register';
import PrivateRoute from './private-routes';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact component={Login} path={'/login'} />
                <Route exact component={Register} path={'/cadastro'} />
                <PrivateRoute exact component={Home} path={'/'} />

                <PrivateRoute component={Products} path={'/produtos'} />

                <PrivateRoute component={Cart} path={'/carrinho'} />

                <PrivateRoute component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute component={Admin} path={paths.Products} isAdmin />
                <PrivateRoute
                    component={Admin}
                    path={paths.NewProduct}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.EditProduct}
                    isAdmin
                />
            </Switch>
        </Router>
    );
}
export default Routes;
