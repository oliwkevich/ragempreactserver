import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/index';
import { changeTypeMenu } from '../redux/slices/menu';
import { EtypeMenu } from '../types';
import listMenuItems from '../components/menu/components/listItem';

let tpmUser = {
    auth: true,
    admin: true,
    characters: {},
    login: 'login',
};

function useChangeTypeMenu() {
    let activeItemsIndex: Array<number> = [];

    let type = useSelector((state: RootState) => state.menu.typeMenu);
    const dispatch = useDispatch();

    function setTypeMenu(newType: EtypeMenu) {
        if (newType === type) return;
        dispatch(changeTypeMenu(newType));
    }

    switch (type) {
        case EtypeMenu.auth: {
            activeItemsIndex = [0, 1, 2];
            break;
        }

        case EtypeMenu.default: {
            activeItemsIndex = [0, 11, 5, 6, 7, 3, 4, 8, 9];
            if (tpmUser.admin) activeItemsIndex.push(10);

            break;
        }

        default: {
            break;
        }
    }

    const activeItems = listMenuItems.filter((item, index) => {
        for (let i = 0; i < activeItemsIndex.length; i++) {
            if (index === activeItemsIndex[i]) {
                return item;
            }
        }
        return false;
    });

    return { activeItems, setTypeMenu };
}

export default useChangeTypeMenu;
