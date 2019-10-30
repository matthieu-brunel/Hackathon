import React from 'react';


function Hack({ movies }) {
    return (
      <div>
        <img src={movies.posterUrl}/>
          <p>{movies.title}</p>
          <p>{movies.director}</p>
        
       
      </div>
    );
  };

export default Hack;