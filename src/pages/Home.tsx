import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, BookOpen, Globe, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
    '/images/hero-4.jpg'
];

export function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const paginate = useCallback((newDirection: number) => {
        if (isAnimating) return; // Prevent double clicks
        setDirection(newDirection);
        setCurrentImageIndex((prev) => {
            let nextIndex = prev + newDirection;
            if (nextIndex < 0) nextIndex = heroImages.length - 1;
            if (nextIndex >= heroImages.length) nextIndex = 0;
            return nextIndex;
        });
    }, [isAnimating]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimating) {
                paginate(1);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [currentImageIndex, isAnimating, paginate]); // Reset timer on index change

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0
        })
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900 group">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentImageIndex}
                            src={heroImages[currentImageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            onAnimationStart={() => setIsAnimating(true)}
                            onAnimationComplete={() => setIsAnimating(false)}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            alt="Phoenix Students"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/30 z-10" />
                </div>

                {/* Manual Controls */}
                <button
                    onClick={() => paginate(-1)}
                    disabled={isAnimating}
                    className={`absolute left-4 z-30 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/30 transition-all md:opacity-0 md:group-hover:opacity-100 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => paginate(1)}
                    disabled={isAnimating}
                    className={`absolute right-4 z-30 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/30 transition-all md:opacity-0 md:group-hover:opacity-100 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Content */}
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary-light font-medium text-sm mb-6 animate-fade-in">
                        Depuis 2011
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        L'Égalité des Chances <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">en Action</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Association étudiante de KEDGE Business School Marseille œuvrant pour l'accès à l'éducation et la réussite pour tous.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/projets"
                            className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                        >
                            Découvrir nos projets
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                            Nous rejoindre
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "300+", label: "Jeunes accompagnés" },
                            { number: "150", label: "Étudiants bénévoles" },
                            { number: "9", label: "Projets actifs" },
                            { number: "2011", label: "Date de création" },
                        ].map((stat, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">{stat.number}</div>
                                <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Missions Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Missions</h2>
                        <p className="text-gray-600">
                            Nous intervenons auprès des jeunes des quartiers prioritaires de Marseille à travers trois axes fondamentaux.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <MissionCard
                            icon={<BookOpen size={32} />}
                            title="Tutorat Académique"
                            description="Aide aux devoirs et soutien scolaire hebdomadaire pour renforcer les acquis et la confiance en soi."
                        />
                        <MissionCard
                            icon={<Globe size={32} />}
                            title="Ouverture Culturelle"
                            description="Sorties, voyages et ateliers pour éveiller la curiosité et découvrir de nouveaux horizons."
                        />
                        <MissionCard
                            icon={<GraduationCap size={32} />}
                            title="Orientation"
                            description="Accompagnement dans le choix des études et découverte du monde professionnel."
                        />
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Ils nous soutiennent</h2>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-12 opacity-80">
                        <img src="/partners/om.png" alt="Olympique de Marseille" className="h-20 md:h-24 hover:scale-110 transition-all duration-300 object-contain" />
                        <img src="/partners/decathlon.png" alt="Decathlon" className="h-24 md:h-32 hover:scale-110 transition-all duration-300 object-contain" />
                        <img src="/partners/deloitte.jpg" alt="Deloitte" className="h-10 md:h-12 hover:scale-110 transition-all duration-300 object-contain mix-blend-multiply" />
                        <img src="/partners/apprentis-auteuil.jpg" alt="Apprentis d'Auteuil" className="h-16 md:h-20 hover:scale-110 transition-all duration-300 object-contain mix-blend-multiply" />
                        <img src="/partners/lydia.png" alt="Lydia" className="h-10 md:h-12 hover:scale-110 transition-all duration-300 object-contain" />
                        <img src="/partners/darty.png" alt="Darty" className="h-10 md:h-12 hover:scale-110 transition-all duration-300 object-contain" />
                        <img src="https://logo.clearbit.com/kedge.edu" alt="Kedge Business School" className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 object-contain" />
                    </div>

                    <Link to="/partenaires" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                        Voir tous nos partenaires
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
