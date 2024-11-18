import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Users,
  Trophy,
  Home,
  HelpCircle,
  Mail,
  User,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  BookOpen,
  LifeBuoy,
  FileQuestion,
  MessageCircle,
  Newspaper,
  Calendar,
} from 'lucide-react';
import Logo from './Logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/competitions', icon: Trophy, label: 'Competitions' },
    { path: '/teams', icon: Users, label: 'Teams' },
    { path: '/how-it-works', icon: HelpCircle, label: 'How It Works' },
    { path: '/contact', icon: Mail, label: 'Contact Us' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const footerLinks = {
    resources: [
      { label: 'Documentation', icon: BookOpen, path: '/docs' },
      { label: 'Help Center', icon: LifeBuoy, path: '/help' },
      { label: 'FAQs', icon: FileQuestion, path: '/faqs' },
      { label: 'Blog', icon: Newspaper, path: '/blog' },
    ],
    community: [
      { label: 'Forums', icon: MessageCircle, path: '/forums' },
      { label: 'Discord', icon: MessageCircle, path: '/discord' },
      { label: 'Events', icon: Calendar, path: '/events' },
    ],
    social: [
      { label: 'GitHub', icon: Github, path: 'https://github.com' },
      { label: 'Twitter', icon: Twitter, path: 'https://twitter.com' },
      { label: 'LinkedIn', icon: Linkedin, path: 'https://linkedin.com' },
      { label: 'Facebook', icon: Facebook, path: 'https://facebook.com' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <Logo showTagline={false} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActivePath(item.path)
                        ? 'text-bithra-600 bg-bithra-50'
                        : 'text-gray-700 hover:text-bithra-600 hover:bg-bithra-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-bithra-600 hover:bg-bithra-50 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActivePath(item.path)
                        ? 'text-bithra-600 bg-bithra-50'
                        : 'text-gray-700 hover:text-bithra-600 hover:bg-bithra-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white mt-auto border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand and Description */}
            <div className="space-y-4">
              <Link to="/">
                <Logo showTagline={true} />
              </Link>
              <p className="text-gray-600">
                Connect, collaborate, and create amazing projects with talented individuals worldwide.
              </p>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="flex items-center text-gray-600 hover:text-bithra-600 transition-colors"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2">
                {footerLinks.community.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="flex items-center text-gray-600 hover:text-bithra-600 transition-colors"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {footerLinks.social.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-bithra-100 hover:text-bithra-600 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Bithra. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-500 hover:text-bithra-600">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-bithra-600">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-500 hover:text-bithra-600">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}