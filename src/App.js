import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import Welcome from './components/pages/Welcome';

function App() {
    // state with the user data when the user is logged in

    // useEffect that handles localstorage if the user navigates away from the page/refreshes

    // logout handler function that deletes a token from localstorage
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Welcome />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/profile" element={<Profile />} />

                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
