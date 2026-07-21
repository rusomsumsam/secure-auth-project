import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import InsecureHome from "../pages/Insecure/InsecureHome";
import SecureHome from "../pages/Secure/SecureHome";
import Comparison from "../pages/Comparison/Comparison";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Insecure Routes */}
            <Route path="/insecure" element={<InsecureHome />} />
            

            {/* Secure Routes */}
            <Route path="/secure" element={<SecureHome />} />
            

            {/* Comparison */}
            <Route path="/comparison" element={<Comparison />} />
        </Routes>
    );
};

export default AppRoutes;