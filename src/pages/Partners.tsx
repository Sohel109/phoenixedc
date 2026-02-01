import { motion } from 'framer-motion';
import { partnerCategories } from '../data/partners';
import { ArrowRight, Handshake } from 'lucide-react';

export function Partners() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nos Partenaires
                    </h1>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="prose prose-lg max-w-none space-y-12">
                    {partnerCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                                {category.title}
                            </h2>

                            {category.subcategories ? (
                                <div className="space-y-6">
                                    {category.subcategories.map((sub, subIndex) => (
                                        <div key={subIndex} className="pl-4 border-l-2 border-primary/20">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{sub.name} :</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                {sub.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {category.items?.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-secondary text-white p-8 rounded-3xl shadow-xl"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                            <Handshake className="text-primary" />
                            Devenir Partenaire ?
                        </h3>
                        <p className="text-gray-300">Rejoignez l'aventure Phoenix et soutenez l'égalité des chances.</p>
                    </div>
                    <a
                        href="/contact"
                        className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center gap-2"
                    >
                        Nous contacter
                        <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
