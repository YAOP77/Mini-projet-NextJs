import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar variant="admin" />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer variant="admin" />
    </>
  );
} 