import { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { projects } from '../../data/projects';

import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Accueil', path: '/' },
        { label: 'Nos Projets', path: '/projets' },
        { label: 'Événements', path: '/evenements' },
        { label: 'Partenaires', path: '/partenaires' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <img
                        src="/logo.jpg"
                        alt="Phoenix EDC Logo"
                        className="w-12 h-12 object-contain bg-white rounded-full shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <span className={clsx("font-bold text-xl tracking-tight transition-colors", (isScrolled || !isHome) ? "text-gray-900" : "text-white drop-shadow-md")}>
                        Phoenix <span className="text-primary">EDC</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        if (link.path === '/projets') {
                            return (
                                <div key={link.path} className="relative group">
                                    <Link
                                        to={link.path}
                                        className={clsx(
                                            'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 py-4',
                                            location.pathname.startsWith(link.path) ? 'text-primary' : ((isScrolled || !isHome) ? 'text-gray-600' : 'text-white drop-shadow-md')
                                        )}
                                    >
                                        {link.label}
                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                        <div className="relative bg-white rounded-lg overflow-hidden">
                                            {projects.map((project) => (
                                                <Link
                                                    key={project.id}
                                                    to={`/projets/${project.id}`}
                                                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex items-center gap-3"
                                                >
                                                    <div className={`w-8 h-8 rounded-lg ${project.color} flex items-center justify-center text-primary shrink-0`}>
                                                        <project.icon size={14} />
                                                    </div>
                                                    <span className="font-medium">{project.title}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-primary relative group',
                                    location.pathname === link.path ? 'text-primary' : ((isScrolled || !isHome) ? 'text-gray-600' : 'text-white drop-shadow-md')
                                )}
                            >
                                {link.label}
                                <span className={clsx("absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform group-hover:scale-x-100", location.pathname === link.path && "scale-x-100")} />
                            </Link>
                        )
                    })}
                    <a
                        href="https://www.helloasso.com/associations/egalite-des-chances-phoenix/collectes/a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        <Heart size={16} className="fill-current" />
                        Faire un don
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={clsx("md:hidden p-2", (isScrolled || !isHome) ? "text-gray-700" : "text-white")}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                'text-base font-medium p-2 rounded-lg transition-colors',
                                location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://www.helloasso.com/associations/egalite-des-chances-phoenix/collectes/a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
                    >
                        <Heart size={16} className="fill-current" />
                        Faire un don
                    </a>
                </div>
            )}
        </header>
    );
}
