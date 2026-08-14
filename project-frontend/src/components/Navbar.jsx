import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FiMenu,
    FiX,
    FiShield,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [desktopDropdown, setDesktopDropdown] = useState(null);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const location = useLocation();
    const dropdownRefs = useRef({});
    const navRef = useRef(null);

    // Navigation data
    const navItems = [
        { name: "Home", path: "/" },
        {
            name: "Insecure",
            path: "/insecure",
            color: "red",
            subItems: [
                { name: "Insecure Home", path: "/insecure" },
                { name: "Register", path: "/insecure/register" },
                { name: "Login", path: "/insecure/login" },
            ],
        },
        {
            name: "Secure",
            path: "/secure",
            color: "cyan",
            subItems: [
                { name: "Secure Home", path: "/secure" },
                { name: "Register", path: "/secure/register" },
                { name: "Login", path: "/secure/login" },
                { name: "Profile", path: "/secure/profile" },
                { name: "Dashboard", path: "/secure/dashboard" },
            ],
        },
        { name: "Comparison", path: "/comparison", color: "blue" },
    ];

    // Determine if a route is active
    const isRouteActive = (path, exact = false) => {
        if (exact) return location.pathname === path;
        return location.pathname.startsWith(path);
    };

    // Check if a section is active
    const isSectionActive = (section) => {
        if (!section.subItems) return isRouteActive(section.path, section.path === "/");
        return section.subItems.some((sub) => isRouteActive(sub.path, false));
    };

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
            if (e.key === "Escape") {
                if (isOpen) setIsOpen(false);
                if (desktopDropdown) setDesktopDropdown(null);
                if (mobileAccordion) setMobileAccordion(null);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, desktopDropdown, mobileAccordion]);

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

    // Close desktop dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (desktopDropdown && navRef.current) {
                const dropdownElement = dropdownRefs.current[desktopDropdown];
                if (dropdownElement && !dropdownElement.contains(e.target)) {
                    setDesktopDropdown(null);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [desktopDropdown]);

    // Close dropdowns when route changes
    useEffect(() => {
        setDesktopDropdown(null);
        setMobileAccordion(null);
    }, [location.pathname]);

    // Toggle desktop dropdown
    const toggleDesktopDropdown = (name) => {
        setDesktopDropdown((prev) => (prev === name ? null : name));
    };

    // Toggle mobile accordion
    const toggleMobileAccordion = (name) => {
        setMobileAccordion((prev) => (prev === name ? null : name));
    };

    // Close mobile drawer when a link is clicked
    const handleMobileLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav
            ref={navRef}
            className="sticky top-0 z-50 backdrop-blur-lg bg-[#0a0a0f]/90 border-b border-white/10"
        >
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
                        {navItems.map((item) => {
                            if (!item.subItems) {
                                // Regular link (Home, Comparison)
                                const colorClasses = item.color === "blue"
                                    ? {
                                        active: "text-blue-400 font-semibold bg-blue-500/10",
                                        inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                        ring: "focus-visible:ring-blue-400"
                                    }
                                    : {
                                        active: "text-cyan-400 font-semibold bg-cyan-500/10",
                                        inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                        ring: "focus-visible:ring-cyan-400"
                                    };
                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.path === "/"}
                                        className={({ isActive }) =>
                                            `transition-colors focus:outline-none focus-visible:ring-2 ${colorClasses.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg px-3 py-1.5 ${isActive
                                                ? colorClasses.active
                                                : colorClasses.inactive
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                );
                            }

                            // Dropdown item (Insecure, Secure)
                            const isActive = isSectionActive(item);
                            const colorMap = {
                                red: {
                                    active: "text-red-400 font-semibold bg-red-500/10",
                                    inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                    ring: "focus-visible:ring-red-400",
                                    border: "border-red-400/20",
                                    bg: "bg-red-500/5",
                                },
                                cyan: {
                                    active: "text-cyan-400 font-semibold bg-cyan-500/10",
                                    inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                    ring: "focus-visible:ring-cyan-400",
                                    border: "border-cyan-400/20",
                                    bg: "bg-cyan-500/5",
                                },
                            };
                            const colors = colorMap[item.color] || colorMap.cyan;

                            return (
                                <div
                                    key={item.path}
                                    className="relative"
                                    ref={(el) => (dropdownRefs.current[item.name] = el)}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleDesktopDropdown(item.name)}
                                        onMouseEnter={() => setDesktopDropdown(item.name)}
                                        className={`flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-2 ${colors.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded-lg px-3 py-1.5 ${isActive || desktopDropdown === item.name
                                            ? colors.active
                                            : colors.inactive
                                            }`}
                                        aria-expanded={desktopDropdown === item.name}
                                        aria-haspopup="true"
                                        aria-controls={`${item.name}-dropdown`}
                                    >
                                        {item.name}
                                        {desktopDropdown === item.name ? (
                                            <FiChevronUp size={16} />
                                        ) : (
                                            <FiChevronDown size={16} />
                                        )}
                                    </button>
                                    {desktopDropdown === item.name && (
                                        <div
                                            id={`${item.name}-dropdown`}
                                            className={`absolute top-full left-0 mt-2 w-48 bg-[#111118] border ${colors.border} rounded-lg shadow-xl overflow-hidden z-50`}
                                            role="menu"
                                        >
                                            {item.subItems.map((subItem) => {
                                                const isSubActive = isRouteActive(subItem.path, subItem.path === "/");
                                                return (
                                                    <NavLink
                                                        key={subItem.path}
                                                        to={subItem.path}
                                                        end={subItem.path === "/"}
                                                        className={({ isActive }) =>
                                                            `block px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 ${colors.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] ${isActive
                                                                ? `${colors.active} ${colors.bg}`
                                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                                            }`
                                                        }
                                                        role="menuitem"
                                                        onClick={() => setDesktopDropdown(null)}
                                                    >
                                                        {subItem.name}
                                                    </NavLink>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
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
                    className={`absolute top-0 right-0 h-screen w-70 max-w-[85vw] bg-[#0a0a0f] border-l border-white/10 transform transition-transform duration-300 ease-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Sidebar Header with Logo */}
                    <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 sticky top-0 bg-[#0a0a0f] z-10">
                        <NavLink
                            to="/"
                            onClick={handleMobileLinkClick}
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

                    {/* Navigation Links with Accordion */}
                    <div className="px-4 py-6 flex flex-col gap-1">
                        {navItems.map((item) => {
                            if (!item.subItems) {
                                // Regular link (Home, Comparison)
                                const colorClasses = item.color === "blue"
                                    ? {
                                        active: "text-blue-400 font-semibold bg-blue-500/10",
                                        inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                    }
                                    : {
                                        active: "text-cyan-400 font-semibold bg-white/5",
                                        inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                    };
                                const isActive = isRouteActive(item.path, item.path === "/");
                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.path === "/"}
                                        onClick={handleMobileLinkClick}
                                        className={({ isActive: navActive }) =>
                                            `block px-4 py-3 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] ${navActive
                                                ? colorClasses.active
                                                : colorClasses.inactive
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                );
                            }

                            // Accordion item (Insecure, Secure)
                            const isAccordionOpen = mobileAccordion === item.name;
                            const isSectionActive = isRouteActive(item.path, false);
                            const colorMap = {
                                red: {
                                    active: "text-red-400 font-semibold bg-red-500/10",
                                    inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                    border: "border-red-400/20",
                                    bg: "bg-red-500/5",
                                    ring: "focus-visible:ring-red-400",
                                },
                                cyan: {
                                    active: "text-cyan-400 font-semibold bg-cyan-500/10",
                                    inactive: "text-gray-400 hover:text-white hover:bg-white/5",
                                    border: "border-cyan-400/20",
                                    bg: "bg-cyan-500/5",
                                    ring: "focus-visible:ring-cyan-400",
                                },
                            };
                            const colors = colorMap[item.color] || colorMap.cyan;

                            return (
                                <div key={item.path} className="flex flex-col">
                                    <button
                                        type="button"
                                        onClick={() => toggleMobileAccordion(item.name)}
                                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 ${colors.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] ${isSectionActive || isAccordionOpen
                                            ? colors.active
                                            : colors.inactive
                                            }`}
                                        aria-expanded={isAccordionOpen}
                                        aria-controls={`${item.name}-mobile-accordion`}
                                    >
                                        <span>{item.name}</span>
                                        {isAccordionOpen ? (
                                            <FiChevronUp size={20} />
                                        ) : (
                                            <FiChevronDown size={20} />
                                        )}
                                    </button>
                                    {isAccordionOpen && (
                                        <div
                                            id={`${item.name}-mobile-accordion`}
                                            className="flex flex-col pl-4 pr-2 gap-1 mt-1"
                                        >
                                            {item.subItems.map((subItem) => {
                                                const isSubActive = isRouteActive(subItem.path, subItem.path === "/");
                                                return (
                                                    <NavLink
                                                        key={subItem.path}
                                                        to={subItem.path}
                                                        end={subItem.path === "/"}
                                                        onClick={handleMobileLinkClick}
                                                        className={({ isActive }) =>
                                                            `block px-4 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 ${colors.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] ${isActive
                                                                ? `${colors.active} ${colors.bg}`
                                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                                            }`
                                                        }
                                                    >
                                                        {subItem.name}
                                                    </NavLink>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;