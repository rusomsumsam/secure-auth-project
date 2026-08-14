import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiAlertCircle,
    FiArrowLeft,
    FiCheckCircle,
    FiClock,
    FiLoader,
    FiLock,
    FiMail,
    FiShield,
    FiUser,
    FiUserCheck,
} from "react-icons/fi";

import api from "../../services/api";

const SecureProfile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        const loadProfile = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await api.get("/secure/profile");

                if (!isMounted) {
                    return;
                }

                const profileData =
                    response.data?.user || response.data;

                setUser(profileData);
            } catch (err) {
                if (!isMounted) {
                    return;
                }

                const errorMessage =
                    err.response?.data?.message ||
                    "Unable to load the secure profile.";

                setError(errorMessage);

                if (
                    err.response?.status === 401 ||
                    err.response?.status === 403
                ) {
                    setTimeout(() => {
                        navigate("/secure/login", {
                            replace: true,
                        });
                    }, 1500);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        loadProfile();

        return () => {
            isMounted = false;
        };
    }, [navigate]);

    const formatDate = (dateValue) => {
        if (!dateValue) {
            return "Not available";
        }

        const date = new Date(dateValue);

        if (Number.isNaN(date.getTime())) {
            return "Not available";
        }

        return date.toLocaleString();
    };

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#0a0a0f] px-4 text-gray-100">
                <div className="text-center">
                    <FiLoader className="mx-auto h-10 w-10 animate-spin text-cyan-400" />

                    <h1 className="mt-4 text-xl font-semibold text-white">
                        Verifying secure session
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        Loading the authenticated user profile.
                    </p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#0a0a0f] px-4 text-gray-100">
                <section className="w-full max-w-md rounded-2xl border border-red-500/30 bg-[#111118] p-8 text-center shadow-2xl">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                        <FiAlertCircle className="h-7 w-7 text-red-400" />
                    </div>

                    <h1 className="mt-5 text-2xl font-bold text-white">
                        Authentication Required
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-red-300">
                        {error}
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                        Redirecting to the secure login page.
                    </p>

                    <Link
                        to="/secure/login"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white transition-colors hover:bg-cyan-400"
                    >
                        <FiLock className="h-4 w-4" />
                        Secure Login
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] px-4 py-12 text-gray-100 sm:px-6 lg:px-8">
            {/* Background */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl">
                <Link
                    to="/secure"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan-400"
                >
                    <FiArrowLeft className="h-4 w-4" />
                    Back to Secure System
                </Link>

                {/* Header */}
                <section className="rounded-3xl border border-cyan-500/20 bg-[#111118]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10">
                                <FiUserCheck className="h-8 w-8 text-cyan-400" />
                            </div>

                            <div>
                                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                                    <FiCheckCircle className="h-3.5 w-3.5 text-green-400" />

                                    <span className="text-xs font-medium text-green-300">
                                        Authenticated Session
                                    </span>
                                </div>

                                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                                    Secure Profile
                                </h1>

                                <p className="mt-2 text-sm text-gray-400">
                                    This information is loaded from a
                                    JWT-protected backend endpoint.
                                </p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 self-start rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-300 md:self-auto">
                            <FiShield className="h-5 w-5" />
                            HTTP-only JWT Protected
                        </div>
                    </div>
                </section>

                {/* Profile details */}
                <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-white/10 bg-[#111118] p-6">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                                <FiUser className="h-5 w-5 text-cyan-400" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Username
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {user?.username || "Not available"}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                                <FiMail className="h-5 w-5 text-blue-400" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Email
                                </p>

                                <p className="mt-1 truncate font-semibold text-white">
                                    {user?.email || "Not available"}
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-2xl border border-white/10 bg-[#111118] p-6">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                                <FiShield className="h-5 w-5 text-green-400" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Role
                                </p>

                                <p className="mt-1 font-semibold capitalize text-white">
                                    {user?.role || "user"}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10">
                                <FiClock className="h-5 w-5 text-yellow-400" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Last Login
                                </p>

                                <p className="mt-1 text-sm font-semibold text-white">
                                    {formatDate(user?.lastLogin)}
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Security information */}
                <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-green-500/5 p-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                            <FiLock className="h-6 w-6 text-cyan-400" />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                Protected Profile Verification
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                The backend returned this profile only after
                                validating the JWT stored in the HTTP-only
                                authentication cookie. The password is not
                                included in the profile response.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SecureProfile;