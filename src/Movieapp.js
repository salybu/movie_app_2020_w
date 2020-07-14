import React from 'react';
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./Movieapp.css";

class Movieapp extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async () => {
        const { 
            data: { 
                data: { movies } 
            } 
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // console.log(movies)
        this.setState({ movies, isLoading: false });
    }
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({ isLoading : false })
        // }, 6000)
        this.getMovies();
    }
    render(){
        const { isLoading, movies } = this.state;
        return <div>
            {isLoading ? (
                <div className="container">
                    <span className="loader___text">Loading...</span>
                </div>
            ) 
                : (
                    <div className="movies">
                        {movies.map( movie => (
                        <Movie 
                            key = {movie.id}
                            id={movie.id} 
                            year={movie.year} 
                            title={movie.title} 
                            summary={movie.summary} 
                            poster={movie.medium_cover_image} 
                            genres={movie.genres}
                        />
                        ))}
                    </div>
            )}</div>
    }
}

export default Movieapp;