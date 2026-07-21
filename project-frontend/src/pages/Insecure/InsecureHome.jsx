import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiAlertTriangle,
    FiShieldOff,
    FiLock,
    FiUnlock,
    FiXCircle,
    FiArrowRight,
    FiAlertCircle,
    FiClock,
    FiUserX,
    FiDatabase,
    FiServer,
    FiCode
} from 'react-icons/fi';
import { FaSkull, FaExclamationTriangle, FaShieldAlt, FaBug } from 'react-icons/fa';

const InsecureHome = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-red-500 selection:text-white">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Hero Section */}
                <div className="relative mb-16 lg:mb-24">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 blur-3xl opacity-30" />

                    <div className="relative text-center max-w-4xl mx-auto">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-6 animate-pulse">
                            <FiAlertCircle className="text-red-400 w-4 h-4" />
                            <span className="text-sm font-medium text-red-300">Vulnerable Environment</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-red-500">🔴</span>{' '}
                            <span className="text-white">Insecure</span>{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">Authentication</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            This environment demonstrates critical security vulnerabilities commonly found in
                            poorly implemented authentication systems. Use this to understand what <span className="text-red-400 font-semibold">NOT</span> to do.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/insecure/register"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-red-500/25"
                            >
                                <FiUserX className="w-5 h-5" />
                                <span>Register Account</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/insecure/login"
                                className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105"
                            >
                                <FiLock className="w-5 h-5 text-red-400" />
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Security Risk Score Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="md:col-span-2 bg-[#111118] rounded-2xl p-6 border border-red-500/20">
                        <h3 className="text-lg font-semibold text-white mb-4">Security Risk Assessment</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Risk Level</span>
                                <div className="flex items-center gap-2">
                                    <FiAlertTriangle className="text-red-500 w-5 h-5" />
                                    <span className="text-red-500 font-bold text-lg">High</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Vulnerability Score</span>
                                <span className="text-white font-bold text-lg">95/100</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Exploitation Risk</span>
                                <span className="text-red-500 font-bold text-lg">Critical</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-red-500 to-red-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111118] rounded-2xl p-6 border border-red-500/20">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">Known Vulnerabilities</span>
                                <span className="text-red-400 font-medium">6</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">Security Controls</span>
                                <span className="text-gray-500 font-medium">0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">Protection Level</span>
                                <span className="text-red-500 font-medium">None</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vulnerabilities Grid */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            Critical Vulnerabilities Exposed
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Each of these vulnerabilities represents a severe security risk that can lead to
                            data breaches, unauthorized access, and system compromise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {/* Vulnerability 1 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                    <FiDatabase className="text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Plain Text Password Storage</h4>
                                    <p className="text-sm text-gray-400">Passwords stored without any encryption or hashing, making them easily readable by anyone with database access.</p>
                                </div>
                            </div>
                        </div>

                        {/* Vulnerability 2 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                    <FiCode className="text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">No Input Validation</h4>
                                    <p className="text-sm text-gray-400">All user inputs are accepted without validation, allowing injection attacks and malformed data to enter the system.</p>
                                </div>
                            </div>
                        </div>

                        {/* Vulnerability 3 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                    <FiLock className="text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">No JWT Authentication</h4>
                                    <p className="text-sm text-gray-400">Session management is handled insecurely without proper token-based authentication, allowing session hijacking.</p>
                                </div>
                            </div>
                        </div>

                        {/* Vulnerability 4 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                    <FiClock className="text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">No Rate Limiting</h4>
                                    <p className="text-sm text-gray-400">Unlimited login attempts allow brute-force attacks, enabling attackers to try thousands of password combinations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Vulnerability 5 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                    <FiUnlock className="text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">No Account Locking</h4>
                                    <p className="text-sm text-gray-400">After multiple failed attempts, accounts remain active, giving attackers unlimited attempts to compromise user credentials.</p>
                                </div>
                            </div>
                        </div>

                        {/* Vulnerability 6 */}
                        <div className="group bg-[#111118] rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                    <FiServer className="text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">No Audit Logging</h4>
                                    <p className="text-sm text-gray-400">No security events are logged, making it impossible to detect, investigate, or respond to security incidents.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Warning Section */}
                <div className="bg-[#111118] border border-red-500/30 rounded-2xl p-8 mb-16">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                            <FaSkull className="text-red-400 text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">⚠️ Security Warning</h3>
                            <p className="text-gray-400 leading-relaxed">
                                This environment is intentionally insecure for educational purposes. All data and
                                credentials stored here are <span className="text-red-400 font-semibold">unprotected</span> and vulnerable to attack.
                                Do not use real passwords or sensitive information in this environment.
                            </p>
                            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1.5">
                                    <FiAlertCircle className="text-red-400 w-4 h-4" />
                                    Educational Purpose Only
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <FiShieldOff className="text-red-400 w-4 h-4" />
                                    Zero Security Controls
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 max-w-2xl">
                        <FaBug className="w-8 h-8 text-red-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                            Understand Security Vulnerabilities
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Experience firsthand how these vulnerabilities can be exploited to compromise
                            system security. Use this knowledge to build better, more secure applications.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1 text-red-400">
                                <FiAlertTriangle className="w-3 h-3" /> Insecure
                            </span>
                            <span className="flex items-center gap-1 text-gray-400">
                                <FiArrowRight className="w-3 h-3" />
                            </span>
                            <span className="flex items-center gap-1 text-green-400">
                                <FiShieldOff className="w-3 h-3" /> Learn
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsecureHome;