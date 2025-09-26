export const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function getPopularMovies(page: number = 1): Promise<MovieResponse> {
  if (!TMDB_API_KEY) {
    throw new Error('La clé API TMDB n\'est pas configurée. Veuillez ajouter NEXT_PUBLIC_TMDB_API_KEY dans votre fichier .env.local');
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}&language=fr-FR`
  );
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(`Erreur API: ${response.status} ${response.statusText}${error ? ` - ${JSON.stringify(error)}` : ''}`);
  }
  
  return response.json();
}

export async function getMovieById(id: string): Promise<Movie> {
  if (!TMDB_API_KEY) {
    throw new Error('La clé API TMDB n\'est pas configurée. Veuillez ajouter NEXT_PUBLIC_TMDB_API_KEY dans votre fichier .env.local');
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=fr-FR`
  );
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(`Erreur API: ${response.status} ${response.statusText}${error ? ` - ${JSON.stringify(error)}` : ''}`);
  }
  
  return response.json();
}

export async function searchMovies(query: string, page: number = 1): Promise<MovieResponse> {
  if (!TMDB_API_KEY) {
    throw new Error('La clé API TMDB n\'est pas configurée. Veuillez ajouter NEXT_PUBLIC_TMDB_API_KEY dans votre fichier .env.local');
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=fr-FR`
  );
  
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(`Erreur API: ${response.status} ${response.statusText}${error ? ` - ${JSON.stringify(error)}` : ''}`);
  }
  
  return response.json();
} 