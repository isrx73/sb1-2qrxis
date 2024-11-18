import React from 'react';
import { Users, MessageSquare } from 'lucide-react';

interface TeamCardProps {
  id: string;
  name: string;
  description: string;
  members: number;
  maxMembers: number;
  skills: string[];
  competition: string;
  onContact: (teamName: string) => void;
}

export default function TeamCard({
  name,
  description,
  members,
  maxMembers,
  skills,
  competition,
  onContact,
}: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{competition}</p>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span>{members}/{maxMembers}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => onContact(name)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Contact Team</span>
      </button>
    </div>
  );
}