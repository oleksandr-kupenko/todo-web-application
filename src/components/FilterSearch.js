import React from 'react';
import classNames from 'classnames/bind';

const FilterSearch = (props) => {
  let {
    filterValue,
    searchValue,
    setfilterValue,
    setSearchValue,
    sorthValue,
    seteSortValue,
  } = props;

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setfilterValue(e.target.value);
  };

  const handleChangeSort = (e) => {
    seteSortValue(e.target.value);
    console.log(sorthValue);
  };

  return (
    <div className="filterBlock">
      <div className={classNames('search')}>
        <input
          type="text"
          name="searchInput"
          placeholder="search..."
          onChange={handleChangeSearch}
          value={searchValue}
        />
        <span
          className={classNames('closeSearch', { closeActive: searchValue })}
          onClick={() => setSearchValue('')}
        ></span>
      </div>
      <div className="filter">
        <select
          name="sortTodos"
          onClick={handleChangeFilter}
          defaultValue={filterValue}
        >
          <option value="">Show all...</option>
          <option value="1">Done</option>
          <option value="0">Undone</option>
        </select>
      </div>
      <div className="sort">
        <input
          type="radio"
          value=""
          checked={sorthValue === ''}
          onChange={handleChangeSort}
        />{' '}
        Default
        <input
          type="radio"
          value="ascending"
          checked={sorthValue === 'ascending'}
          onChange={handleChangeSort}
        />{' '}
        Ascending
        <input
          type="radio"
          value="descending"
          checked={sorthValue === 'descending'}
          onChange={handleChangeSort}
        />{' '}
        Descending
      </div>
    </div>
  );
};

export default FilterSearch;
