import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    FiShield,
    FiUser,
    FiMail,
    FiBriefcase,
    FiCheckCircle,
    FiXCircle,
    FiClock,
    FiArrowLeft,
    FiLoader,
    FiAlertTriangle,
    FiLock,
    FiGlobe,
} from "react-icons/fi";
import api from "../../services/api";

const SecureDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [redirecting, setRedirecting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await api.get("/secure/profile");
                setUser(response.data.user);
            } catch (err) {
                const status = err.response?.status;
                const message = err.response?.data?.message || "An unexpected error occurred";

                if (status === 401) {
                    setError({
                        type: "unauthorized",
                        message: message,
                        redirect: true,
                    });
                    setRedirecting(true);
                    setTimeout(() => {
                        navigate("/secure/login");
                    }, 2000);
                } else if (status === 403) {
                    setError({
                        type: "forbidden",
                        message: message,
                    });
                } else if (status === 404) {
                    setError({
                        type: "not_found",
                        message: message,
                    });
                } else if (status >= 500) {
                    setError({
                        type: "server",
                        message: "Server error. Please try again later.",
                    });
                } else {
                    setError({
                        type: "unknown",
                        message: message,
                    });
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    // Format date safely
    const formatDate = (dateString) => {
        if (!dateString) return "Not available";
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return "Not available";
            return date.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
            });
        } catch {
            return "Not available";
        }
    };

    // Loading state
    if (loading) {
        return (
            <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
                <div className="text-center" aria-live="polite">
                    <div className="inline-block animate-spin mb-6">
                        <FiLoader className="text-cyan-400 w-12 h-12" />
                    </div>
                    <h2 className="text-xl sm:text-2xl text-gray-300 font-medium">
                        Verifying secure authentication...
                    </h2>
                    <div className="mt-4 w-64 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400/50 animate-pulse rounded-full" />
                    </div>
                </div>
            </main>
        );
    }

    // Error states
    if (error) {
        return (
            <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-[#111118] border border-white/10 rounded-xl p-8 text-center">
                    {error.type === "unauthorized" ? (
                        <>
                            <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                                <FiLock className="text-red-400 w-10 h-10" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">
                                Access Denied
                            </h1>
                            <p className="text-gray-400 mb-4">
                                {error.message}
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                {redirecting && (
                                    <p className="text-cyan-400 animate-pulse">
                                        Redirecting to secure login...
                                    </p>
                                )}
                                <Link
                                    to="/secure/login"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
                                >
                                    <FiArrowLeft size={18} />
                                    Return to Secure Login
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-20 h-20 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                                <FiAlertTriangle className="text-yellow-400 w-10 h-10" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">
                                Error Loading Profile
                            </h1>
                            <p className="text-gray-400 mb-6">
                                {error.message}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    to="/secure"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
                                >
                                    <FiArrowLeft size={18} />
                                    Back to Secure System
                                </Link>
                                <Link
                                    to="/secure/login"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
                                >
                                    <FiLock size={18} />
                                    Secure Login
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </main>
        );
    }

    // Success state - authenticated user
    return (
        <main className="min-h-screen bg-[#0a0a0f]">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] pointer-events-none" />

            <div className="relative container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
                {/* Back navigation */}
                <Link
                    to="/secure"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg px-3 py-2"
                    aria-label="Back to Secure System"
                >
                    <FiArrowLeft size={18} />
                    Back to Secure System
                </Link>

                {/* Page header */}
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <FiShield className="text-cyan-400 w-8 h-8" />
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">
                            Secure Dashboard
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <p className="text-gray-400 text-lg">
                            JWT-Protected User Profile
                        </p>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">
                            <FiCheckCircle size={14} />
                            Authenticated
                        </span>
                    </div>
                </header>

                {/* Security notice */}
                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <FiLock className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-cyan-400 font-medium">
                                Protected Resource Access Granted
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                The backend verified the JWT from your HTTP-only secureAuthToken cookie before returning this profile.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile card */}
                <section className="bg-[#111118] border border-white/10 rounded-xl overflow-hidden">
                    {/* Card header */}
                    <div className="border-b border-white/10 px-6 py-4 bg-white/5">
                        <h2 className="text-lg font-semibold text-white">
                            User Profile
                        </h2>
                    </div>

                    {/* Profile content */}
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Username */}
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                                <FiUser className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Username
                                    </p>
                                    <p className="text-white font-medium">
                                        {user?.username || "—"}
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                                <FiMail className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Email
                                    </p>
                                    <p className="text-white font-medium break-all">
                                        {user?.email || "—"}
                                    </p>
                                </div>
                            </div>

                            {/* Role */}
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                                <FiBriefcase className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Role
                                    </p>
                                    <p className="text-white font-medium capitalize">
                                        {user?.role || "—"}
                                    </p>
                                </div>
                            </div>

                            {/* Account status */}
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                                {user?.isActive ? (
                                    <FiCheckCircle className="text-green-400 w-5 h-5 mt-0.5 shrink-0" />
                                ) : (
                                    <FiXCircle className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                )}
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Account Status
                                    </p>
                                    <p className="text-white font-medium">
                                        {user?.isActive ? (
                                            <span className="text-green-400">Active</span>
                                        ) : (
                                            <span className="text-red-400">Inactive</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Last login */}
                        <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                            <FiClock className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    Last Login
                                </p>
                                <p className="text-white font-medium">
                                    {formatDate(user?.lastLogin)}
                                </p>
                            </div>
                        </div>

                        {/* Authentication method */}
                        <div className="flex items-start gap-3 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-lg">
                            <FiLock className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-xs text-cyan-400 uppercase tracking-wider">
                                    Authentication Method
                                </p>
                                <p className="text-cyan-400 font-medium">
                                    HTTP-Only JWT Cookie
                                </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    Token stored in secureAuthToken cookie. Not accessible to JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer info */}
                <footer className="mt-8 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
                    <p className="flex items-center justify-center gap-2">
                        <FiShield size={14} />
                        Protected by HTTP-only JWT authentication
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default SecureDashboard;