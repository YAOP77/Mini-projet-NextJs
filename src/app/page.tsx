import { Suspense } from 'react';
import { getPopularMovies, searchMovies } from '@/lib/tmdb';
import MovieList from '@/components/MovieList';
import SearchBar from '@/components/SearchBar';
import LoadingSpinner from '@/components/LoadingSpinner';

interface HomeProps {
  searchParams: { search?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const searchQuery = searchParams.search;
  let movies = [];
  
  // Debug: Afficher toutes les variables d'environnement disponibles
  console.log('Variables d\'environnement:', {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY ? 'Présent' : 'Manquant',
    // Ne pas afficher la valeur réelle de la clé API pour des raisons de sécurité
  });
  
  try {
    const response = searchQuery
      ? await searchMovies(searchQuery)
      : await getPopularMovies();
    console.log('API Response:', response);
    movies = response.results || [];
  } catch (error) {
    console.error('Erreur détaillée lors du chargement des films:', error);
    // Afficher un message d'erreur plus détaillé
    if (error instanceof Error) {
      console.error('Message d\'erreur:', error.message);
      console.error('Stack trace:', error.stack);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {searchQuery ? `Résultats pour "${searchQuery}"` : 'Films Populaires'}
      </h1>
      <SearchBar />
      <Suspense fallback={<LoadingSpinner />}>
        <MovieList movies={movies} />
      </Suspense>
    </div>
  );
} 