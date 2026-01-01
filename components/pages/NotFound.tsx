'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-yellow-400 mb-4">404</h1>
          <h2 className="text-5xl font-black text-white mb-4">
            Page Not <span className="text-yellow-400">Found</span>
          </h2>
        </div>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <Link href="/">
          <button className="btn-primary inline-flex items-center gap-2 text-lg">
            <ArrowLeft size={24} />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

