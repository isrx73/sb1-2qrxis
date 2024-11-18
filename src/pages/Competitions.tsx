import React, { useState, useEffect } from 'react';
import { Calendar, Trophy, Users2, ExternalLink, BookmarkPlus, Share2, TrendingUp, Star } from 'lucide-react';
import CompetitionDetailsModal from '../components/CompetitionDetailsModal';
import { motion } from 'framer-motion';
import { competitions } from '../data/competitions';
import type { Competition } from '../types/competition';

export default function Competitions() {
  const [filter, setFilter] = useState<'all' | 'open' | 'closing-soon'>('all');
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [bookmarkedCompetitions, setBookmarkedCompetitions] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Calculate days remaining until deadline
  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleBookmark = (competitionId: string) => {
    setBookmarkedCompetitions(prev => {
      const newBookmarks = prev.includes(competitionId)
        ? prev.filter(id => id !== competitionId)
        : [...prev, competitionId];
      
      setToastMessage(prev.includes(competitionId)
        ? 'Competition removed from bookmarks'
        : 'Competition bookmarked successfully');
      setShowToast(true);
      
      return newBookmarks;
    });
  };

  const handleShare = async (competition: Competition) => {
    try {
      await navigator.share({
        title: competition.title,
        text: competition.description,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const filteredCompetitions = competitions.filter(comp => 
    filter === 'all' ? true : comp.status === filter
  );

  return (
    <div className="space-y-8">
      {/* Header and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Competitions</h1>
        <div className="flex gap-2">
          {(['all', 'open', 'closing-soon'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-bithra-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-bithra-50'
              }`}
            >
              {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Competition Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCompetitions.map((competition) => (
          <motion.div
            key={competition.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video relative group">
              <img
                src={competition.image}
                alt={competition.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60" />
              
              {/* Status and Badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    competition.status === 'open'
                      ? 'bg-bithra-100 text-bithra-800'
                      : competition.status === 'closing-soon'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {competition.status === 'closing-soon'
                    ? 'Closing Soon'
                    : competition.status.charAt(0).toUpperCase() + competition.status.slice(1)}
                </span>
                {competition.isNew && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    New
                  </span>
                )}
              </div>

              {/* Difficulty Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  competition.difficulty === 'Beginner'
                    ? 'bg-green-100 text-green-800'
                    : competition.difficulty === 'Intermediate'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {competition.difficulty}
                </span>
              </div>

              {/* Time Remaining */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {getDaysRemaining(competition.deadline)} days remaining
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleBookmark(competition.id)}
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <BookmarkPlus className={`w-4 h-4 ${
                        bookmarkedCompetitions.includes(competition.id)
                          ? 'text-yellow-400'
                          : 'text-white'
                      }`} />
                    </button>
                    <button
                      onClick={() => handleShare(competition)}
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">{competition.title}</h3>
                {competition.isTrending && (
                  <div className="flex items-center text-orange-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">Trending</span>

                  </div>
                )}
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{competition.description}</p>

              {/* Required Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {competition.skillsRequired.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-bithra-600" />
                  <span>Deadline: {competition.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-bithra-600" />
                  <span>Prize Pool: {competition.prize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-bithra-600" />
                  <span>{competition.participants} participants</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCompetition(competition)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-bithra-600 text-white rounded-lg hover:bg-bithra-700 transition-colors"
              >
                <span>View Details</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCompetition && (
        <CompetitionDetailsModal
          competition={selectedCompetition}
          onClose={() => setSelectedCompetition(null)}
        />
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}