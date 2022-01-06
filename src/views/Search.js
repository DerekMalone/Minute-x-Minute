import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'reactstrap';

const Search = ({ func, array }) => {
  // accepts array of obj or string
  const [searchField, setSearchField] = useState('');

  // filters the array passed in passed in based name
  const filteredItems = () => array.filter((arrItem) => arrItem.name.toLowerCase().includes(searchField.toLowerCase()));

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredArr = filteredItems().length ? filteredItems() : array; // checks to see if filtered items has a length, if so then it assigns
    // filtered items, if not assigns the array that was passed in
    if (searchField) func(filteredArr); // falsy valuation to determine if we use setFiltered... that is passed in
    setSearchField(''); // resets search field to an empty string after submitting search
  };

  return (
    <>
      <div>
        <form style={{ margin: '2rem' }} onSubmit={handleSubmit}>
          <Input value={searchField} onChange={handleChange} />
          <Button type="submit">Search</Button>
        </form>
      </div>
    </>
  );
};

Search.propTypes = {
  func: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.shape(PropTypes.obj)).isRequired,
};

export default Search;
