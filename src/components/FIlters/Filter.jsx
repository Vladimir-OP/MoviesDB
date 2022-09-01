import React, { useContext, useState, useEffect } from "react";
import arrowRight from "/home/vladimir/Desktop/Movies/movies/src/assets/arrow-right.svg";
import {
  FilterCont,
  DropdownFilterOption,
  DropdownFilterBody,
  DropdownFilter,
  FilterTitle,
  FilterContent,
  Titile,
  FilterItem,
  SubmitBtn,
} from "./Filter.style";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  return (
    <FilterCont>
      <Titile>Popular TV Shows</Titile>
      <FilterItem>
        <FilterTitle isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
          <p>Sort</p>
          <img src={arrowRight} alt="" />
        </FilterTitle>
        <FilterContent isOpen={isOpen}>
          <p>Sort Results By</p>
          <DropdownFilter onClick={() => setIsSortMenuOpen((prev) => !prev)}>
            <DropdownFilterBody isOpen={isSortMenuOpen}></DropdownFilterBody>
          </DropdownFilter>
        </FilterContent>
      </FilterItem>
      <SubmitBtn>Search</SubmitBtn>
    </FilterCont>
  );
};

export default Filter;
