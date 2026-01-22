import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Flame, Shield, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FireGuard',
      description: 'Advanced fire detection system with 97% accuracy using Convolutional Neural Networks',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Python'],
      icon: <Flame className="w-8 h-8 text-red-500" />,
      gradient: 'from-red-500 to-orange-500',
      features: [
        'Real-time fire detection',
        '97% accuracy rate',
        'CNN-based architecture',
        'Computer vision integration'
      ]
    },
    {
      title: 'Secure Password Recovery',
      description: 'Robust password recovery system for online book platform using advanced security techniques',
      technologies: ['Python', 'HTML', 'CSS', 'Rainbow Tables'],
      icon: <Shield className="w-8 h-8 text-green-500" />,
      gradient: 'from-green-500 to-teal-500',
      features: [
        'Rainbow table implementation',
        'Secure authentication',
        'User-friendly interface',
        'Book platform integration'
      ]
    },
    {
      title: 'E-commerce Website',
      description: 'Fully responsive e-commerce platform developed during Internpe internship',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
      gradient: 'from-blue-500 to-purple-500',
      features: [
        'Responsive design',
        'Product catalog',
        'Shopping cart functionality',
        'Modern UI/UX'
      ]
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Notable projects showcasing technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-5">
                  <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4 hidden sm:block">
                  <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                  <motion.button 
                    className="flex items-center justify-center px-4 sm:px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.button>
                  <motion.button 
                    className="flex items-center justify-center px-4 sm:px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg flex-1 sm:flex-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;