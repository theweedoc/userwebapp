import React from 'react'
import {Search,PersonSearch} from '@mui/icons-material'
import { useRouter } from 'next/router'
import PersonPinIcon from '@mui/icons-material/PersonPin';

const SearchBox = (context) => {
  const router = useRouter()
  const iconChanger = router.pathname ==="/"? true:false

  return (
     <div className = 'search-box'>
      <input className = "search-text" type="text" placeholder = { iconChanger===true ?"Search Movie" :"Search Profile"}/>
        <a href="#" className = "search-btn">
      { iconChanger===true ?<Search/> :<PersonSearch/>}
    </a>
     
  </div>


  )
}

export default SearchBox