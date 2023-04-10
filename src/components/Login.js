import './Login.css'
import { useState } from 'react'
import PropTypes from 'prop-types';
import NewUser from './NewUser'

const loginUser = async (credentials) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = ({ setAuthorize }) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({username,password});
        if (response.successful){
            setAuthorize(response.authorize);
        } else {
            setError(response.error)
        }
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input required autoComplete="off" type="text" value={username} maxLength={20} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input required autoComplete="off" type="password" value={password} maxLength={20} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                {error && <div>{error}</div>}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <h3>If you do not have a pre-existing account, you can create one below:</h3>
            <NewUser/>
      </div>
    )
}

Login.propTypes = {
    setAuthorize: PropTypes.func.isRequired
}

export default Login;
