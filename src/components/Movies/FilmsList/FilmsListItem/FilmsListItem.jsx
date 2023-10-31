import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Link } from './FilmsListItem.styled';

const FilmsListItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
      <Outlet />
    </Item>
  );
};
export default FilmsListItem;
FilmsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
