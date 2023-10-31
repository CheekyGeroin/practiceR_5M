import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchBar.styled';

const SearchBar = ({ onSubmit, onChange }) => {
  const [q, setQ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(q);
    onChange(q);
    setQ('');
  };

  const handleChange = e => {
    setQ(e.currentTarget.value.toLowerCase());
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleChange} value={q} type="text" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
