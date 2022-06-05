import { Epages } from '../../../types';
// Иконки
import newsIco from '../../../icons/news.svg';
import authIco from '../../../icons/auth.svg';
// -----Иконки-----
const arr = [
    {
        id: 0,
        name: 'Новости',
        icon: newsIco,
        nameRedux: Epages.news,
    },
    {
        id: 1,
        name: 'Авторизация',
        icon: authIco,
        nameRedux: Epages.auth,
    },
];
export default arr;
