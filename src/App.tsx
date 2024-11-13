import { useState } from 'react';
import { Loader2, Github } from 'lucide-react';
import DogCard from './components/DogCard';
import SearchBar from './components/SearchBar';
import { DogBreed } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dogs, setDogs] = useState<DogBreed[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchDogs = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/dogs?name=${encodeURIComponent(query)}`,
        {
          headers: {
            'X-Api-Key': '27oeBKlfFoLFIhagtrpiAQ==nk1AT4A6yb2oNs7B',
          },
        }
      );

      if (!response.ok) throw new Error('Failed to fetch dogs');

      const data = await response.json();
      setDogs(data);
    } catch (err) {
      setError('Failed to fetch dog breeds. Please try again.');
      setDogs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50'>
        <div className='container mx-auto px-4 py-8'>
          <header className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Discover Dog Breeds
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Explore detailed information about different dog breeds, their
              characteristics, and find your perfect companion.
            </p>
          </header>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={searchDogs}
          />

          {error && (
            <div className='text-red-500 text-center mt-4'>{error}</div>
          )}

          {loading ? (
            <div className='flex justify-center items-center mt-12'>
              <Loader2 className='w-8 h-8 animate-spin text-blue-500' />
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
              {dogs.map((dog, index) => (
                <DogCard key={`${dog.name}-${index}`} dog={dog} />
              ))}
            </div>
          )}

          {!loading && !error && dogs.length === 0 && searchTerm && (
            <div className='text-center mt-12 text-gray-600'>
              No dogs found matching your search. Try a different breed name.
            </div>
          )}
        </div>
      </div>
      <div className='w-full bg-black text-white py-2 text-center flex items-center justify-center gap-2'>
        Created by Randy
        <a
          href='https://github.com/Romeorayyy'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-300'
        >
          <Github className='w-5 h-5' />
        </a>
      </div>
    </>
  );
}

export default App;
