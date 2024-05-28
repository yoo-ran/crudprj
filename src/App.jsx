// src/App.jsx
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'; // Import Route component
import Home from './components/Home';
import Login from './components/Login';
import User from "./components/User"
import Signup from './components/Signup';
import Delete from './components/Delete';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user-page" element={<User  />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/delete" element={<Delete />} />
                
                {/* <Route path="/update-user" element={<Edit  />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
