"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowIcon from '@/assest/Icons/ArrowIcon';

const slugify = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
};

function ProjectCard({ project, index }) {
    if (!project) return null;

    const projectSlug = project.slug || slugify(project.title);
    
    // Extract color from bg class (e.g., "bg-[#4f46e5]" -> "#4f46e5")
    const bgColor = project.bg?.match(/#[0-9a-fA-F]{6}/)?.[0] || '#1f2937';
    const textColor = project.color?.match(/#[0-9a-fA-F]{6}/)?.[0] || '#ffffff';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index || 0) * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer w-full"
        >
            <Link href={`/project/${projectSlug}`}>
                <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 h-full backdrop-blur-sm"
                    style={{
                        background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)`,
                        border: `1px solid ${bgColor}40`
                    }}
                >
                    {/* Gradient overlay for depth */}
                    <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: `linear-gradient(135deg, transparent 0%, ${bgColor}80 100%)`
                        }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-20 p-8 md:p-12">
                        <div className="mb-6">
                            <span 
                                className="text-sm font-medium px-3 py-1 rounded-full inline-block"
                                style={{
                                    backgroundColor: `${textColor}20`,
                                    color: textColor
                                }}
                            >
                                {project.time || '2024'}
                            </span>
                        </div>
                        
                        <h3 
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-300"
                            style={{ color: textColor }}
                        >
                            {project.title}
                        </h3>
                        
                        <p 
                            className="text-lg md:text-xl mb-6 font-medium"
                            style={{ color: `${textColor}dd` }}
                        >
                            {project.Subtitle || (project.description ? project.description.substring(0, 120) + '...' : '')}
                        </p>
                        
                        {project.description && (
                            <p 
                                className="text-base mb-8 line-clamp-3 leading-relaxed"
                                style={{ color: `${textColor}aa` }}
                            >
                                {project.description}
                            </p>
                        )}
                        
                        {project.techStack && project.techStack.length > 0 && (
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.techStack.slice(0, 5).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: `${textColor}15`,
                                            color: textColor,
                                            border: `1px solid ${textColor}30`
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        <div 
                            className="flex items-center gap-3 transition-all duration-300 group-hover:gap-4"
                            style={{ color: textColor }}
                        >
                            <span className="text-base font-semibold">View Project</span>
                            <motion.div
                                className="w-5 h-5"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                                style={{ color: textColor }}
                            >
                                <ArrowIcon />
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(circle at center, ${textColor} 0%, transparent 70%)`
                        }}
                    />
                </div>
            </Link>
        </motion.div>
    );
}

export default ProjectCard;

