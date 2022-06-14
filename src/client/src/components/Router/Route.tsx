import React, { FC, ReactElement } from 'react';
import useRouter from '../../hooks/useRouter';

interface Props {
    name: string;
    element: ReactElement;
}

const Route: FC<Props> = ({ name, element }) => {
    const { activePage } = useRouter();
    if (activePage.name !== name) return null;
    return element;
};

export default Route;
