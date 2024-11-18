import React, { useState } from 'react';
import { Users2, Trophy, Rocket, MessageSquare, Target } from 'lucide-react';
import ProfileForm from '../components/ProfileForm';

export default function HowItWorks() {
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);

  const steps = [
    {
      icon: Users2,
      title: 'Create Your Profile',
      description: 'Set up a profile showcasing your skills, interests, and project preferences.',
      details: [
        'Highlight your expertise and experience',
        'Define your interests and goals',
        'Specify preferred project types',
        'Set availability and commitment level'
      ]
    },
    {
      icon: Target,
      title: 'Discover Opportunities',
      description: 'Browse and filter through various competitions, projects, and collaboration requests.',
      details: [
        'Search by project type or competition',
        'Filter based on skills required',
        'View detailed project descriptions',
        'Access competition requirements and deadlines'
      ]
    },
    {
      icon: Trophy,
      title: 'Build Your Team',
      description: 'Connect with potential teammates using our smart matching system.',
      details: [
        'Get matched based on skills and interests',
        'Review team member profiles',
        'Define team roles and responsibilities',
        'Establish project timelines'
      ]
    },
    {
      icon: Rocket,
      title: 'Collaborate & Succeed',
      description: 'Use our integrated tools to organize your project and track progress.',
      details: [
        'Access project management tools',
        'Track milestones and deadlines',
        'Communicate with team members',
        'Share resources and documents'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Showcase Achievements',
      description: 'Share your success with the community and build your reputation.',
      details: [
        'Document project outcomes',
        'Receive community feedback',
        'Build your portfolio',
        'Connect with future opportunities'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bithra is your bridge to building successful teams and innovative projects. Follow these simple steps to start your journey towards collaborative success.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-green-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Join Bithra today to make your projects a reality with a dedicated team by your side!
        </p>
        <button
          onClick={() => setIsProfileFormOpen(true)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Create Your Profile
        </button>
      </div>

      <ProfileForm
        isOpen={isProfileFormOpen}
        onClose={() => setIsProfileFormOpen(false)}
      />
    </div>
  );
}