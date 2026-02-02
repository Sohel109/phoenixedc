import { Facebook, Instagram, Mail, MapPin, Music2, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';


export function Footer() {
    return (
        <footer className="bg-secondary text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* ... (previous sections unchanged) ... */}
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="/logo.jpg"
                                alt="Phoenix EDC Logo"
                                className="w-10 h-10 object-contain bg-white rounded-lg shadow-sm"
                            />
                            <span className="font-bold text-lg tracking-tight">Phoenix <span className="text-primary-light">EDC</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            L'association étudiante de KEDGE Business School qui lutte pour l'égalité des chances et l'accès à l'éducation pour tous.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary-light shrink-0 mt-0.5" />
                                <span>KEDGE Business School<br />Domaine de Luminy<br />13009 Marseille</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-light shrink-0" />
                                <a href="mailto:phoenixedc.asso@gmail.com" className="hover:text-white transition-colors">phoenixedc.asso@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Liens Rapides</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/projets" className="hover:text-primary-light transition-colors">Nos Projets</Link></li>
                            <li><Link to="/evenements" className="hover:text-primary-light transition-colors">Événements</Link></li>
                            <li><Link to="/partenaires" className="hover:text-primary-light transition-colors">Devenir Partenaire</Link></li>
                            <li><Link to="/mentions-legales" className="hover:text-primary-light transition-colors">Mentions Légales</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Suivez-nous</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/phoenixedc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://fr.linkedin.com/company/phoenix-egalit%C3%A9deschances"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@phoenixedc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="TikTok"
                            >
                                <Music2 size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/phoenix.egalitedeschances/?locale=fr_FR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Phoenix Égalité des Chances. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
