import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AllClothing from '../pages/AllClothing';
import Women from '../pages/Women';
import Men from '../pages/Men';
import Kids from '../pages/Kids';
import Cart from '../pages/Cart';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/all-clothing" element={<AllClothing />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
