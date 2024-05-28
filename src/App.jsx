// src/App.jsx
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'; // Import Route component
import Login from './components/Login';
import User from "./components/User"
// import Edit from './components/Edit';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user-page" element={<User  />} />
                {/* <Route path="/update-user" element={<Edit  />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
