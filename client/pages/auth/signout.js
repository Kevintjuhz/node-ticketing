import {useEffect} from 'react';
import useRequest from '../../hooks/use-request';
import router from 'next/router';

function Signout() {
    const {doRequest, errors} = useRequest({
        url: '/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => router.push('/')
    });

    useEffect(() => {
        doRequest();
    }, []);


    return <div>
        Signing you out...
    </div>
}

export default Signout