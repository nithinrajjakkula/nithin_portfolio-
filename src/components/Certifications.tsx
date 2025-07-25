import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const certifications = [
    {
      title: 'NPTEL Certifications',
      provider: 'IIT/IISc',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
      courses: [
        {
          name: 'Programming in Java',
          description: 'Comprehensive Java programming course covering OOP concepts, data structures, and advanced programming techniques.',
          skills: ['Java', 'OOP', 'Data Structures', 'Algorithms']
        },
        {
          name: 'Data Analytics Using Python',
          description: 'Data analysis and visualization using Python libraries like Pandas, NumPy, and Matplotlib.',
          skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis']
        }
      ]
    },
    {
      title: 'Coursera Certifications',
      provider: 'University of Michigan',
      icon: '📚',
      color: 'from-green-500 to-emerald-500',
      courses: [
        {
          name: 'Python Data Structures',
          description: 'Advanced Python programming focusing on data structures and their applications.',
          skills: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving']
        },
        {
          name: 'Java for Beginners',
          description: 'Foundation course in Java programming language and object-oriented programming.',
          skills: ['Java', 'OOP', 'Programming Fundamentals']
        }
      ]
    },
    {
      title: 'Great Learning',
      provider: 'Great Learning',
      icon: '☁️',
      color: 'from-purple-500 to-pink-500',
      courses: [
        {
          name: 'Cloud Computing',
          description: 'Comprehensive course on cloud technologies, AWS services, and cloud architecture.',
          skills: ['Cloud Computing', 'AWS', 'Cloud Architecture', 'DevOps']
        }
      ]
    },
    {
      title: 'HackerRank',
      provider: 'HackerRank',
      icon: '💻',
      color: 'from-orange-500 to-red-500',
      courses: [
        {
          name: 'SQL (Basic)',
          description: 'Database fundamentals and SQL query optimization techniques.',
          skills: ['SQL', 'Database', 'Query Optimization', 'RDBMS']
        }
      ]
    },
    {
      title: 'Accenture UK Simulation',
      provider: 'Accenture (Forge)',
      icon: '🔧',
      color: 'from-teal-500 to-blue-500',
      courses: [
        {
          name: 'Technology Consulting Simulation',
          description: 'Real-world consulting experience with technology solutions and client interaction.',
          skills: ['Consulting', 'Technology Solutions', 'Client Management', 'Problem Solving']
        }
      ]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Industry-recognized certifications and professional development.
          </p>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
            >
              <div
                className="p-4 sm:p-6 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-xl sm:text-2xl`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    {expandedCard === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </div>

              {expandedCard === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-6">
                      {cert.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {course.name}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3">
                            {course.description}
                          </p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {course.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;