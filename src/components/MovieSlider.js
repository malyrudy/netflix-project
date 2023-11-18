import "../components/MovieSlider.css"
import allMovies from "../data"
import { useState, useEffect } from "react"
import categories from "./categories"
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const MovieSlider = (props) => {
    const typeOfMovie = props.categoryOfMovies
    const vysledneFilmy = allMovies.filter((oneMovie) => {
        return oneMovie["category"].includes(typeOfMovie)
    })
    
    return <div className="movies-slider">
        <div className="one-button">
            {
                categories.filter((oneCategory, index) => {
                    return oneCategory === props.categoryOfMovies
                })
            }
        </div>
        <div className="slider-wrapper">
            <FaArrowCircleLeft id="prev-slide" className="arrow-button arrow-left"/>
            <div className="movies-list">
                {
                    vysledneFilmy.map((oneMovie) => {
                        const {id, image, title, age, tags, description, category} = oneMovie

                        return <img className="one-movie" src={image} alt="movie-image" key={id}/>
                    })
                }
            </div>
            <FaArrowCircleRight className="arrow-button arrow-right" />
            
        </div>
    </div>
}

export default MovieSlider
