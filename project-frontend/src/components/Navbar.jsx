import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiShield } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Insecure", path: "/insecure" },
        { name: "Secure", path: "/secure" },
        { name: "Comparison", path: "/comparison" },
    ];

    // Prevent body scrolling when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close sidebar on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    // Close mobile drawer when screen becomes desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#0a0a0f]/90 border-b border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 text-white font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg"
                    >
                        <FiShield className="text-cyan-400 shrink-0" />
                        <span className="hidden sm:inline">Secure Auth Project</span>
                        <span className="sm:hidden">SecureAuth</span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    `transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg px-3 py-1.5 ${isActive
                                        ? "text-cyan-400 font-semibold bg-cyan-500/10"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <FiX size={24} />
                        ) : (
                            <FiMenu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed inset-0 z-100 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                aria-hidden={!isOpen}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60"
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar */}
                <div
                    className={`absolute top-0 right-0 h-screen w-70 max-w-[85vw] bg-[#0a0a0f] border-l border-white/10 transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Sidebar Header with Logo */}
                    <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 text-white font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg"
                        >
                            <FiShield className="text-cyan-400 shrink-0" />
                            <span className="hidden sm:inline">Secure Auth Project</span>
                            <span className="sm:hidden">SecureAuth</span>
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg"
                            aria-label="Close menu"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="px-4 py-6 flex flex-col gap-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === "/"}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] ${isActive
                                        ? "text-cyan-400 font-semibold bg-white/5"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;