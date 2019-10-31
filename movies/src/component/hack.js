import React from 'react';
import './hack.css';


function Hack({ movies }) {
    return (
      <div className="sect wrap">
      <div >
        <img className="poster " src={movies.posterUrl}/>
          <p className="info">{movies.title}</p>
          <p className="info">{movies.director}</p>
          <p className="info">{movies.year}</p>
        
       
      </div>
      </div>
    );
  };

export default Hack;