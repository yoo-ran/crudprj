// src/components/Home.jsx
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Home = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <h1>Welcome to Our App</h1>
            {isLogin ? <Login /> : <Signup />}
            <button onClick={toggleForm}>
                {isLogin ? 'Go to Signup' : 'Go to Login'}
            </button>
        </div>
    );
};

export default Home;
