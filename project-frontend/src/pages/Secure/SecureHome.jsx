import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiShield,
    FiCheckCircle,
    FiLock,
    FiArrowRight,
    FiClock,
    FiServer,
    FiCode,
    FiDatabase,
    FiUserCheck,
    FiAlertCircle,
    FiTrendingUp,
    FiShieldOff,
    FiActivity,
    FiHome
} from 'react-icons/fi';
import { FaShieldAlt, FaCheck, FaShieldVirus, FaLock, FaUserShield } from 'react-icons/fa';

const SecureHome = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-cyan-500 selection:text-white">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <FiHome className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>
                {/* Hero Section */}
                <div className="relative mb-16 lg:mb-24">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 blur-3xl opacity-30" />

                    <div className="relative text-center max-w-4xl mx-auto">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6">
                            <FiShield className="text-cyan-400 w-4 h-4" />
                            <span className="text-sm font-medium text-cyan-300">Protected Environment</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-green-500">🟢</span>{' '}
                            <span className="text-white">Secure</span>{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">Authentication</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Enterprise-grade authentication system implementing industry-standard security
                            practices. Protecting user data with multiple layers of defense mechanisms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/secure/register"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
                            >
                                <FiUserCheck className="w-5 h-5" />
                                <span>Register</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/secure/login"
                                className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105"
                            >
                                <FiLock className="w-5 h-5 text-cyan-400" />
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Security Score Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="md:col-span-2 bg-[#111118] rounded-2xl p-6 border border-cyan-500/20">
                        <h3 className="text-lg font-semibold text-white mb-4">Security Score Assessment</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Security Level</span>
                                <div className="flex items-center gap-2">
                                    <FiShield className="text-cyan-400 w-5 h-5" />
                                    <span className="text-cyan-400 font-bold text-lg">Enterprise Grade</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Security Score</span>
                                <span className="text-green-400 font-bold text-lg">90/100</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Protection Status</span>
                                <span className="text-green-500 font-bold text-lg">Active</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-cyan-500 to-green-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111118] rounded-2xl p-6 border border-cyan-500/20">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">Security Controls</span>
                                <span className="text-cyan-400 font-medium">7</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">Vulnerabilities</span>
                                <span className="text-green-500 font-medium">0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">Protection Level</span>
                                <span className="text-cyan-400 font-medium">Maximum</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Features Grid */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            Enterprise Security Features
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our security implementation follows industry best practices to ensure
                            maximum protection against common authentication threats.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {/* Feature 1 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                    <FiDatabase className="text-cyan-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Bcrypt Password Hashing</h4>
                                    <p className="text-sm text-gray-400">Passwords are securely hashed using bcrypt with salt rounds, making them resistant to brute-force and rainbow table attacks.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                    <FiShield className="text-cyan-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Secure Authentication Flow</h4>
                                    <p className="text-sm text-gray-400">Complete authentication pipeline with proper validation, token generation, and session management.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                    <FiUserCheck className="text-cyan-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Improved User Model</h4>
                                    <p className="text-sm text-gray-400">Enhanced user schema with proper validation, role-based access control, and secure data handling.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                    <FiLock className="text-cyan-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Account Locking Protection</h4>
                                    <p className="text-sm text-gray-400">Automatically locks accounts after five failed login attempts to prevent brute-force attacks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Features Section */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            Upcoming Security Features
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Continuous improvement and implementation of additional security measures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {/* Upcoming Feature 1 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                    <FiShieldOff className="text-green-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">JWT Authentication</h4>
                                    <p className="text-sm text-gray-400">JSON Web Token implementation for stateless, secure authentication and authorization.</p>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Feature 2 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                    <FiClock className="text-green-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Rate Limiting</h4>
                                    <p className="text-sm text-gray-400">Prevent brute-force attacks by limiting the number of authentication attempts per IP address.</p>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Feature 3 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                    <FiLock className="text-green-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Full Audit Logging</h4>
                                    <p className="text-sm text-gray-400">Comprehensive logging of authentication activities for advanced monitoring and incident response.
</p>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Feature 4 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                    <FiServer className="text-green-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Audit Logging</h4>
                                    <p className="text-sm text-gray-400">Comprehensive logging of all authentication events for security monitoring and incident response.</p>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Feature 5 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                    <FiActivity className="text-green-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Attack Detection</h4>
                                    <p className="text-sm text-gray-400">Real-time detection and alerting of suspicious authentication activities and potential attacks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Summary Section */}
                <div className="bg-[#111118] border border-cyan-500/30 rounded-2xl p-8 mb-16">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <FaShieldAlt className="text-cyan-400 text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">🛡️ Enterprise Security Overview</h3>
                            <p className="text-gray-400 leading-relaxed">
                                This secure authentication system implements multiple layers of defense, following
                                the principle of <span className="text-cyan-400 font-semibold">defense in depth</span>.
                                Every security control works together to create a robust security posture that
                                protects against both known and emerging threats.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1.5 text-cyan-400">
                                    <FiCheckCircle className="w-4 h-4" />
                                    Industry Standards
                                </span>
                                <span className="flex items-center gap-1.5 text-green-400">
                                    <FiCheckCircle className="w-4 h-4" />
                                    Best Practices
                                </span>
                                <span className="flex items-center gap-1.5 text-blue-400">
                                    <FiTrendingUp className="w-4 h-4" />
                                    Continuously Improving
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 max-w-2xl">
                        <FaUserShield className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                            Experience Secure Authentication
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Discover how proper security implementation can protect user data and prevent
                            unauthorized access. Register now to experience secure authentication firsthand.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1 text-cyan-400">
                                <FiShield className="w-3 h-3" /> Secure
                            </span>
                            <span className="flex items-center gap-1 text-green-400">
                                <FiCheckCircle className="w-3 h-3" /> Protected
                            </span>
                            <span className="flex items-center gap-1 text-blue-400">
                                <FiTrendingUp className="w-3 h-3" /> Advanced
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecureHome;