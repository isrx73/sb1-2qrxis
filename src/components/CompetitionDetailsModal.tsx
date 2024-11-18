import React from 'react';
import { X, Calendar, Trophy, Users2, CheckCircle } from 'lucide-react';

interface Competition {
  id: string;
  title: string;
  description: string;
  deadline: string;
  prize: string;
  teamSize: string;
  image: string;
  status: 'open' | 'closing-soon' | 'closed';
  requirements: string[];
  timeline: {
    registration: string;
    start: string;
    submission: string;
    results: string;
  };
  rewards: {
    first: string;
    second: string;
    third: string;
    other?: string;
  };
}

interface CompetitionDetailsModalProps {
  competition: Competition;
  onClose: () => void;
}

export default function CompetitionDetailsModal({ competition, onClose }: CompetitionDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">{competition.title}</h2>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                  competition.status === 'open'
                    ? 'bg-green-100 text-green-800'
                    : competition.status === 'closing-soon'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {competition.status === 'closing-soon'
                  ? 'Closing Soon'
                  : competition.status.charAt(0).toUpperCase() + competition.status.slice(1)}
              </span>
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
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-600">{competition.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <ul className="space-y-2">
                {competition.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <span className="font-medium">Registration Deadline:</span>
                    <span className="ml-2 text-gray-600">{competition.timeline.registration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <span className="font-medium">Competition Start:</span>
                    <span className="ml-2 text-gray-600">{competition.timeline.start}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <span className="font-medium">Submission Deadline:</span>
                    <span className="ml-2 text-gray-600">{competition.timeline.submission}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <span className="font-medium">Results Announcement:</span>
                    <span className="ml-2 text-gray-600">{competition.timeline.results}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Rewards</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <div>
                    <span className="font-medium">1st Place:</span>
                    <span className="ml-2 text-gray-600">{competition.rewards.first}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gray-400" />
                  <div>
                    <span className="font-medium">2nd Place:</span>
                    <span className="ml-2 text-gray-600">{competition.rewards.second}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-700" />
                  <div>
                    <span className="font-medium">3rd Place:</span>
                    <span className="ml-2 text-gray-600">{competition.rewards.third}</span>
                  </div>
                </div>
                {competition.rewards.other && (
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="font-medium">Additional Rewards:</span>
                      <span className="ml-2 text-gray-600">{competition.rewards.other}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Team Requirements</h3>
              <div className="flex items-center gap-2">
                <Users2 className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Team Size: {competition.teamSize} members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}