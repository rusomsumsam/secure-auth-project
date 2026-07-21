
import { Link } from 'react-router-dom';
import {
    FiShield,
    FiAlertTriangle,
    FiBarChart2,
    FiLock,
    FiArrowRight,
    FiCheckCircle,
    FiXCircle,
    FiServer,
    FiCode
} from 'react-icons/fi';
import { FaShieldAlt, FaSkull, FaChartLine } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-cyan-500 selection:text-white">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Hero Section */}
                <div className="relative mb-16 lg:mb-24">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl opacity-30" />

                    <div className="relative text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
                            <FiLock className="text-cyan-400 w-4 h-4" />
                            <span className="text-sm font-medium text-cyan-300">Advanced Security Research</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-400 mb-6 leading-tight">
                            Secure Authentication
                            <span className="block text-cyan-400">Attack Prevention</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            A comprehensive analysis of authentication security vulnerabilities and
                            modern defense mechanisms. Understanding the gap between insecure and
                            secure systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/secure"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
                            >
                                <FiShield className="w-5 h-5" />
                                <span>Explore Security</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/insecure"
                                className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105"
                            >
                                <FiAlertTriangle className="w-5 h-5 text-red-400" />
                                <span>View Vulnerabilities</span>
                            </Link>
                        </div>

                        {/* Security Stats */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                                    <FiCheckCircle className="w-4 h-4" />
                                    <span className="text-sm font-medium">Protected</span>
                                </div>
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-xs text-gray-500">Security Coverage</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                                <div className="flex items-center gap-2 text-red-400 mb-1">
                                    <FiXCircle className="w-4 h-4" />
                                    <span className="text-sm font-medium">Exposed</span>
                                </div>
                                <div className="text-2xl font-bold text-white">0%</div>
                                <div className="text-xs text-gray-500">Vulnerable Systems</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                                <div className="flex items-center gap-2 text-blue-400 mb-1">
                                    <FiBarChart2 className="w-4 h-4" />
                                    <span className="text-sm font-medium">Analyzed</span>
                                </div>
                                <div className="text-2xl font-bold text-white">3</div>
                                <div className="text-xs text-gray-500">Security Layers</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-16 lg:mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Security Analysis Framework
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Explore the critical differences between vulnerable and secure authentication systems
                            through our comprehensive analysis platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1: Insecure Authentication */}
                        <div className="group relative bg-[#111118] rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all hover:shadow-xl hover:shadow-red-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                                        <FaSkull className="text-red-400 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Insecure Authentication</h3>
                                        <span className="text-xs text-red-400 font-medium">Critical Vulnerabilities</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Demonstrates critical security vulnerabilities found in many real-world systems:
                                </p>

                                <ul className="space-y-2.5 mb-6">
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiXCircle className="text-red-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Plain Text Password Storage</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiXCircle className="text-red-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>No Input Validation</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiXCircle className="text-red-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>No Rate Limiting Protection</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiXCircle className="text-red-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>No Account Locking Mechanism</span>
                                    </li>
                                </ul>

                                <Link
                                    to="/insecure"
                                    className="inline-flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 px-6 py-2.5 rounded-lg transition-all group-hover:scale-105"
                                >
                                    <span>Explore Vulnerabilities</span>
                                    <FiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 2: Secure Authentication */}
                        <div className="group relative bg-[#111118] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                                        <FaShieldAlt className="text-cyan-400 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Secure Authentication</h3>
                                        <span className="text-xs text-cyan-400 font-medium">Enterprise Grade</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Implements industry-standard security practices and modern defense mechanisms:
                                </p>

                                <ul className="space-y-2.5 mb-6">
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Bcrypt Password Hashing</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Protected Authentication Flow</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Comprehensive Security Controls</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Advanced Security Features</span>
                                    </li>
                                </ul>

                                <Link
                                    to="/secure"
                                    className="inline-flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 px-6 py-2.5 rounded-lg transition-all group-hover:scale-105"
                                >
                                    <span>Explore Security</span>
                                    <FiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: Security Comparison */}
                        <div className="group relative bg-[#111118] rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                        <FiBarChart2 className="text-blue-400 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Security Comparison</h3>
                                        <span className="text-xs text-blue-400 font-medium">Data Driven Analysis</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Interactive comparison dashboard showcasing security improvements:
                                </p>

                                <ul className="space-y-2.5 mb-6">
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-blue-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Side-by-Side Security Analysis</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-blue-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Visual Vulnerability Metrics</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-blue-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Performance Impact Assessment</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <FiCheckCircle className="text-blue-400 w-4 h-4 mt-0.5 shrink-0" />
                                        <span>Security Score Comparison</span>
                                    </li>
                                </ul>

                                <Link
                                    to="/comparison"
                                    className="inline-flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 px-6 py-2.5 rounded-lg transition-all group-hover:scale-105"
                                >
                                    <span>View Comparison</span>
                                    <FiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5 max-w-2xl">
                        <FiCode className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                            Understanding Security Through Comparison
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            This project demonstrates the critical importance of implementing
                            proper authentication security measures in modern applications.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                                <FiCheckCircle className="w-3 h-3 text-cyan-400" /> Secure
                            </span>
                            <span className="flex items-center gap-1">
                                <FiXCircle className="w-3 h-3 text-red-400" /> Vulnerable
                            </span>
                            <span className="flex items-center gap-1">
                                <FiBarChart2 className="w-3 h-3 text-blue-400" /> Analysis
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;