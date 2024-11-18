import React from 'react';
import { Calendar, Trophy, Users, ExternalLink } from 'lucide-react';

interface CompetitionCardProps {
  id: string;
  title: string;
  description: string;
  deadline: string;
  prize: string;
  teamSize: string;
  image: string;
  status: 'open' | 'closing-soon' | 'closed';
}

export default function CompetitionCard({
  title,
  description,
  deadline,
  prize,
  teamSize,
  image,
  status,
}: CompetitionCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              status === 'open'
                ? 'bg-green-100 text-green-800'
                : status === 'closing-soon'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {status === 'closing-soon'
              ? 'Closing Soon'
              : status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Deadline: {deadline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span>Prize Pool: {prize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Team Size: {teamSize}</span>
          </div>
        </div>

        <button className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <span>View Details</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}