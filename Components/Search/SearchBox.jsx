import React from 'react'
import Search from '@mui/icons-material/Search'

const SearchBox = () => {
  return (
     <div className = 'search-box'>
      <input className = "search-text" type="text" placeholder = "Search Anything"/>
        <a href="#" className = "search-btn">
       <Search/>
    </a>
     
  </div>


  )
}

export default SearchBox