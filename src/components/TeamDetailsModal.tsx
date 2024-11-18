import React from 'react';
import { X, Users, Target, Crosshair } from 'lucide-react';

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

interface TeamDetailsModalProps {
  team: Team;
  onClose: () => void;
}

export default function TeamDetailsModal({ team, onClose }: TeamDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">{team.name}</h2>
              {team.competition && (
                <p className="text-gray-600">{team.competition}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-600">{team.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Team Composition</h3>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>{team.members} members out of {team.maxMembers} maximum</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {team.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {team.objectives && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Objectives</h3>
                <ul className="space-y-2">
                  {team.objectives.map((objective, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-600" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {team.focusAreas && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
                <ul className="space-y-2">
                  {team.focusAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Crosshair className="w-5 h-5 text-green-600" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}