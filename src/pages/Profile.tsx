import React from 'react';
import { Star, Award, Calendar, Mail, Github, Linkedin, Code, Cpu, Zap } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  role: string;
  date: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
}

export default function Profile() {
  const projects: Project[] = [
    {
      name: 'Smart Grid Monitoring System',
      description: 'Developed an IoT-based smart grid monitoring system using Python and Node.js',
      role: 'Lead Developer',
      date: 'Jan 2024',
    },
    {
      name: 'Industrial Automation Platform',
      description: 'Built a full-stack platform for industrial automation control using React and Node.js',
      role: 'Full Stack Developer',
      date: 'Mar 2024',
    },
    {
      name: 'Energy Management System',
      description: 'Created an AI-powered energy management system for industrial applications',
      role: 'Technical Lead',
      date: 'Feb 2024',
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Best Innovation Award',
      description: 'First place in National Engineering Innovation Competition',
      date: 'Feb 2024',
    },
    {
      title: 'Technical Excellence',
      description: 'Awarded for outstanding contributions to industrial automation',
      date: 'Mar 2024',
    },
    {
      title: 'IEEE Recognition',
      description: 'Recognized for contributions to smart grid technology',
      date: 'Jan 2024',
    }
  ];

  const skills = [
    'Electrical Engineering',
    'Python',
    'Node.js',
    'React',
    'Industrial Automation',
    'IoT',
    'Smart Grid',
    'PLC Programming',
    'SCADA Systems',
    'Power Systems',
    'Machine Learning',
    'Control Systems'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
            <Cpu className="w-8 h-8 text-green-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">Ahmed Alanazi</h1>
            <p className="text-gray-600 mb-2">Electrical Engineer & Software Expert</p>
            <p className="text-gray-600 mb-4 text-sm">
              Combining electrical engineering expertise with advanced programming skills to create innovative solutions
              for industrial and power systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-gray-600">4.9 Rating</span>
              </div>
              <a
                href="mailto:ahmed.alanazi@example.com"
                className="flex items-center text-gray-600 hover:text-green-600"
              >
                <Mail className="w-5 h-5 mr-1" />
                <span>Contact</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-green-600"
              >
                <Github className="w-5 h-5 mr-1" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-green-600"
              >
                <Linkedin className="w-5 h-5 mr-1" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">Electrical Systems</h3>
            </div>
            <p className="text-sm text-gray-600">
              Expert in power systems, industrial automation, and smart grid technologies
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">Software Development</h3>
            </div>
            <p className="text-sm text-gray-600">
              Full-stack development with focus on industrial applications
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">IoT & Automation</h3>
            </div>
            <p className="text-sm text-gray-600">
              Specialized in IoT solutions and automated control systems
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border-b last:border-b-0 pb-4 last:pb-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.role}</p>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{project.date}</span>
                </div>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="flex items-start gap-4 border-b last:border-b-0 pb-4 last:pb-0"
            >
              <div className="mt-1">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <span className="text-sm text-gray-600">{achievement.date}</span>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}