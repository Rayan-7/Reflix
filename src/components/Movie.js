import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Movie.css'

class Movie extends Component {
    addToFavoriteFunc=()=>{
        this.props.addToFavoriteFunc(this.props.movie.id)
    }
    unFavoriteFunc=()=>{
        this.props.unFavoriteFunc(this.props.movie.id)
    }

    render() {
        let movie=this.props.movie
        return (
            <div id="Movie">
                 <Link to={"movies/"+movie.id}><img className="directory-img" src={movie.img} alt=""/></Link>
                 {movie.isRented===true?<button onClick={this.unFavoriteFunc} id="add_button">-</button>:
                 <button onClick={this.addToFavoriteFunc} id="red_button">+</button>}
            </div>

            
        );
    }
}

export default Movie;