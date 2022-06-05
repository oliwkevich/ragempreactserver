function settingMenu(types: any) {
    let type = 'auth';
    let arr: Array<number> = [];
    switch (type) {
        case 'auth': {
            arr = [0, 1, 3, 4];
            break;
        }
        case 'inGame': {
            arr = [0, 1, 2, 3, 4, 5];
            break;
        }
        default: {
            break;
        }
    }

    return arr;
}

export default settingMenu;
