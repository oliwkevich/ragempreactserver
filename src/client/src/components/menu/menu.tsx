import React, { FC } from 'react';

import './components/menu.scss';

import useRouter from '../../hooks/useRouter';
import listMenuItems from './components/listItem';
import { Epages } from '../../types';
import eventsManager from './../../Events';

const Menu: FC = () => {
    const { setActivePage } = useRouter();

    return (
        <div className="menu">
            {listMenuItems.map((item) => {
                return (
                    <button
                        key={item.id}
                        onClick={() => {
                            setActivePage(item.nameRedux);
                        }}
                        className="item"
                    >
                        <img src={`${item.icon}`} alt={item.name} />
                        <span>{item.name}</span>
                    </button>
                );
            })}
            <button
                onClick={() => {
                    setActivePage(Epages.main);
                }}
            >
                закрытть страницы
            </button>
        </div>
    );
};

export default Menu;

// ПРИМЕР ВЗАИМОДЕЙСТВИЯ CEF - CLIENT

// function handler(toggle: boolean) {
//     mp.trigger('log');
//     setActivePage(Epages.auth);
// }
// eventsManager.add('switchMenu', handler);
