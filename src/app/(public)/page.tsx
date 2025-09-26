import React from 'react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenue sur MonSite
      </h1>
      <div className="prose prose-lg mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Un site moderne créé avec Next.js et Tailwind CSS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">À propos</h2>
            <p className="text-gray-600">
              Découvrez notre histoire et notre mission.
            </p>
            <a
              href="/about"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              En savoir plus →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Nous contacter →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 