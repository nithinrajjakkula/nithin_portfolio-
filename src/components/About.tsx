import React from 'react';
import { motion } from 'framer-motion';
import NithinPic from '../assets/NITHINPIC.jpg'; // adjust the extension if it's .png

import {
  GraduationCap,
  MapPin,
  User,
  BookOpen,
  Landmark,
  CalendarDays,
  PercentCircle,
} from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Malla Reddy University, Hyderabad',
      grade: 'CGPA: 8.68',
      year: '2021 - 2025',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      grade: '74%',
      year: '2019 - 2021',
    },
    {
      degree: 'Secondary School (SSC)',
      institution: 'Vijaya High School',
      grade: 'CGPA: 9.2',
      year: '2009 - 2018',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Detail-oriented IT professional with strong fundamentals in computer science and a passion for building scalable, user-friendly applications.
          </p>
        </motion.div>

        {/* Profile Section with Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-center gap-8">
            {/* Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
             <img
  src={NithinPic} // ✅ Use the imported image
  alt="Nithin Raj"
  className="rounded-2xl w-64 h-64 object-cover shadow-md"
/>

            </div>

            {/* About Content */}
            <div className="w-full lg:w-2/3">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h3>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                  <span>Hyderabad, India</span>
                </div>
                <p>
                  I specialize in full-stack development with exposure to cloud platforms and machine learning. Known for quick learning and building smart, clean code.
                </p>
                <p>
                  Passionate about contributing to open-source, participating in hackathons, and continuously upskilling through project-based learning.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="relative pl-4 sm:pl-0">
              <div className="border-l-2 border-blue-600 absolute h-full left-5 sm:left-1/2 transform sm:-translate-x-1/2"></div>
              <div className="space-y-12">
                {education.map((edu, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative w-full flex ${isLeft ? 'justify-start' : 'justify-end'} sm:pr-8 sm:pl-8`}
                    >
                      <div className="w-full sm:w-1/2">
                        <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl p-4 sm:p-5 shadow-md">
                          <div className="absolute w-4 h-4 bg-blue-600 border-4 border-white dark:border-gray-900 rounded-full -top-2 left-5 sm:left-1/2 transform sm:-translate-x-1/2" />
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <BookOpen className="w-4 h-4 text-blue-500 mr-2" />
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                            </div>
                            <div className="flex items-center">
                              <Landmark className="w-4 h-4 text-purple-500 mr-2" />
                              <p className="text-sm text-gray-600 dark:text-gray-300">{edu.institution}</p>
                            </div>
                            <div className="flex items-center">
                              <PercentCircle className="w-4 h-4 text-green-500 mr-2" />
                              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{edu.grade}</p>
                            </div>
                            <div className="flex items-center">
                              <CalendarDays className="w-4 h-4 text-gray-400 mr-2" />
                              <p className="text-xs text-gray-500 dark:text-gray-400">{edu.year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
