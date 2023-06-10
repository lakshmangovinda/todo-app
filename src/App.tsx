
import './index.css'
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import NavigationBar from './Components/Navigation/NavigationBar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Protected from './Components/protected';

function App() {
  return (
    <div >
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={<Protected Component={Home}></Protected>}
          />
        </Routes>
      </Router>
    </div>);
}

export default App;
