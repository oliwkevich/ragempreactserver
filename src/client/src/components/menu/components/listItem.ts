import { Epages } from '../../../types';

// Иконки
import { ReactComponent as newsIco } from '../../../icons/news.svg';
import { ReactComponent as authIco } from '../../../icons/auth.svg';
import { ReactComponent as exitIco } from '../../../icons/exit.svg';
import { ReactComponent as regIco } from '../../../icons/reg.svg';
import { ReactComponent as donateIco } from '../../../icons/donate.svg';
import { ReactComponent as characterIco } from '../../../icons/characterChange.svg';
import { ReactComponent as inventoryIco } from '../../../icons/inventory.svg';
import { ReactComponent as propertyIco } from '../../../icons/property.svg';
import { ReactComponent as settingsIco } from '../../../icons/settings.svg';
import { ReactComponent as statisticsIco } from '../../../icons/statistics.svg';
import { ReactComponent as transportIco } from '../../../icons/transport.svg';
import { ReactComponent as adminIco } from '../../../icons/admin.svg';
// -----Иконки-----
const arr = [
    {
        name: 'Новости',
        icon: newsIco,
        nameRedux: Epages.news,
    },
    {
        name: 'Авторизация',
        icon: authIco,
        nameRedux: Epages.auth,
    },
    {
        name: 'Регистрация',
        icon: regIco,
        nameRedux: Epages.registration,
    },
    {
        name: 'Инвентарь',
        icon: inventoryIco,
        nameRedux: Epages.inventory,
    },
    {
        name: 'Имущество',
        icon: propertyIco,
        nameRedux: Epages.property,
    },
    {
        name: 'Транспорт',
        icon: transportIco,
        nameRedux: Epages.transport,
    },
    {
        name: 'Статистика',
        icon: statisticsIco,
        nameRedux: Epages.statistics,
    },
    {
        name: 'Смена персонажа',
        icon: characterIco,
        nameRedux: Epages.characterChange,
    },
    {
        name: 'Донат',
        icon: donateIco,
        nameRedux: Epages.donate,
    },
    {
        name: 'Ностройки',
        icon: settingsIco,
        nameRedux: Epages.settings,
    },
    {
        type: 'bottom',
        name: 'Админ-меню',
        icon: adminIco,
        nameRedux: Epages.admin,
    },
    {
        type: 'bottom',
        name: 'Выход',
        icon: exitIco,
        nameRedux: Epages.exit,
    },
];

export default arr;
