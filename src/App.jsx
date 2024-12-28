import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import VerifyOtp from "./pages/VerifyOtp";
import SetPassword from "./pages/SetPassword";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import LogoutPage from "./pages/LogoutPage";
import Product from "./pages/dashboard/Product";
import Category from "./pages/dashboard/Category";
import Customer from "./pages/dashboard/Customer";
import Invoice from "./pages/dashboard/Invoice";
import ProfilePage from "./pages/ProfilePage";





function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/logout" element={<LogoutPage />} />


        <Route path="/dashboard/" element={<DashboardLayout />} >
          <Route path="index" element={<DashboardIndex />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="customer" element={<Customer />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;



  