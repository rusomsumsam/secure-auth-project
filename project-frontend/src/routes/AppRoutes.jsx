import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import InsecureHome from "../pages/Insecure/InsecureHome";
import SecureHome from "../pages/Secure/SecureHome";
import Comparison from "../pages/Comparison/Comparison";
import InsecureRegister from "../pages/Insecure/InsecureRegister";
import InsecureLogin from "../pages/Insecure/InsecureLogin";
import SecureRegister from "../pages/Secure/SecureRegister";
import SecureLogin from "../pages/Secure/SecureLogin";
import SecureProfile from "../pages/Secure/SecureProfile";
import SecureDashboard from "../pages/Secure/SecureDashboard";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Insecure Routes */}
            <Route path="/insecure" element={<InsecureHome />} />
            <Route path="/insecure/register" element={<InsecureRegister />} />
            <Route path="/insecure/login" element={<InsecureLogin />} />

            {/* Secure Routes */}
            <Route path="/secure" element={<SecureHome />} />
            <Route path="/secure/register" element={<SecureRegister />} />
            <Route path="/secure/login" element={<SecureLogin />} />
            <Route
                path="/secure/profile"
                element={<SecureProfile />}
            />
            <Route
                path="/secure/dashboard"
                element={<SecureDashboard />}
            />

            {/* Comparison */}
            <Route path="/comparison" element={<Comparison />} />
        </Routes>
    );
};

export default AppRoutes;