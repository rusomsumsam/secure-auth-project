import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import {
    FiUser,
    FiMail,
    FiLock,
    FiShield,
    FiCheckCircle,
    FiXCircle,
    FiArrowLeft,
    FiLoader,
    FiEye,
    FiEyeOff,
    FiDatabase,
    FiUserCheck,
    FiTrendingUp
} from 'react-icons/fi';
import { FaShieldAlt, FaUserShield } from 'react-icons/fa';

const SecureRegister = () => {
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // UI state
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

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
            const response = await api.post('/secure/register', formData);

            if (response.status === 200 || response.status === 201) {
                setSuccess(true);
                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });

                // Redirect after 2 seconds
                setTimeout(() => {
                    navigate('/secure/login');
                }, 2000);
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                'Registration failed. Please try again.'
            );
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
                        {/* Left Column - Registration Form */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur-xl opacity-50" />

                            <div className="relative bg-[#111118] rounded-2xl p-6 lg:p-8 border border-cyan-500/30">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaUserShield className="text-cyan-400 text-xl" />
                                            <h2 className="text-2xl font-bold text-white">Secure Registration</h2>
                                        </div>
                                        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-3 py-1">
                                            <FiShield className="text-cyan-400 w-3 h-3" />
                                            <span className="text-xs font-medium text-cyan-300">Protected Environment</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Success Message */}
                                {success && (
                                    <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                                        <div className="flex items-start gap-3">
                                            <FiCheckCircle className="text-green-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-green-400 font-medium">Success!</h4>
                                                <p className="text-green-400/80 text-sm">Secure User Registered Successfully</p>
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
                                                <h4 className="text-red-400 font-medium">Error</h4>
                                                <p className="text-red-400/80 text-sm">{error}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Username Field */}
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-1.5">
                                            Username
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiUser className="text-gray-500 w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-cyan-500/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                                placeholder="Enter username"
                                                disabled={loading || success}
                                            />
                                        </div>
                                    </div>

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
                                        disabled={loading || success}
                                        className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white py-3.5 rounded-xl font-medium transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className="w-5 h-5 animate-spin" />
                                                <span>Creating Account...</span>
                                            </>
                                        ) : success ? (
                                            <>
                                                <FiCheckCircle className="w-5 h-5" />
                                                <span>Account Created!</span>
                                            </>
                                        ) : (
                                            <>
                                                <FiShield className="w-5 h-5" />
                                                <span>Create Secure Account</span>
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Login Link */}
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-400">
                                        Already have an account?{' '}
                                        <Link
                                            to="/secure/login"
                                            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                                        >
                                            Login here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Security Highlights */}
                        <div className="space-y-4">
                            {/* Main Security Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-cyan-500/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                        <FaShieldAlt className="text-cyan-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Security Features</h3>
                                        <p className="text-xs text-cyan-400">Enterprise-Grade Protection</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {/* Feature 1 */}
                                    <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiDatabase className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-cyan-300 font-medium text-sm">✅ Bcrypt Password Hashing</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Passwords are securely hashed using bcrypt with salt rounds,
                                                    making them resistant to brute-force and rainbow table attacks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiLock className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-cyan-300 font-medium text-sm">✅ Protected Credential Storage</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    All credentials are stored securely with proper encryption
                                                    and access controls to prevent unauthorized access.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiUserCheck className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-cyan-300 font-medium text-sm">✅ Improved User Model</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Enhanced user schema with proper validation, role-based access control,
                                                    and secure data handling practices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiTrendingUp className="text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-cyan-300 font-medium text-sm">✅ Secure Authentication Flow</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Protected authentication flow with input validation,
                                                    bcrypt password hashing, and secure credential handling.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Score Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-cyan-500/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                        <FiTrendingUp className="text-cyan-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Security Score</h3>
                                        <p className="text-xs text-cyan-400">Protection Level Assessment</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">Security Score</span>
                                        <span className="text-cyan-400 font-bold">95/100</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                                        <div className="bg-gradient-to-r from-cyan-500 to-green-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">Protection Level</span>
                                        <span className="text-green-400 font-medium">Maximum</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">Vulnerabilities</span>
                                        <span className="text-green-500 font-medium">0 Detected</span>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-gray-700/30">
                                <h4 className="text-white font-medium mb-3">🛡️ Security Overview</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    This registration system implements <span className="text-cyan-400 font-semibold">industry-standard</span>
                                    security practices to protect user data. User passwords are securely hashed using bcrypt and stored
                                    following secure credential management practices.
                                </p>
                                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1.5 text-cyan-400">
                                        <FiCheckCircle className="w-3 h-3" />
                                        Enterprise Grade
                                    </span>
                                    <span className="flex items-center gap-1.5 text-green-400">
                                        <FiCheckCircle className="w-3 h-3" />
                                        Best Practices
                                    </span>
                                    <span className="flex items-center gap-1.5 text-blue-400">
                                        <FiShield className="w-3 h-3" />
                                        Security Controls Enabled
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

export default SecureRegister;