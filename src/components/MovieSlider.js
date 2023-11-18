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
    
<<<<<<< Updated upstream
    useEffect(() => {
        const initSlider = () => {
            const slideButtons = document.querySelectorAll(".arrow-button");
            const imageList = document.querySelector(".movies-list");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        
            // Slide images according to slide buttons click
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
                })
            })
            // Hiding the buttons
            const handleSlideButtons = () => {
                slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
                slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
            }
            // update position of scrollbar 
            imageList.addEventListener("scroll", () => {
                handleSlideButtons();
            })
            
    }
    window.addEventListener("load", initSlider)
    })
    
    return <div className="movies-slider">
        <div className="one-button">
            {
                categories.filter((oneCategory, index) => {
                    return oneCategory === props.categoryOfMovies
                })
                // categories.map((oneCategory, index) => {
                //     return <button className="one-button" key={index} onClick={()=> setTypeOfMovie(oneCategory)}>{oneCategory}</button>
                // })
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
            
=======
    return <div className="container">
        <div className="slider-wrapper">
            <div className="category">
                {
                    categories.filter((oneCategory, index) => {
                        return oneCategory === props.categoryOfMovies
                    })
                }
            </div>
            <div className="slider-wrapper">
                <FaArrowCircleLeft className="arrow-button arrow-left"/>
                <div className="all-movies">
                    {
                        vysledneFilmy.map((oneMovie) => {
                            const {id, image, title, age, tags, description, category} = oneMovie

                            return <div className="one-movie" key={id}>
                                <img className="image-item" src={image} alt="movie-image" />
                            </div>
                        })
                    }
                </div>
                <FaArrowCircleRight className="arrow-button arrow-right" />
            </div>
>>>>>>> Stashed changes
        </div>
    </div>
}

export default MovieSlider
