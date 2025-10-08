import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, Code, Users, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = ['C', 'C++', 'Java'];
  
  const sections = {
    about: {
      title: 'About Me',
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold text-blue-600">D. Pragadeesh</span>, a passionate Computer Science and Engineering student currently in my third year at the prestigious Madras Institute of Technology.
          </p>
          <p className="text-lg leading-relaxed">
            From Ariyalur, I'm dedicated to continuous learning and making a positive impact through technology and community service.
          </p>
        </div>
      )
    },
    education: {
      title: 'Education',
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Madras Institute of Technology</h3>
          <p className="text-lg text-gray-700 mb-1">Bachelor of Engineering - Computer Science and Engineering</p>
          <p className="text-gray-600">Third Year | Currently Pursuing</p>
        </div>
      )
    },
    skills: {
      title: 'Technical Skills',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center border border-purple-100 transform hover:scale-105 transition-transform duration-200">
              <Code className="w-12 h-12 mx-auto mb-3 text-purple-600" />
              <h4 className="text-xl font-bold text-gray-800">{skill}</h4>
            </div>
          ))}
        </div>
      )
    },
    interests: {
      title: 'Interests & Activities',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div className="text-4xl mb-3">♟️</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Chess Enthusiast</h4>
            <p className="text-gray-700">I enjoy playing chess, which helps sharpen my strategic thinking and problem-solving abilities.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
            <Users className="w-10 h-10 mb-3 text-amber-600" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">NSS Volunteer</h4>
            <p className="text-gray-700">Active member of the National Service Scheme, committed to social service and community development.</p>
          </div>
        </div>
      )
    },
    achievements: {
      title: 'Achievements',
      content: (
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8 border border-yellow-200 text-center">
          <Award className="w-16 h-16 mx-auto mb-4 text-yellow-600" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Best NSS Volunteer Award</h3>
          <p className="text-lg text-gray-700">Recognized for outstanding dedication and contribution to community service initiatives.</p>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            D. Pragadeesh
          </h1>
          <p className="text-gray-600 mt-1">Computer Science Engineering Student | MIT</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="flex flex-wrap gap-3 mb-12 justify-center">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {sections[section].title}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 min-h-[300px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 inline-block pb-2">
            {sections[activeSection].title}
          </h2>
          <div className="mt-6">
            {sections[activeSection].content}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <div className="overflow-hidden">
                <p className="text-sm opacity-90">Email</p>
                <a href="mailto:pragadeesh590@gmail.com" className="font-semibold hover:underline text-sm break-all">
                  pragadeesh590@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Phone</p>
                <a href="tel:8072275990" className="font-semibold hover:underline">
                  8072275990
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Location</p>
                <p className="font-semibold">Ariyalur</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 D. Pragadeesh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}