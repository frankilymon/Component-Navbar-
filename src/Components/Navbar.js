import React from 'react'
import '../App.css'
import { useState } from 'react'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchIcon from '@material-ui/icons/Search'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="Navbar">
      <div className=" leftSide">
        <div className="links" id={menuOpen ? 'hidden' : ''}>
          <a href="/home">Home</a>
          <a href="/aboutus">About Me</a>
          <a href="contact">Contact</a>
          <a href="feedback">Feedback</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <ReorderIcon />
        </button>
      </div>

      <div className="rightSide">
        <input type="text" placeholder="search..." />
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
