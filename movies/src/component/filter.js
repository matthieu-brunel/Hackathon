import React from 'react';
import './filter.css';
import axios from 'axios';
import Hack from "./hack";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterSelected: [],
            movies: [],
            moviesSelected: []
        };
    }

    componentDidMount() {
        this.getMovies();
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

    handleChange = event => {
        event.preventDefault();
        console.log(event.target.value);
        if (event.target.id === "filter") {
            if (event.target.value === 'Year') {
                console.log("1");
                let filter = ["1900-2000", "2001-2005", "2006-2010", "2011-2015", "2016-2020"];
                console.log("2", filter);
               this.setState(() => ({filterSelected: filter}));
            }
            else if (event.target.value === 'Country') {
    
            }
            else if (event.target.value === 'Title') {
    
            }
            else if (event.target.value === 'Director') {
    
            }
        } else if (event.target.id === "movies") {
            let filt = event.target.value.split("-");
            let result = this.state.movies.filter(movie => movie.year >= Number(filt[0]) && movie.year <= Number(filt[1]));
            this.setState(() => ({moviesSelected: result}));
        }
    }

    render() {
        return (
            <div >
                <div >
                    <label htmlFor="subject">Filter by: </label>
                    <select
                        type="menu"
                        name="filter"
                        id="filter"
                        onChange={this.handleChange}
                    >
                        <option value="default" >Filter By</option>
                        <option value="Year" >Year</option>
                        <option value="Country">Country</option>
                        <option value="Title" >Title</option>
                        <option value="Director">Director</option>
                    </select>
                </div>
                {this.state.filterSelected.length > 0 &&
                <div >
                    <label htmlFor="subject">test</label>
                    <select
                        type="menu"
                        name="filter"
                        id="movies"
                        onChange={this.handleChange}
                    >
                        <option value="default" ></option>
                        {this.state.filterSelected.map(filterYear => 
                            <option value={filterYear} >{filterYear}</option>
                        )}
                    </select>
                </div>
                }
                <div >
                {this.state.moviesSelected.length > 0 &&
                this.state.moviesSelected.map(movie => <Hack movies={movie} />)
                }
                </div>
            </div>
        );

    }

}

export default Filter;

// 