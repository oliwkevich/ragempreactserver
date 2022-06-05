import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { changePage } from '../redux/slices/pages';
import { Epages } from '../types';

interface activePage {
    name: string;
}

function useRouter() {
    const dispatch = useDispatch();
    const pageIsActive: string = useSelector((state: RootState) => state.pages.isActive);

    const activePage: activePage = {
        name: pageIsActive,
    };

    function setActivePage(page: Epages) {
        if (page === pageIsActive) return;
        dispatch(changePage(page));
    }

    return { activePage, setActivePage };
}

export default useRouter;
