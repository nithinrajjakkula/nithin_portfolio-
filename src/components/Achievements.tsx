import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Digital Forensics Hackathon',
      organization: 'Supraja Technologies',
      achievement: 'Top Performer',
      description:
        'Demonstrated exceptional skills in digital forensics and cybersecurity analysis during this intensive hackathon.',
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      gradient: 'from-yellow-400 to-orange-500',
      date: '2024',
      skills: ['Digital Forensics', 'Cybersecurity', 'Problem Solving', 'Analysis'],
    },
    {
      title: 'Dataiku Quiz Competition',
      organization: 'Dataiku',
      achievement: '3rd Place',
      description:
        'Secured third position in a competitive data science and analytics quiz, showcasing strong analytical and data science fundamentals.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      gradient: 'from-blue-400 to-purple-500',
      date: '2024',
      skills: ['Data Science', 'Analytics', 'Machine Learning', 'Statistics'],
    },
    {
      title: 'Academic Excellence',
      organization: 'Malla Reddy University',
      achievement: 'CGPA 8.68',
      description:
        'Maintained consistent academic performance throughout BTech program in Computer Science.',
      icon: <Star className="w-8 h-8 text-green-500" />,
      gradient: 'from-green-400 to-teal-500',
      date: '2020–2024',
      skills: ['Computer Science', 'Programming', 'Software Engineering', 'Data Structures'],
    },
    {
      title: 'Multiple Certifications',
      organization: 'Various Platforms',
      achievement: '10+ Certifications',
      description:
        'Completed numerous professional certifications across different platforms including NPTEL, Coursera, and industry-specific programs.',
      icon: <Target className="w-8 h-8 text-purple-500" />,
      gradient: 'from-purple-400 to-pink-500',
      date: '2020–2024',
      skills: ['Continuous Learning', 'Professional Development', 'Skill Enhancement'],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            🏆 Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A snapshot of recognitions and milestones on my learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`}
              />
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${item.gradient} bg-opacity-20`}>
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.organization}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {item.achievement}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
