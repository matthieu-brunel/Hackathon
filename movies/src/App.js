import React from 'react';
import './App.css';
import Hack from './component/hack.js';
import axios from 'axios';
import NavBar from './component/navBar.js';
import Search from "./component/search";
import Filter from './component/filter';

const hacki = [];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: hacki
      
    };
    this.getMovies = this.getMovies.bind(this);
  }
  getMovies() {
   
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
      
      .then(response => response.data)
      
      .then(data => {
        console.log(data.movies);
        this.setState({
          movies: data.movies,
        });
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.state.movies.length == 0 && <p>loading</p>}
        {this.state.movies.length > 0 && 
        this.state.movies.map( movie =>
          <Hack movies={movie} />
        )
      }

      <Search/>
      <Filter/>

        
        <button type="button" onClick={this.getMovies}>Get movies</button>
      </div>
    );
  }
}

export default App;
