import { Navigate } from 'react-router-dom';

const LogoutPage = () => {

    localStorage.removeItem('token');
    return <Navigate to="/login" />
};

export default LogoutPage;