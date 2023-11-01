import { List } from './FilmsList.styled';
import PropTypes from 'prop-types';
import FilmsListItem from './FilmsListItem/FilmsListItem';

const FilmsList = ({ films }) => {
  console.log(films);
  return (
    <List>
      {films.length > 0 &&
        films.map(({ id, name, title }) => (
          <FilmsListItem key={id} id={id} title={title ?? name} />
        ))}
    </List>
  );
};

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
