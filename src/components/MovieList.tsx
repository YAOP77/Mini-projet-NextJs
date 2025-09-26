"use client";

import { Movie } from '@/lib/tmdb';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Aucun film trouvé
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
} 