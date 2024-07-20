import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { startTransition } from 'react';
import Loader from '../components/loader/Loader';

const TransitionWrapper = ({ children }) => {
    const location = useLocation();
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true);
        startTransition(() => {
            setIsPending(false);
        });
    }, [location]);

    return (
        <React.Fragment>
            {isPending && <Loader />}
            {!isPending && children}
        </React.Fragment>
    );
};

export default TransitionWrapper;
