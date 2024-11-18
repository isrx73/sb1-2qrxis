import React, { useState } from 'react';
import { Users2, Search, Plus, X } from 'lucide-react';
import JoinRequestPopup from '../components/JoinRequestPopup';
import Toast from '../components/Toast';
import TeamDetailsModal from '../components/TeamDetailsModal';

interface Team {
  id: string;
  name: string;
  description: string;
  members: number;
  maxMembers: number;
  skills: string[];
  category: 'competitions' | 'startups' | 'general';
  competition?: string;
  objectives?: string[];
  focusAreas?: string[];
}

export default function Teams() {
  const [view, setView] = useState<'join' | 'create'>('join');
  const [category, setCategory] = useState<'all' | 'competitions' | 'startups' | 'general'>('all');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [joinRequestTeam, setJoinRequestTeam] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const teams: Team[] = [
    {
      id: '1',
      name: 'Innovation Squad',
      description: 'Looking for creative developers to join our Web Innovation Challenge team.',
      members: 2,
      maxMembers: 4,
      skills: ['React', 'Node.js', 'UI/UX'],
      category: 'competitions',
      competition: 'Web Innovation Challenge',
      objectives: ['Win the hackathon', 'Build innovative web solution', 'Learn new technologies'],
      focusAreas: ['Web Development', 'User Experience', 'Innovation']
    },
    {
      id: '2',
      name: 'Tech Startup Team',
      description: 'Building the next big SaaS platform. Looking for passionate developers.',
      members: 3,
      maxMembers: 5,
      skills: ['Full Stack', 'DevOps', 'Marketing'],
      category: 'startups',
      objectives: ['Launch MVP', 'Secure funding', 'Build user base'],
      focusAreas: ['SaaS', 'B2B Solutions', 'Scale']
    },
    {
      id: '3',
      name: 'Open Source Contributors',
      description: 'Contributing to various open source projects. All skill levels welcome.',
      members: 4,
      maxMembers: 8,
      skills: ['Any Language', 'Git', 'Documentation'],
      category: 'general',
      objectives: ['Contribute to OSS', 'Learn from community', 'Build portfolio'],
      focusAreas: ['Open Source', 'Community', 'Learning']
    },
    {
      id: '4',
      name: 'AI Solutions Team',
      description: 'Developing cutting-edge AI solutions for the upcoming hackathon.',
      members: 2,
      maxMembers: 5,
      skills: ['Python', 'Machine Learning', 'Data Science'],
      category: 'competitions',
      competition: 'AI Solutions Hackathon',
      objectives: ['Develop AI model', 'Create user interface', 'Win competition'],
      focusAreas: ['Artificial Intelligence', 'Machine Learning', 'Data Analysis']
    },
    {
      id: '5',
      name: 'FinTech Innovators',
      description: 'Creating the future of financial technology.',
      members: 3,
      maxMembers: 6,
      skills: ['Blockchain', 'Smart Contracts', 'Finance'],
      category: 'startups',
      objectives: ['Develop DeFi platform', 'Secure investments', 'Launch beta'],
      focusAreas: ['Financial Technology', 'Blockchain', 'Security']
    },
    {
      id: '6',
      name: 'Mobile Game Studio',
      description: 'Indie game developers creating unique mobile experiences.',
      members: 2,
      maxMembers: 4,
      skills: ['Unity', 'Game Design', '3D Modeling'],
      category: 'startups',
      objectives: ['Create mobile game', 'Build player base', 'Monetize'],
      focusAreas: ['Game Development', 'Mobile Gaming', 'User Experience']
    }
  ];

  const handleJoinTeam = (teamName: string) => {
    setJoinRequestTeam(teamName);
    setToast({
      message: 'Request sent successfully!',
      type: 'success'
    });
  };

  const handleCreateTeam = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({
      message: 'Team created successfully!',
      type: 'success'
    });
    setView('join');
  };

  const filteredTeams = teams.filter(team => 
    category === 'all' ? true : team.category === category
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Users2 className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold">Teams</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView('join')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === 'join'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            Join a Team
          </button>
          <button
            onClick={() => setView('create')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === 'create'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            Create Team
          </button>
        </div>
      </div>

      {view === 'join' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search teams..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex gap-2">
              {(['all', 'competitions', 'startups', 'general'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {cat === 'all' ? 'All Teams' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTeams.map((team) => (
              <div
                key={team.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{team.name}</h3>
                    {team.competition && (
                      <p className="text-sm text-gray-600">{team.competition}</p>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users2 className="w-4 h-4 mr-1" />
                    <span>{team.members}/{team.maxMembers}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{team.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedTeam(team)}
                    className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleJoinTeam(team.name)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Request to Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'create' && (
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleCreateTeam} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Category
                </label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="competitions">Competitions</option>
                  <option value="startups">Startups</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div>
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Team Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                  Required Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  placeholder="e.g., React, Python, Machine Learning"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Team Size
                </label>
                <input
                  type="number"
                  id="maxMembers"
                  min="2"
                  max="10"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create Team</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {joinRequestTeam && (
        <JoinRequestPopup
          teamName={joinRequestTeam}
          onClose={() => setJoinRequestTeam(null)}
        />
      )}

      {selectedTeam && (
        <TeamDetailsModal
          team={selectedTeam}
          onClose={() => setSelectedTeam(null)}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}