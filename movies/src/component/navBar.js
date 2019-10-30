import React from 'react';
import './navBar.css';



function NavBar({ movies }) {
    return (
     <div className="backnav row">
             <div className="desk-10">
                 <img className="title" src="https://fontmeme.com/permalink/191030/bdac6a97966d2d2272e73be2325c7e16.png" alt="police-double-feature" border="0"></img>
             </div>
             <div className="test desk-1 row">
                 <button className="taille dsk-1">
                     <a><img className="infoimg" src="https://zupimages.net/up/19/44/b8is.png" alt="" /> </a>
                 </button>
             </div>
    </div>
    );
  };


  export default NavBar;