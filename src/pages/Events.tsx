import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { events } from '../data/events';
import { Link } from 'react-router-dom';

export function Events() {
    const containerRef = useRef<HTMLDivElement>(null);
    useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="min-h-screen bg-gray-50 dark:bg-current-bg overflow-hidden relative transition-colors duration-300">

            {/* Abstract Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50 dark:opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6 tracking-tight"
                    >
                        Nos Événements
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light"
                    >
                        Découvrez les temps forts qui rythment la vie de l'association et de nos bénéficiaires.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function EventCard({ event, index }: { event: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-current-card dark:to-current-card/50 backdrop-blur-lg rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-xl dark:shadow-none transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]" />

            <div className="relative p-4 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 shadow-sm">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Floating Date Badge */}
                    <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-gray-800 dark:text-white border border-white/40 dark:border-white/10 shadow-sm flex items-center gap-2">
                        <Calendar size={14} className="text-primary" />
                        {event.date}
                    </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
                        {event.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-8 flex-grow">
                        {event.description}
                    </p>

                    <Link
                        to={`/evenements/${event.id}`}
                        className={`w-full py-4 rounded-xl bg-gradient-to-r ${event.color} text-gray-800 dark:text-white font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn relative overflow-hidden`}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            En savoir plus
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/50 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
