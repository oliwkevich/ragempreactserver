import React from 'react';
import { useSelector } from 'react-redux';

import Menu from './components/menu/menu';
import News from './pages/news';
import Auth from './pages/authorization';

import { RootState } from './redux';
import { Route } from './components/Router';

import { Epages } from './types';

import './scss/index.scss';

function App() {
    const isMenuActive = useSelector((state: RootState) => state.menu.isActive);

    return (
        <div className="wrapper">
            {isMenuActive && <Menu />}
            <Route name={Epages.news} element={<News></News>}></Route>
            <Route name={Epages.auth} element={<Auth></Auth>}></Route>
            <Route name={Epages.main} element={<></>}></Route>
        </div>
    );
}

export default App;
