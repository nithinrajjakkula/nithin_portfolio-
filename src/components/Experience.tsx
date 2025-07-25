import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Salesforce Developer Internship',
      company: 'Salesforce',
      duration: '8 weeks',
      location: 'Remote',
      description: 'Comprehensive training in Salesforce development and administration',
      achievements: [
        'Org Setup and Configuration',
        'Process Automation with Flows',
        'Lightning Web Components (LWC)',
        'Trailhead Modules Completion',
        'Apex Programming',
        'SOQL and SOSL Queries'
      ],
      skills: ['Salesforce', 'Apex', 'LWC', 'Flows', 'SOQL'],
      icon: '☁️'
    },
    {
      title: 'Web Development Intern',
      company: 'Internpe',
      duration: '2 months',
      location: 'Remote',
      description: 'Developed responsive web applications and gained hands-on experience in full-stack development',
      achievements: [
        'Built complete e-commerce website',
        'Implemented responsive design principles',
        'Debugging and performance optimization',
        'Cross-browser compatibility testing',
        'Code review and version control',
        'Client interaction and requirement gathering'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'],
      icon: '🌐'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Professional journey and internship experiences.
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl mr-3 sm:mr-4">{exp.icon}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm sm:text-base">{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm sm:text-base">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 4).map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;