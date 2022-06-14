import React, { FC, useRef } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import useChangeTypeMenu from '../../hooks/activeItemsInMenu';
import useRouter from '../../hooks/useRouter';
import { Epages, EtypeMenu } from '../../types';

import './components/menu.scss';
import NavLinks from './components/navLinks';
import { ReactComponent as Logo } from '../../images/logo.svg';

// import eventsManager from './../../Events';

const Menu: FC = () => {
    const { activePage, setActivePage } = useRouter();
    const { activeItems, setTypeMenu } = useChangeTypeMenu();

    setTypeMenu(EtypeMenu.default);

    return (
        <ScrollSync>
            <div className="menu">
                <div className="menu_container">
                    <div className="menu_container-icons">
                        <div className="logo">
                            <Logo />
                        </div>
                        <ScrollSyncPane>
                            <div className="menu_container-icons-center overflow-h">
                                {activeItems.map((item, index) => {
                                    return (
                                        <div
                                            className="menu_container-icons-block"
                                            onClick={() => {
                                                setActivePage(item.nameRedux);
                                            }}
                                            key={index}
                                        >
                                            <div
                                                className={`menu_container-icons-block-icon ${
                                                    activePage.name === item.nameRedux
                                                        ? 'active'
                                                        : ''
                                                }`}
                                            >
                                                <item.icon />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollSyncPane>

                        <div className="menu_container-icons-bottom">3</div>
                    </div>
                    <div className="menu_container-content">
                        <div className="logo">UNNIX</div>
                        <ScrollSyncPane>
                            <div className="menu_container-content-center">
                                {activeItems.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setActivePage(item.nameRedux);
                                            }}
                                            className={`menu_container-content-block-text ${
                                                item.name.length > 10 ? 'ml-50' : ''
                                            }`}
                                        >
                                            {item.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollSyncPane>
                        <div className="menu_container-content-bottom"></div>
                    </div>
                </div>
            </div>
        </ScrollSync>
    );
};

export default Menu;
