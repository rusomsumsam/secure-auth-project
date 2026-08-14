import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
    FiBarChart2,
    FiHome,
    FiLock,
    FiMenu,
    FiShield,
    FiX,
} from 'react-icons/fi';

const navItems = [
    {
        label: 'Home',
        path: '/',
        icon: FiHome,
        end: true,
        theme: 'default',
    },
    {
        label: 'Insecure Demo',
        path: '/insecure',
        icon: FiLock,
        end: false,
        theme: 'insecure',
    },
    {
        label: 'Secure Demo',
        path: '/secure',
        icon: FiShield,
        end: false,
        theme: 'secure',
    },
    {
        label: 'Comparison',
        path: '/comparison',
        icon: FiBarChart2,
        end: true,
        theme: 'comparison',
    },
];

const getNavLinkClass = ({ isActive }, theme) => {
    const baseClass =
        'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200';

    if (!isActive) {
        return `${baseClass} text-gray-400 hover:bg-white/5 hover:text-white`;
    }

    const activeClasses = {
        insecure:
            'bg-red-500/10 text-red-400 ring-1 ring-inset ring-red-500/20',
        secure:
            'bg-cyan-500/10 text-cyan-400 ring-1 ring-inset ring-cyan-500/20',
        comparison:
            'bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-500/20',
        default:
            'bg-white/10 text-white ring-1 ring-inset ring-white/10',
    };

    return `${baseClass} ${activeClasses[theme]}`;
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/90 backdrop-blur-xl">
            <nav
                className="container mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Primary navigation"
            >
                <div className="flex h-16 items-center justify-between">
                    <Link
                        to="/"
                        className="group flex min-w-0 items-center gap-3"
                        aria-label="Secure Authentication home"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
                            <FiShield className="h-5 w-5 text-white" />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-white sm:text-base">
                                SecureAuth Lab
                            </p>
                            <p className="hidden text-xs text-gray-500 sm:block">
                                Attack Prevention Research
                            </p>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.end}
                                    className={(navState) =>
                                        getNavLinkClass(navState, item.theme)
                                    }
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </NavLink>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 lg:hidden"
                        aria-label={
                            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? (
                            <FiX className="h-5 w-5" />
                        ) : (
                            <FiMenu className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        id="mobile-navigation"
                        className="border-t border-white/5 py-3 lg:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.end}
                                        className={(navState) =>
                                            getNavLinkClass(navState, item.theme)
                                        }
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.label}</span>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;