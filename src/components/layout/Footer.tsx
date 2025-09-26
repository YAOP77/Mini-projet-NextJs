'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  variant?: 'public' | 'admin';
}

export default function Footer({ variant = 'public' }: FooterProps) {
  const bgColor = variant === 'public' ? 'bg-blue-600' : 'bg-gray-800';
  const textColor = 'text-white';

  return (
    <footer className={`${bgColor} mt-auto`}>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <Link href="/" className={`${textColor} hover:text-gray-200`}>
              Accueil
            </Link>
            <Link href="/about" className={`${textColor} hover:text-gray-200`}>
              À propos
            </Link>
            <Link href="/contact" className={`${textColor} hover:text-gray-200`}>
              Contact
            </Link>
          </div>
          <p className={`${textColor} text-sm`}>
            © {new Date().getFullYear()} {variant === 'public' ? 'MonSite' : 'Admin Panel'}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 