import {useState} from 'react';
import router from 'next/router';
import useRequest from '../../hooks/use-request';
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {doRequest, errors} = useRequest({
        url: '/api/users/signup',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => router.push('/')
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        await doRequest();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {errors}

            <button className="btn btn-primary">Sign up</button>
        </form>
    )
}

export default Signup