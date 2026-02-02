
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 uppercase tracking-wider relative inline-block text-gray-900 dark:text-white">
                        Nos Projets
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full"></span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="relative pt-10 group">
                            {/* Logo / Icon Area */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-24 h-24 bg-white dark:bg-current-card rounded-full shadow-lg flex items-center justify-center p-2 group-hover:-translate-y-2 transition-transform duration-300 border-4 border-white dark:border-current-bg overflow-hidden">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                                ) : (
                                    <project.icon size={40} className="text-gray-700 dark:text-white" />
                                )}
                            </div>

                            {/* Card Body */}
                            <div className={`${project.color} pt-12 pb-6 px-8 rounded-xl min-h-[280px] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow relative dark:brightness-90 dark:shadow-none`}>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-900 mb-4 mt-2">{project.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-800 leading-relaxed mb-8 flex-grow font-medium">
                                    {project.description}
                                </p>

                                {/* Button */}
                                <Link
                                    to={`/projets/${project.id}`}
                                    className="absolute bottom-6 right-6 px-6 py-2 bg-indigo-500/10 text-indigo-900 dark:text-indigo-900 font-semibold rounded-full text-sm hover:bg-indigo-500/20 transition-colors"
                                >
                                    Plus
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
