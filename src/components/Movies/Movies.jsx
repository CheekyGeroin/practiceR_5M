import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { fetchFilmsByName } from 'services/fetch-api';
import { useSearchParams } from 'react-router-dom';
import { useFirstMountState } from 'react-use';
import FilmsList from './FilmsList/FilmsList';
import { useLocalStorage } from 'services/useLocalStorage';

const Movies = () => {
  const [films, setFilms] = useLocalStorage([], 'films');
  const [q, setQ] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const isFirstRender = useFirstMountState();
  const query = searchParam.get('query') ?? '';
  console.log(query);

  const updQuery = q => {
    if (q.trim() === '') {
      toast.error('Please write a name of the film!');
      return;
    }

    setQ(q);
  };

  const updQueryString = query => {
    const nextParam = query !== '' ? { query } : {};
    setSearchParam(nextParam);
  };

  useEffect(() => {
    if (!isFirstRender) {
      fetchFilmsByName(q).then(setFilms);
    }
  }, [isFirstRender, q, setFilms]);

  if (!films) {
    return;
  }
  console.log(films);
  return (
    <div>
      <SearchBar onSubmit={updQuery} onChange={updQueryString} />
      {query !== '' && <FilmsList films={films} />}
    </div>
  );
};
export default Movies;
