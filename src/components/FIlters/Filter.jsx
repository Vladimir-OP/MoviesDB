import React, { useContext, useState, useEffect } from "react";
import arrowRight from "/home/vladimir/Desktop/Movies/movies/src/assets/arrow-right.svg";
import {
  FilterCont,
  DropdownFilterBody,
  DropdownFilter,
  FilterTitle,
  FilterContent,
  Titile,
  FilterItem,
  SelectionBtn,
  Selections,
  SubmitBtn,
} from "./Filter.style";
import { MoviesContext } from "../../contexts/moviesContext";

// types of sorting
const sortingFilters = [
  {
    id: 1,
    value: "DESC",
    type: "popularity",
    name: "Popularity Descending",
  },
  {
    id: 2,
    value: "ASC",
    type: "popularity",
    name: "Popularity Ascending",
  },
  {
    id: 3,
    value: "DESC",
    name: "Release Date Descending",
  },
  {
    id: 4,
    value: "ASC",
    type: "release_date",
    name: "Release Date Ascending",
  },
  {
    id: 5,
    value: "DESC",
    type: "title",
    name: "Title (Z-A)",
  },
  {
    id: 6,
    value: "ASC",
    type: "title",
    name: "Title (A-Z)",
  },
  {
    id: 7,
    value: "DESC",
    type: "vote_average",
    name: "Rating Descending",
  },
  {
    id: 8,
    value: "ASC",
    type: "vote_average",
    name: "Rating Ascending",
  },
];

/**
 *   // Filter Component that make movies sorting
 * @returns {component}
 */
const Filter = () => {
  // keep value about sort menu open or close condition and give it to the button
  const [isOpen, setIsOpen] = useState(false);
  // keep value about menu open or close condition
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  // give filter option to other components with context
  const { filter, setFilter, setApplyFilter, setMovies, applyFilter } =
    useContext(MoviesContext);

  
  return (
    <FilterCont>
      <Titile>Popular TV Shows</Titile>
      <FilterItem>
        <FilterTitle onClick={() => setIsOpen((prev) => !prev)}>
          <p>Sort</p>
          <img src={arrowRight} alt="" />
        </FilterTitle>
        <FilterContent isOpen={isOpen}>
          <p>Sort Results By</p>
          <DropdownFilter
            src={arrowRight}
            alt=""
            onClick={() => setIsSortMenuOpen((prev) => !prev)}
          >
            <p>{filter.name}</p>

            <DropdownFilterBody isOpen={isSortMenuOpen}>
              <Selections>
                {sortingFilters.map((e) => (
                  <SelectionBtn
                    key={e.name}
                    onClick={() => {
                      setFilter(e);
                    }}
                  >
                    {e.name}
                  </SelectionBtn>
                ))}
              </Selections>
            </DropdownFilterBody>
          </DropdownFilter>
        </FilterContent>
      </FilterItem>
      <SubmitBtn
        onClick={() => {
          setApplyFilter((prev) => (prev += 1));
        }}
      >
        Search
      </SubmitBtn>
    </FilterCont>
  );
};

export default Filter;
