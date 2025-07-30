import React from 'react'

const SearchBar = ({setCity}) => {
  return (
    <div>
        <input type="text" 
        placeholder='Enter City Name'
        onChange={(e) => setCity(e.target.value)}
        />
    </div>
  )
}

export default SearchBar