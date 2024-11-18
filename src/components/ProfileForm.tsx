import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

interface ProfileFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Project {
  name: string;
  role: string;
  description: string;
  date: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
}

const skillsList = [
  // Technical Skills
  'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Ruby', 'PHP', 'Swift', 'Kotlin',
  'React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Flask', 'Spring Boot', 'Laravel',
  'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Git',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch',
  
  // AI/ML
  'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision',
  'TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Science', 'Neural Networks',
  
  // IoT & Hardware
  'IoT', 'Raspberry Pi', 'Arduino', 'Embedded Systems', 'PCB Design', 'FPGA',
  'Robotics', 'Sensor Integration', 'PLC Programming',
  
  // Industry-Specific
  'Industrial Automation', 'Smart Grid', 'SCADA Systems', 'Power Systems',
  'Renewable Energy', 'Energy Management', 'Building Automation',
  
  // Design & UI/UX
  'UI/UX Design', 'Figma', 'Adobe XD', 'Sketch', 'Responsive Design',
  'User Research', 'Wireframing', 'Prototyping',
  
  // Project Management
  'Agile', 'Scrum', 'Kanban', 'JIRA', 'Project Planning', 'Team Leadership',
  'Risk Management', 'Stakeholder Management',
  
  // Soft Skills
  'Problem Solving', 'Communication', 'Team Collaboration', 'Critical Thinking',
  'Time Management', 'Adaptability', 'Innovation', 'Mentoring'
];

export default function ProfileForm({ isOpen, onClose }: ProfileFormProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([{ name: '', role: '', description: '', date: '' }]);
  const [achievements, setAchievements] = useState<Achievement[]>([{ title: '', description: '', date: '' }]);

  if (!isOpen) return null;

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleProjectChange = (index: number, field: keyof Project, value: string) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const handleAchievementChange = (index: number, field: keyof Achievement, value: string) => {
    const newAchievements = [...achievements];
    newAchievements[index][field] = value;
    setAchievements(newAchievements);
  };

  const addProject = () => {
    setProjects([...projects, { name: '', role: '', description: '', date: '' }]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const addAchievement = () => {
    setAchievements([...achievements, { title: '', description: '', date: '' }]);
  };

  const removeAchievement = (index: number) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Create Your Profile</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="e.g., Electrical Engineer & Software Expert"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills
              </label>
              <div className="border rounded-lg p-4">
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedSkills.includes(skill)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Recent Projects
                </label>
                <button
                  type="button"
                  onClick={addProject}
                  className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700"
                >
                  <Plus className="w-4 h-4" />
                  Add Project
                </button>
              </div>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Project {index + 1}</h4>
                      {projects.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeProject(index)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Project Name"
                        value={project.name}
                        onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="text"
                        placeholder="Your Role"
                        value={project.role}
                        onChange={(e) => handleProjectChange(index, 'role', e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="date"
                        value={project.date}
                        onChange={(e) => handleProjectChange(index, 'date', e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <textarea
                        placeholder="Project Description"
                        value={project.description}
                        onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Achievements
                </label>
                <button
                  type="button"
                  onClick={addAchievement}
                  className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700"
                >
                  <Plus className="w-4 h-4" />
                  Add Achievement
                </button>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Achievement {index + 1}</h4>
                      {achievements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeAchievement(index)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Achievement Title"
                        value={achievement.title}
                        onChange={(e) => handleAchievementChange(index, 'title', e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="date"
                        value={achievement.date}
                        onChange={(e) => handleAchievementChange(index, 'date', e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <textarea
                        placeholder="Achievement Description"
                        value={achievement.description}
                        onChange={(e) => handleAchievementChange(index, 'description', e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Social Links
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="url"
                  placeholder="GitHub Profile URL"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="url"
                  placeholder="LinkedIn Profile URL"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="url"
                  placeholder="Portfolio Website URL"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="url"
                  placeholder="Other Profile URL"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}