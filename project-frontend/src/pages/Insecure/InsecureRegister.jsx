import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import {
    FiUser,
    FiMail,
    FiLock,
    FiAlertTriangle,
    FiShieldOff,
    FiCheckCircle,
    FiXCircle,
    FiArrowLeft,
    FiLoader,
    FiEye,
    FiEyeOff
} from 'react-icons/fi';
import { FaSkull, FaExclamationTriangle } from 'react-icons/fa';

const InsecureRegister = () => {
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
            const response = await api.post('/insecure/register', formData);

            if (response.status === 200 || response.status === 201) {
                setSuccess(true);
                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });

                // Redirect after 2 seconds
                setTimeout(() => {
                    navigate('/insecure/login');
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
                        {/* Left Column - Registration Form */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl opacity-50" />

                            <div className="relative bg-[#111118] rounded-2xl p-6 lg:p-8 border border-red-500/30">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaSkull className="text-red-400 text-xl" />
                                            <h2 className="text-2xl font-bold text-white">Insecure Registration</h2>
                                        </div>
                                        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-3 py-1">
                                            <FiAlertTriangle className="text-red-400 w-3 h-3" />
                                            <span className="text-xs font-medium text-red-300">Vulnerable Environment</span>
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
                                                <p className="text-green-400/80 text-sm">Insecure User Registered Successfully</p>
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
                                                className="w-full bg-black/40 border border-red-500/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
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
                                                <span>Creating Account...</span>
                                            </>
                                        ) : success ? (
                                            <>
                                                <FiCheckCircle className="w-5 h-5" />
                                                <span>Account Created!</span>
                                            </>
                                        ) : (
                                            <>
                                                <FiShieldOff className="w-5 h-5" />
                                                <span>Create Insecure Account</span>
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Login Link */}
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-400">
                                        Already have an account?{' '}
                                        <Link
                                            to="/insecure/login"
                                            className="text-red-400 hover:text-red-300 font-medium transition-colors"
                                        >
                                            Login here
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
                                        <h3 className="text-lg font-bold text-white">Security Warnings</h3>
                                        <p className="text-xs text-red-400">Critical Vulnerabilities</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {/* Warning 1 */}
                                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiAlertTriangle className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-red-300 font-medium text-sm">Passwords stored in Plain Text</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    All passwords will be stored without any encryption or hashing,
                                                    making them easily readable by anyone with database access.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Warning 2 */}
                                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiXCircle className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-red-300 font-medium text-sm">No Input Validation</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Limited input validation is implemented. Passwords are stored
                                                    in plain text and the system lacks proper security controls,
                                                    making it vulnerable to multiple attack vectors.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Warning 3 */}
                                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                                        <div className="flex items-start gap-3">
                                            <FiShieldOff className="text-red-400 w-5 h-5 mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-red-300 font-medium text-sm">No Security Protection</h4>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    This registration system has zero security controls. No rate limiting,
                                                    no account locking, no audit logging, and no protection against common attacks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info Card */}
                            <div className="bg-[#111118] rounded-2xl p-6 border border-gray-700/30">
                                <h4 className="text-white font-medium mb-3">⚠️ Important Notice</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    This is a <span className="text-red-400 font-semibold">vulnerable</span> registration system
                                    designed for educational purposes only. All data entered here is stored insecurely
                                    and can be easily compromised. Do not use real credentials or sensitive information.
                                </p>
                                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <FiAlertTriangle className="text-red-400 w-3 h-3" />
                                        For Educational Use Only
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <FiShieldOff className="text-red-400 w-3 h-3" />
                                        <FiShieldOff className="text-red-400 w-3 h-3" />
                                        Minimal Security Controls
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

export default InsecureRegister;