import React from 'react';

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-4">
      <div className="text-center space-y-6">
        {/* Profile Intro */}
        <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Darwisy Ahmad Alfayyadl
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Informatics Student @ Institut Teknologi Sepuluh Nopember. Building full-stack apps and exploring robotics.
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-sm font-medium text-blue-400">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Portfolio Under Construction
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          <a href="https://github.com/dmeat-droid" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/darwisy-ahmad-alfayyadl" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </main>
  );
}