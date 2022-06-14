import React from 'react';
import { useSelector } from 'react-redux';

import Menu from './components/menu';
import { Route } from './components/Router';

import { Regon, News, Auth, Inventory, Property, Transport } from './pages';
import { RootState } from './redux';
import { Epages } from './types';

import './scss/index.scss';

function App() {
    const isMenuActive = useSelector((state: RootState) => state.menu.isActive);

    return (
        <div className="wrapper">
            {isMenuActive && <Menu />}
            <Route name={Epages.news} element={<News />}></Route>
            <Route name={Epages.auth} element={<Auth />}></Route>
            <Route name={Epages.registration} element={<Regon />}></Route>
            <Route name={Epages.inventory} element={<Inventory />}></Route>
            <Route name={Epages.property} element={<Property />}></Route>
            <Route name={Epages.transport} element={<Transport />}></Route>
            <Route name={Epages.main} element={<></>}></Route>
        </div>
    );
}

export default App;
