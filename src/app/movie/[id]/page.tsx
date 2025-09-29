
import Image from 'next/image';
import Link from 'next/link';
import { getMovieById } from '@/lib/tmdb';
import { TMDB_IMAGE_BASE_URL } from '@/lib/tmdb';
import LoadingSpinner from '@/components/LoadingSpinner';


export default async function MoviePage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { id } = await params;
  const movie = await getMovieById(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Retour à la liste
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[500px] w-full">
          <Image
            src={`${TMDB_IMAGE_BASE_URL}/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-lg">
                {new Date(movie.release_date).toLocaleDateString('fr-FR')}
              </span>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-lg">{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
          <p className="text-gray-700 leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}