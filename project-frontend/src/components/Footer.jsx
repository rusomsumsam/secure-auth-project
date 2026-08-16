import { NavLink } from "react-router-dom";
import { FiShield } from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Navigation data matches AppRoutes paths exactly
    const mainNavItems = [
        { name: "Home", path: "/" },
        { name: "Insecure Demo", path: "/insecure" },
        { name: "Secure Demo", path: "/secure" },
        { name: "Comparison", path: "/comparison" },
    ];

    const secureNavItems = [
        { name: "Register", path: "/secure/register" },
        { name: "Login", path: "/secure/login" },
        { name: "Profile", path: "/secure/profile" },
        { name: "Dashboard", path: "/secure/dashboard" },
    ];

    const techItems = [
        "React",
        "Express",
        "MongoDB Atlas",
        "JWT",
        "BCrypt",
        "Tailwind CSS",
    ];

    return (
        <footer className="relative bg-[#0d0d14] border-t border-white/10 mt-auto overflow-hidden">
            {/* Decorative background layers - pointer-events-none to preserve interaction */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Solid opaque base to block grid pattern */}
                <div className="absolute inset-0 bg-[#0d0d14]" />

                {/* Subtle top-to-bottom dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#151520]/30 to-transparent" />

                {/* Cyan radial glow near top center */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl rounded-full" />

                {/* Very subtle blue glow offset */}
                <div className="absolute -top-16 left-1/3 w-1/2 h-24 bg-blue-500/3 blur-2xl rounded-full" />
            </div>

            {/* Top separator line with gradient */}
            <div className="absolute top-0 left-0 right-0 h-px pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm" />
            </div>

            {/* Very soft upper shadow */}
            <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-b from-black/40 to-transparent" />

            {/* Footer content - relative to stay above decorative layers */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {/* Project Identity */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-white">
                            <FiShield className="text-cyan-400 shrink-0" size={24} aria-hidden="true" />
                            <span className="font-bold text-lg">Secure Auth Project</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            A thesis-based comparative demonstration of insecure and enhanced web authentication mechanisms.
                        </p>
                    </div>

                    {/* Main Navigation */}
                    <div>
                        <nav aria-label="Main navigation">
                            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                                Navigation
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {mainNavItems.map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            end={item.path === "/"}
                                            className={({ isActive }) =>
                                                `text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded px-2 py-1 ${isActive
                                                    ? "text-cyan-400 font-medium"
                                                    : "text-gray-400 hover:text-white"
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Secure Module Navigation */}
                    <div>
                        <nav aria-label="Secure module navigation">
                            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                                Secure Module
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {secureNavItems.map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            end={item.path === "/secure"}
                                            className={({ isActive }) =>
                                                `text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded px-2 py-1 ${isActive
                                                    ? "text-cyan-400 font-medium"
                                                    : "text-gray-400 hover:text-white"
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Technology & Disclaimer */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                                Technology
                            </h2>
                            <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                                {techItems.map((tech) => (
                                    <li key={tech}>
                                        <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                            {tech}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-xs border-l-2 border-cyan-400/30 pl-3">
                                The insecure environment is intentionally vulnerable and must be used only with synthetic test credentials for educational and research purposes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - with slightly deeper surface */}
                <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />
                    <div className="flex flex-wrap items-center gap-2">
                        <span>&copy; {currentYear}</span>
                        <span className="text-white/30" aria-hidden="true">•</span>
                        <span>Secure Auth Project</span>
                        <span className="text-white/30" aria-hidden="true">•</span>
                        <span>Academic Thesis Demonstration</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-cyan-400/10 text-cyan-400/80 px-2.5 py-0.5 rounded-full border border-cyan-400/20 text-[10px] font-medium tracking-wide">
                            Research Prototype
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;