import { useState } from 'react'

const NewUser = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
   
    const createUser = () => {
        fetch('http://localhost:8080/newuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username,password})
        }).then(() => {
            setPassword('')
            setUserName('')
        })
    }

return (
        <form onSubmit={createUser}  >
            <label>
                <p>Username</p>
                <input required autoComplete="off" type="text" value={username} maxLength={20} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input required autoComplete="off" type="password" value={password} maxLength={20} onChange={(e) => setPassword(e.target.value)}/>
            </label>
           
                <div>
                <button type="submit">Create Account</button>
                </div>
        </form>
)
}

export default NewUser;
