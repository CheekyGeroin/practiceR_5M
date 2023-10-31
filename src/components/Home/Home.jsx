import { fetchTopFilms } from 'services/fetch-api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Item, Link, List, Title } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      fetchTopFilms().then(setFilms);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log(films);

  return (
    <div>
      <Title>Trending today</Title>
      <List>
        {films.map(({ title, name, id }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title ?? name}
              </Link>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default Home;
