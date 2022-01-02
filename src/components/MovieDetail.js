import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieDetail.css'

class MovieDetail extends Component {

    render() {
     let selectedMovie=this.props.movies[this.props.match.params.id]
        return(
            <div id="creature-container">
                <h1 className="title">{selectedMovie.title+"("+selectedMovie.year+")"}</h1>
                <img className="directory-img" src={selectedMovie.img} alt=""/>
                <h4 className="title">{selectedMovie.descrShort}</h4>
            </div>
        )
    }
}

export default MovieDetail;