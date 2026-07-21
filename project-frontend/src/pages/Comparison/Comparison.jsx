import React from 'react';
import {
    FiShield,
    FiAlertTriangle,
    FiCheckCircle,
    FiXCircle,
    FiTrendingUp,
    FiDatabase,
    FiLock,
    FiUnlock,
    FiUserCheck,
    FiClock,
    FiServer,
    FiArrowRight,
    FiBarChart2,
    FiActivity,
    FiShieldOff
} from 'react-icons/fi';
import { FaShieldAlt, FaSkull, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const Comparison = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-cyan-500 selection:text-white">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Page Header */}
                <div className="relative mb-12">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl opacity-30" />

                    <div className="relative text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
                            <FiBarChart2 className="text-cyan-400 w-4 h-4" />
                            <span className="text-sm font-medium text-cyan-300">Security Analysis Dashboard</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-400 mb-4">
                            Security Comparison Dashboard
                        </h1>

                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Before Security vs After Security: A comprehensive analysis of authentication security improvements
                        </p>
                    </div>
                </div>

                {/* Comparison Panels */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    {/* Left Panel - Insecure */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />

                        <div className="relative bg-[#111118] rounded-2xl p-6 lg:p-8 border border-red-500/30 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                    <FaSkull className="text-red-400 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">🔴 Before Security</h2>
                                    <span className="text-xs text-red-400 font-medium">Vulnerable System</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Password Storage */}
                                <div className="bg-black/40 rounded-xl p-4 border border-red-500/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Password Storage</span>
                                        <FiDatabase className="text-red-400 w-4 h-4" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <code className="bg-red-500/10 text-red-300 px-3 py-1.5 rounded-lg text-sm font-mono">
                                            123456
                                        </code>
                                        <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">Plain Text</span>
                                    </div>
                                </div>

                                {/* Password Type */}
                                <div className="bg-black/40 rounded-xl p-4 border border-red-500/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Password Type</span>
                                        <FiUnlock className="text-red-400 w-4 h-4" />
                                    </div>
                                    <span className="text-red-300 font-medium">Plain Text</span>
                                </div>

                                {/* Security Controls */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-black/40 rounded-xl p-4 border border-red-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Validation</span>
                                            <FiXCircle className="text-red-400 w-4 h-4" />
                                        </div>
                                        <span className="text-red-300 font-medium">No</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 border border-red-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Rate Limiting</span>
                                            <FiClock className="text-red-400 w-4 h-4" />
                                        </div>
                                        <span className="text-red-300 font-medium">No</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 border border-red-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Account Locking</span>
                                            <FiLock className="text-red-400 w-4 h-4" />
                                        </div>
                                        <span className="text-red-300 font-medium">No</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 border border-red-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Audit Logs</span>
                                            <FiServer className="text-red-400 w-4 h-4" />
                                        </div>
                                        <span className="text-red-300 font-medium">No</span>
                                    </div>
                                </div>

                                {/* Security Score */}
                                <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Security Score</span>
                                        <span className="text-red-400 font-bold text-lg">20/100</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                                        <div className="bg-gradient-to-r from-red-500 to-red-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">Risk Level</span>
                                        <span className="flex items-center gap-1.5 text-red-400 font-medium">
                                            <FiAlertTriangle className="w-4 h-4" /> High
                                        </span>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">Status</span>
                                        <span className="flex items-center gap-1.5 text-red-400 font-medium">
                                            <FiShieldOff className="w-4 h-4" /> Vulnerable
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Secure */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />

                        <div className="relative bg-[#111118] rounded-2xl p-6 lg:p-8 border border-cyan-500/30 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                    <FaShieldAlt className="text-cyan-400 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">🟢 After Security</h2>
                                    <span className="text-xs text-cyan-400 font-medium">Protected System</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Password Storage */}
                                <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Password Storage</span>
                                        <FiDatabase className="text-cyan-400 w-4 h-4" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <code className="bg-cyan-500/10 text-cyan-300 px-3 py-1.5 rounded-lg text-sm font-mono">
                                            $2b$12$...
                                        </code>
                                        <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">Bcrypt Hash</span>
                                    </div>
                                </div>

                                {/* Password Type */}
                                <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Password Type</span>
                                        <FiLock className="text-cyan-400 w-4 h-4" />
                                    </div>
                                    <span className="text-cyan-300 font-medium">Bcrypt Hash</span>
                                </div>

                                {/* Security Controls */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Validation</span>
                                            <FiCheckCircle className="text-cyan-400 w-4 h-4" />
                                        </div>
                                        <span className="text-cyan-300 font-medium">Enabled</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Rate Limiting</span>
                                            <FiClock className="text-green-400 w-4 h-4" />
                                        </div>
                                        <span className="text-green-300 font-medium">Planned</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Account Locking</span>
                                            <FiLock className="text-green-400 w-4 h-4" />
                                        </div>
                                        <span className="text-green-300 font-medium">Planned</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 border border-cyan-500/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-400 text-sm">Audit Logs</span>
                                            <FiServer className="text-green-400 w-4 h-4" />
                                        </div>
                                        <span className="text-green-300 font-medium">Planned</span>
                                    </div>
                                </div>

                                {/* Security Score */}
                                <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Security Score</span>
                                        <span className="text-cyan-400 font-bold text-lg">85/100</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                                        <div className="bg-gradient-to-r from-cyan-500 to-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">Risk Level</span>
                                        <span className="flex items-center gap-1.5 text-green-400 font-medium">
                                            <FiCheckCircle className="w-4 h-4" /> Low
                                        </span>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">Status</span>
                                        <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                                            <FiShield className="w-4 h-4" /> Protected
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Improvements Section */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            Security Improvements Overview
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Key security enhancements implemented to protect user authentication
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {/* Improvement 1 */}
                        <div className="bg-[#111118] rounded-xl p-6 border border-gray-700/30 hover:border-cyan-500/30 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <FiDatabase className="text-red-400 text-xl" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm text-gray-400">Before</span>
                                    <p className="text-white font-medium">Plain Text Password</p>
                                </div>
                            </div>
                            <div className="flex justify-center py-2">
                                <FiArrowRight className="text-cyan-400 w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                                    <FiLock className="text-cyan-400 text-xl" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm text-gray-400">After</span>
                                    <p className="text-white font-medium">Bcrypt Hashing</p>
                                </div>
                            </div>
                        </div>

                        {/* Improvement 2 */}
                        <div className="bg-[#111118] rounded-xl p-6 border border-gray-700/30 hover:border-cyan-500/30 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <FiUnlock className="text-red-400 text-xl" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm text-gray-400">Before</span>
                                    <p className="text-white font-medium">Unprotected Login</p>
                                </div>
                            </div>
                            <div className="flex justify-center py-2">
                                <FiArrowRight className="text-cyan-400 w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                                    <FiShield className="text-cyan-400 text-xl" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm text-gray-400">After</span>
                                    <p className="text-white font-medium">Protected Authentication</p>
                                </div>
                            </div>
                        </div>

                        {/* Improvement 3 */}
                        <div className="bg-[#111118] rounded-xl p-6 border border-gray-700/30 hover:border-cyan-500/30 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <FiAlertTriangle className="text-red-400 text-xl" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm text-gray-400">Before</span>
                                    <p className="text-white font-medium">No Security Controls</p>
                                </div>
                            </div>
                            <div className="flex justify-center py-2">
                                <FiArrowRight className="text-cyan-400 w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                                    <FiCheckCircle className="text-cyan-400 text-xl" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm text-gray-400">After</span>
                                    <p className="text-white font-medium">Security Controls Enabled</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    <div className="bg-[#111118] rounded-xl p-4 border border-gray-700/30">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                            <FiBarChart2 className="w-4 h-4" />
                            <span>Security Improvement</span>
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">+65</div>
                        <div className="text-xs text-gray-500">Score increase</div>
                    </div>

                    <div className="bg-[#111118] rounded-xl p-4 border border-gray-700/30">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                            <FiShield className="w-4 h-4" />
                            <span>Vulnerabilities Fixed</span>
                        </div>
                        <div className="text-2xl font-bold text-green-400">6</div>
                        <div className="text-xs text-gray-500">Critical issues resolved</div>
                    </div>

                    <div className="bg-[#111118] rounded-xl p-4 border border-gray-700/30">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                            <FiTrendingUp className="w-4 h-4" />
                            <span>Protection Level</span>
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">Enhanced</div>
                        <div className="text-xs text-gray-500">Multi-layer defense</div>
                    </div>

                    <div className="bg-[#111118] rounded-xl p-4 border border-gray-700/30">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                            <FiActivity className="w-4 h-4" />
                            <span>Security Status</span>
                        </div>
                        <div className="text-2xl font-bold text-green-400">Active</div>
                        <div className="text-xs text-gray-500">Continuous monitoring</div>
                    </div>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 max-w-3xl mx-auto text-center">
                    <FaCheck className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">
                        Comprehensive Security Transformation
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                        The comparison demonstrates a significant security improvement through the
                        implementation of industry-standard authentication security measures.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5 text-red-400">
                            <FiXCircle className="w-3 h-3" /> Before: 20/100
                        </span>
                        <span className="flex items-center gap-1.5 text-green-400">
                            <FiCheckCircle className="w-3 h-3" /> After: 85/100
                        </span>
                        <span className="flex items-center gap-1.5 text-cyan-400">
                            <FiTrendingUp className="w-3 h-3" /> +65% Improvement
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comparison;