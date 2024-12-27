import { Navigate, Outlet } from "react-router";

const Privacy = () => {

    const token = localStorage.getItem('token');

    return token ? <Outlet /> : <Navigate to="/login" />;


};

export default Privacy;