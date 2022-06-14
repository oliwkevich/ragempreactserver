import React, { FC, useRef } from 'react';
import useChangeTypeMenu from '../../../hooks/activeItemsInMenu';
import useRouter from '../../../hooks/useRouter';

const NavLinks: FC = () => {
    const { activeItems } = useChangeTypeMenu();
    const { setActivePage } = useRouter();

    return (
        <>
            {activeItems.map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => {
                            setActivePage(item.nameRedux);
                        }}
                        className="menu_item"
                    >
                        <div className="menu_item-img">
                            <div className="menu_item-img-decor">
                                <item.icon></item.icon>
                            </div>
                        </div>
                        <span className="menu_item-text">{item.name}</span>
                    </div>
                );
            })}
        </>
    );
};

export default NavLinks;
