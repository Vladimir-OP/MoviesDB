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
import { Navigate } from "react-router";

const sortingFilters = [
  {
    id: 1,
    value: "popularity.desc",
    name: "Popularity Descending",
  },
  {
    id: 2,
    value: "popularity.asc",
    name: "Popularity Ascending",
  },
  {
    id: 3,
    value: "release_date.desc",
    name: "Release Date Descending",
  },
  {
    id: 4,
    value: "release_date.asc",
    name: "Release Date Ascending",
  },
  {
    id: 5,
    value: "original_title.desc",
    name: "Title (Z-A)",
  },
  {
    id: 6,
    value: "original_title.asc",
    name: "Title (A-Z)",
  },
  {
    id: 7,
    value: "vote_average.desc",
    name: "Rating Descending",
  },
  {
    id: 8,
    value: "vote_average.asc",
    name: "Rating Ascending",
  },
];

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const { filter, setFilter, setApplyFilter } = useContext(MoviesContext);

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
          setApplyFilter((prev) => prev +=1);
        }}
      >
        Search
      </SubmitBtn>
    </FilterCont>
  );
};

export default Filter;
