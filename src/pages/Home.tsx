import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Star, ArrowRight, Calendar } from 'lucide-react';
import { competitions } from '../data/competitions';

export default function Home() {
  const features = [
    {
      icon: Trophy,
      title: 'Join Competitions',
      description:
        'Participate in exciting competitions and showcase your skills to the world.',
    },
    {
      icon: Users,
      title: 'Build Teams',
      description:
        'Connect with like-minded individuals and form powerful teams for projects.',
    },
    {
      icon: Star,
      title: 'Grow Together',
      description:
        'Learn from peers, share knowledge, and advance your career through collaboration.',
    },
  ];

  // Select featured competitions (NEOM, Vision 2030 AI, and FinTech)
  const featuredCompetitions = [competitions[0], competitions[2], competitions[6]];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bithra-600 to-bithra-800 rounded-3xl opacity-90">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="relative px-8 py-24 sm:px-16 rounded-3xl bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6 leading-tight">
              Connect, Collaborate, and
              <span className="bg-gradient-to-r from-bithra-200 to-white bg-clip-text text-transparent"> Create Together</span>
            </h1>
            <p className="text-lg mb-8 text-bithra-100">
              Join Bithra to find your perfect team, participate in exciting
              competitions, and build amazing projects together.
            </p>
            <div className="space-x-4">
              <Link
                to="/teams"
                className="inline-flex items-center px-6 py-3 bg-white text-bithra-600 font-semibold rounded-lg hover:bg-bithra-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Find a Team
                <Users className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/competitions"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-bithra-600 to-bithra-500 text-white font-semibold rounded-lg hover:from-bithra-500 hover:to-bithra-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Browse Competitions
                <Trophy className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bithra-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-bithra-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-bithra-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Competitions */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Competitions</h2>
          <Link
            to="/competitions"
            className="flex items-center text-bithra-600 hover:text-bithra-700 font-medium transition-colors"
          >
            View All
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCompetitions.map((competition) => (
            <Link
              key={competition.id}
              to="/competitions"
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video relative">
                <img
                  src={competition.image}
                  alt={competition.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-bithra-200 transition-colors">
                    {competition.title}
                  </h3>
                  <p className="text-sm text-bithra-100 line-clamp-2">
                    {competition.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span className="font-medium text-bithra-600">
                      Prize: {competition.prize}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{competition.deadline}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}