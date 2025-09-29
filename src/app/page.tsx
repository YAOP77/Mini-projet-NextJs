import { Suspense } from 'react';
import { getPopularMovies, searchMovies } from '@/lib/tmdb';
import MovieList from '@/components/MovieList';
import SearchBar from '@/components/SearchBar';
import LoadingSpinner from '@/components/LoadingSpinner';


export default async function Home({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const { search } = await searchParams;
  let movies = [];
  // ...existing code...
  try {
    const response = search
      ? await searchMovies(search)
      : await getPopularMovies();
    console.log('API Response:', response);
    movies = response.results || [];
  } catch (error) {
    console.error('Erreur détaillée lors du chargement des films:', error);
    if (error instanceof Error) {
      console.error('Message d\'erreur:', error.message);
      console.error('Stack trace:', error.stack);
    }
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {search ? `Résultats pour "${search}"` : 'Films Populaires'}
      </h1>
      <SearchBar />
      <Suspense fallback={<LoadingSpinner />}>
        <MovieList movies={movies} />
      </Suspense>
    </div>
  );
}

