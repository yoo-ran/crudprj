import {useState} from "react";
import axios from "axios"

function Login(){
    const [email,setEmail] = useState("")
    const [pw, setPw] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/login", {email,pw})
        .then(res => console.log(res))
        .catch(err => console.log(err)); 
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type="password" placeholder='Password' onChange={e => setPw(e.target.value)}/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login