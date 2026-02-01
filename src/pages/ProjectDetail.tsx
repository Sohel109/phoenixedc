import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';

export function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="pt-32 pb-20 text-center container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Projet Introuvable</h1>
                <Link to="/projets" className="text-primary hover:underline">Retour aux projets</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <Link to="/projets" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Retour aux projets
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto">
                    {/* Header with Color */}
                    <div className={`${project.color} h-32 md:h-48 relative`}>
                        {project.image && (
                            <div className="absolute -bottom-16 left-8 md:left-12 w-32 h-32 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
                                <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                            </div>
                        )}
                        {!project.image && (
                            <div className="absolute -bottom-16 left-8 md:left-12 w-32 h-32 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center text-primary">
                                <project.icon size={48} />
                            </div>
                        )}
                    </div>

                    <div className="pt-20 px-8 md:px-12 pb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>

                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl leading-relaxed mb-8 font-light border-l-4 border-primary/30 pl-6">
                                {project.description}
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-4">À propos du projet</h3>
                            <p className="mb-4">
                                Ce projet s'inscrit dans notre mission d'égalité des chances. Nos bénévoles interviennent régulièrement pour accompagner les élèves.
                                (Contenu détaillé à venir...)
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
