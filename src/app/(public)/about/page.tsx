import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        À propos de nous
      </h1>
      <div className="prose prose-lg mx-auto">
        <p className="text-gray-600 mb-6">
          Bienvenue sur notre site ! Nous sommes une équipe passionnée par la création
          de solutions web modernes et performantes.
        </p>
        <p className="text-gray-600 mb-6">
          Ce projet a été créé dans le cadre d'un exercice d'apprentissage de Next.js
          et Tailwind CSS, démontrant les bonnes pratiques de développement web
          moderne.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
          <p className="text-gray-600">
            Notre mission est de créer des expériences web exceptionnelles en utilisant
            les technologies les plus modernes et les meilleures pratiques de
            développement.
          </p>
        </div>
      </div>
    </div>
  );
} 