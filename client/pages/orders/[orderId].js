import {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import {useRouter} from 'next/router';

const OrderShow = ({ order, currentUser }) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const router = useRouter();
    const {doRequest, errors} = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id
        },
        onSuccess: () => router.push('/orders')
    });

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        }

        const timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, [order]);

    if (timeLeft < 0) {
        return <div>Order Expired</div>
    }

    return (
        <div>
            Time left to pay: { timeLeft } seconds
            <br />
            <StripeCheckout
                token={({id}) => doRequest({token: id})}
                stripeKey="pk_test_j0MCjhG7141HUvr2A56mUA4p000xfQdQws"
                amount={order.ticket.price * 100}
                email={currentUser.email}
            />
            {errors}
        </div>
    )
}

OrderShow.getInitialProps = async (context, client) => {
    const { orderId } = context.query;
    const { data } = await client.get(`/api/orders/${orderId}`);

    return { order: data };
}

export default OrderShow;