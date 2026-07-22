import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import {
    FiMail,
    FiLock,
    FiShield,
    FiCheckCircle,
    FiXCircle,
    FiArrowLeft,
    FiLoader,
    FiEye,
    FiEyeOff,
    FiClock,
    FiUserCheck,
    FiTrendingUp,
    FiAlertTriangle
} from 'react-icons/fi';
import { FaShieldAlt, FaUserShield } from 'react-icons/fa';

const SecureLogin = () => {
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
            const response = await api.post('/secure/login', formData);
            
            if (response.status === 200) {
                setSuccess(true);
                setError('');
                setLoginAttempts(0);
                setFormData({
                    email: '',
                    password: ''
                });

                // Redirect after 2 seconds
                setTimeout(() => {
                    navigate('/secure');
                }, 2000);
            }
        } catch (err) {
            const errorMessage =
                err.response?.data?.message ||
                err.response?.data ||
                'Invalid credentials. Please try again.';

            if (errorMessage.toLowerCase().includes("locked")) {
                setLoginAttempts(5);
            } else {
                setLoginAttempts(prev => prev + 1);
            }

            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-cyan-500 selection:text-white">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Back Navigation */}
                    <Link
                        to="/secure"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Secure Dashboard</span>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Login Form */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur-xl opacity-50" />

                            <div className="relative bg-[#111118] rounded-2xl p-6 lg:p-8 border border-cyan-500/30">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaUserShield className="text-cyan-400 text-xl" />
                                            <h2 className="text-2xl font-bold text-white">Secure Login</h2>
                                        </div>
                                        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-3 py-1">
                                            <FiShield className="text-cyan-400 w-3 h-3" />
                                            <span className="text-xs font-medium text-cyan-300">Protected Environment</span>
                                        </div>
                                    </div>

                                    {/* Login Attempts Counter */}
                                    {loginAttempts > 0 && (
                                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-1.5">
                                            <span className="text-xs text-yellow-400 font-medium">
                                                Attempts: {Math.min(loginAttempts, 5)}/5
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
                                                <h4 className="text-red-400 font-medium">
                                                    {error.toLowerCase().includes("locked")
                                                        ? "Account Locked"
                                                        : "Login Failed"}
                                                </h4>
                                                <p className="text-red-400/80 text-sm">{error}</p>
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
                                                className="w-full bg-black/40 border border-cyan-500/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
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
                                                className="w-full bg-black/40 border border-cyan-500/20 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
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
                                        disabled={loading || success }
                                        className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white py-3.5 rounded-xl font-medium transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
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
                                        )  : (
                                            <>
                                                <FiShield className="w-5 h-5" />
                                                <span>Secure Login</span>
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Register Link */}
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-400">
                                        Don't have an account?{' '}
                                        <Link
                                            to="/secure/register"
                                            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                                        >
                                            Register here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Security Features */}
                        <div className="space-y-4">
                            {/* Main Security Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-cyan-500/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                        <FaShieldAlt className="text-cyan-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Security Features</h3>
                                        <p className="text-xs text-cyan-400">Authentication Protection</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {/* Feature 1 */}
                                    <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiCheckCircle className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-cyan-300 font-medium text-sm">✅ Bcrypt Password Verification</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Passwords are verified using bcrypt hashing, ensuring secure
                                                    and cryptographically strong password comparison.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiLock className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-cyan-300 font-medium text-sm">✅ Account Locking Protection</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Accounts are automatically locked after 5 failed login attempts,
                                                    preventing brute-force attacks and unauthorized access.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiTrendingUp className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-cyan-300 font-medium text-sm">✅ Secure Authentication Flow</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Protected authentication flow with bcrypt password verification,
                                                    account locking mechanism, and secure credential handling.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Account Lock Info Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-yellow-500/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                        <FiAlertTriangle className="text-yellow-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Account Lock Policy</h3>
                                        <p className="text-xs text-yellow-400">Brute-Force Protection</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="bg-yellow-500/5 rounded-xl p-4 border border-yellow-500/20">
                                        <p className="text-gray-400 text-sm">
                                            After <span className="text-yellow-400 font-semibold">5 failed login attempts</span>,
                                            the account will automatically be locked for <span className="text-yellow-400 font-semibold">5 minutes</span>.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-2 text-green-400">
                                            <FiCheckCircle className="w-4 h-4" />
                                            <span>Successful: {
                                                error.toLowerCase().includes("locked")
                                                    ? "Locked"
                                                    : loginAttempts === 0
                                                        ? "Ready"
                                                        : "Monitoring"
                                            }</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-yellow-400">
                                            <FiClock className="w-4 h-4" />
                                            <span>
                                                Backend Controlled
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Login Attempts Log */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-gray-700/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gray-700/20 flex items-center justify-center">
                                        <FiUserCheck className="text-gray-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Login Attempts Log</h3>
                                        <p className="text-xs text-gray-400">Recent Authentication Activity</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {loginAttempts === 0 && (
                                        <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-green-400">✅ Ready for login</span>
                                                <span className="text-gray-500 text-xs">0/5 attempts</span>
                                            </div>
                                        </div>
                                    )}

                                    {loginAttempts > 0 && loginAttempts < 5 && (
                                        <>
                                            {[...Array(loginAttempts)].map((_, i) => (
                                                <div key={i} className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-red-400">❌ Login Failed ({i + 1}/5)</span>
                                                        <span className="text-gray-500 text-xs">Invalid credentials</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}

                                    {loginAttempts >= 5 &&
                                        error.toLowerCase().includes("locked") && (
                                        <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-red-400">
                                                    🔒 Account Locked
                                                </span>

                                                <span className="text-red-400 font-medium">
                                                    5/5 Attempts
                                                </span>
                                            </div>
                                        </div>
                                    )}


                                    {success && (
                                        <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-green-400 flex items-center gap-2">
                                                    <FiCheckCircle className="w-4 h-4" />
                                                    ✅ Login Successful
                                                </span>
                                                <span className="text-green-400 font-medium">Authenticated</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecureLogin;