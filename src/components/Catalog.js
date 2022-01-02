import React, { Component } from 'react';
import '../styles/Catalog.css'
import Movie from './Movie';
class Catalog extends Component {
    handleTitleInput=(e)=>{
        this.props.handleTitleInput(e)
    }
    render() {
        let movies;
        if(this.props.moviesTmp.length>0){
            movies=this.props.moviesTmp
        }
        else
            movies=this.props.movies

        let budget=this.props.Budget
        let addToFavoriteFunc=this.props.addToFavoriteFunc
        let unFavoriteFunc=this.props.unFavoriteFunc
        return (
            <div id="catalog">
                <div id="u-input">
                    <input type="text" placeholder="search" onChange={this.handleTitleInput}/>
                    <h4 id="Budget">Budget : ${budget}</h4>
                </div>
                 
                {movies.find(movie=>movie.isRented===true)?
                <div>
                <div id="catalog">rented:</div>
                <div id="catalog-container">
                {movies.filter(movie=>movie.isRented===true).map(movie=>{
                    return(
                        <div>
                            <Movie key={movie.id} movie={movie} addToFavoriteFunc={addToFavoriteFunc}
                            unFavoriteFunc={unFavoriteFunc}/>
                        </div>
                        )
                })}
                </div>
                </div>
                :<div></div>
                }
                <div id="catalog">catalog:</div>
                <div id="catalog-container">
                {movies.filter(movie=>movie.isRented===false).map(movie=>{
                    return(
                        <div>
                            <Movie key={movie.id} movie={movie} addToFavoriteFunc={addToFavoriteFunc}
                            unFavoriteFunc={unFavoriteFunc}/>
                        </div>
                        )
                })}
                </div>
            </div>
        );
    }
}

export default Catalog;