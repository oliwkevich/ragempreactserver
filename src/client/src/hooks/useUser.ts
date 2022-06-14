import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';

function useUser() {
    // const user: string = useSelector((state: RootState) => state);
    return {
        // characters: user.characters
    };
}

export default useUser;
