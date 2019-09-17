import React from 'react'
import styled from 'styled-components'

import { colors } from 'Variables'

import { MdSearch as SearchIcon } from 'react-icons/md'

const SearchForm = styled.form`
  /* display: flex; */
  /* align-items: center; */
  /* width: 240px; */
  /* height: 32px; */
`

const SearchBox = styled.div`
  display: inline-flex;
  align-items: center;
  /* flex: 1 1 300px; */
  padding-right: 8px;
  position: relative;
  overflow: hidden;
  background-color: #fff;

  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`

const SearchInput = styled.input`
  /* flex: 1 1 auto; */

  border: 1px solid ${colors.greyLighter};
  border-radius: 0;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  height: 32px;
  width: 240px;
  outline: none;
  padding: 10px;

  transition: all 0.3s ease-in-out;
  -webkit-appearance: none;

  /* &:focus {} */
`

export const Search = () => (
  <SearchForm>
    <SearchBox>
      <SearchInput placeholder="Search..." />
      <SearchIcon size="1.6rem" color={colors.greyDark} />
    </SearchBox>
  </SearchForm>
)

// const FullSearch = () => (
//   <SearchForm>
//     <SearchBox>
//       <SearchInput placeholder="Search..." />
//       <SearchIcon size="1.6rem" color={colors.grey.dark} />
//     </SearchBox>
//   </SearchForm>
// )

// export const Search = styled(FullSearch)``
