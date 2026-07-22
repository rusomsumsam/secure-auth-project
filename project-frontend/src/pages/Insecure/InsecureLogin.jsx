import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import {
    FiMail,
    FiLock,
    FiAlertTriangle,
    FiShieldOff,
    FiCheckCircle,
    FiXCircle,
    FiArrowLeft,
    FiLoader,
    FiEye,
    FiEyeOff,
    FiUnlock,
    FiClock,
    FiUserX
} from 'react-icons/fi';
import { FaSkull, FaExclamationTriangle, FaBug } from 'react-icons/fa';

const InsecureLogin = () => {
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // UI state
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await api.post('/insecure/login', formData);

            if (response.status === 200) {
                setSuccess(true);
                setLoginAttempts(0);
                setFormData({
                    email: '',
                    password: ''
                });

                // Redirect after 2 seconds
                setTimeout(() => {
                    navigate('/insecure');
                }, 2000);
            }
        } catch (err) {
            // Increment login attempts on failure (simulating no account locking)
            setLoginAttempts(prev => prev + 1);

            const errorMessage = err.response?.data?.message || 'Invalid credentials. Please try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-red-500 selection:text-white">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Back Navigation */}
                    <Link
                        to="/insecure"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Insecure Dashboard</span>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Login Form */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl opacity-50" />

                            <div className="relative bg-[#111118] rounded-2xl p-6 lg:p-8 border border-red-500/30">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaSkull className="text-red-400 text-xl" />
                                            <h2 className="text-2xl font-bold text-white">Insecure Login</h2>
                                        </div>
                                        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-3 py-1">
                                            <FiAlertTriangle className="text-red-400 w-3 h-3" />
                                            <span className="text-xs font-medium text-red-300">Vulnerable Environment</span>
                                        </div>
                                    </div>

                                    {/* Login Attempts Counter */}
                                    {loginAttempts > 0 && (
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-1.5">
                                            <span className="text-xs text-red-400 font-medium">
                                                Attempts: {loginAttempts}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Success Message */}
                                {success && (
                                    <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                                        <div className="flex items-start gap-3">
                                            <FiCheckCircle className="text-green-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-green-400 font-medium">Success!</h4>
                                                <p className="text-green-400/80 text-sm">Login successful! Redirecting...</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                                        <div className="flex items-start gap-3">
                                            <FiXCircle className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-red-400 font-medium">Login Failed</h4>
                                                <p className="text-red-400/80 text-sm">{error}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Login Attempts Warning */}
                                {loginAttempts >= 3 && (
                                    <div className="mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                                        <div className="flex items-start gap-3">
                                            <FiAlertTriangle className="text-yellow-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-yellow-400 font-medium">Multiple Failed Attempts</h4>
                                                <p className="text-yellow-400/80 text-sm">
                                                    {loginAttempts} failed login attempts. Note: No account locking mechanism
                                                    is in place. Attackers can continue trying indefinitely.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiMail className="text-gray-500 w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-red-500/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                                                placeholder="Enter email"
                                                disabled={loading || success}
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1.5">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiLock className="text-gray-500 w-5 h-5" />
                                            </div>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-red-500/20 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                                                placeholder="Enter password"
                                                disabled={loading || success}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                                                disabled={loading || success}
                                            >
                                                {showPassword ? (
                                                    <FiEyeOff className="w-5 h-5" />
                                                ) : (
                                                    <FiEye className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading || success}
                                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white py-3.5 rounded-xl font-medium transition-all hover:scale-[1.02] shadow-lg shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className="w-5 h-5 animate-spin" />
                                                <span>Logging in...</span>
                                            </>
                                        ) : success ? (
                                            <>
                                                <FiCheckCircle className="w-5 h-5" />
                                                <span>Logged In!</span>
                                            </>
                                        ) : (
                                            <>
                                                <FiUnlock className="w-5 h-5" />
                                                <span>Login</span>
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Register Link */}
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-400">
                                        Don't have an account?{' '}
                                        <Link
                                            to="/insecure/register"
                                            className="text-red-400 hover:text-red-300 font-medium transition-colors"
                                        >
                                            Register here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Security Warnings */}
                        <div className="space-y-4">
                            {/* Main Warning Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-red-500/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                        <FaExclamationTriangle className="text-red-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Security Vulnerabilities</h3>
                                        <p className="text-xs text-red-400">Critical Authentication Issues</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {/* Warning 1 */}
                                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiShieldOff className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-red-300 font-medium text-sm">❌ Plain Text Passwords</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Passwords are transmitted and stored in plain text. No encryption
                                                    or hashing is used, making them vulnerable to interception and theft.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Warning 2 */}
                                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiClock className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-red-300 font-medium text-sm">❌ Unlimited Login Attempts</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    No rate limiting is implemented. Attackers can perform brute-force
                                                    attacks with unlimited attempts to guess user credentials.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Warning 3 */}
                                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiUserX className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-red-300 font-medium text-sm">❌ No Account Locking</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Accounts are never locked after failed attempts. Attackers can
                                                    continuously try different passwords without any restrictions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Attack Simulation Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-red-500/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                        <FaBug className="text-red-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Attack Simulation</h3>
                                        <p className="text-xs text-red-400">Demonstration of Vulnerabilities</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="bg-red-500/5 rounded-xl p-3 border border-red-500/10">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Brute-force Attack</span>
                                            <span className="text-red-400 font-medium">Possible</span>
                                        </div>
                                    </div>
                                    <div className="bg-red-500/5 rounded-xl p-3 border border-red-500/10">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Credential Theft</span>
                                            <span className="text-red-400 font-medium">Likely</span>
                                        </div>
                                    </div>
                                    <div className="bg-red-500/5 rounded-xl p-3 border border-red-500/10">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Account Takeover</span>
                                            <span className="text-red-400 font-medium">Easy</span>
                                        </div>
                                    </div>
                                    <div className="bg-red-500/5 rounded-xl p-3 border border-red-500/10">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Data Breach</span>
                                            <span className="text-red-400 font-medium">Inevitable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Important Notice */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-gray-700/30">
                                <h4 className="text-white font-medium mb-3">⚠️ Important Notice</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    This login system is <span className="text-red-400 font-semibold">intentionally insecure</span>
                                    for educational purposes. Any credentials entered here are stored and transmitted
                                    without any security measures. Do not use real passwords or sensitive information.
                                </p>
                                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <FiAlertTriangle className="text-red-400 w-3 h-3" />
                                        Educational Use Only
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <FiShieldOff className="text-red-400 w-3 h-3" />
                                        No Security Controls
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsecureLogin;