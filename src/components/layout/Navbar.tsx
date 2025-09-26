'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  variant?: 'public' | 'admin';
}

export default function Navbar({ variant = 'public' }: NavbarProps) {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  const publicLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  const adminLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/', label: 'Retour au site' },
  ];

  const links = variant === 'public' ? publicLinks : adminLinks;
  const bgColor = variant === 'public' ? 'bg-blue-600' : 'bg-gray-800';
  const textColor = 'text-white';

  return (
    <nav className={`${bgColor} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className={`${textColor} font-bold text-xl`}>
                {variant === 'public' ? 'MonSite' : 'Admin Panel'}
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${textColor} px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive(link.href) 
                    ? 'bg-opacity-20 bg-white' 
                    : 'hover:bg-opacity-10 hover:bg-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 