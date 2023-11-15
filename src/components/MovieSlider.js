import "../components/MovieSlider.css"
import allMovies from "../data"
import { useState } from "react"
import categories from "./categories"
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const MovieSlider = (props) => {
    const [typeOfMovie, setTypeOfMovie] = useState(props.categoryOfMovies)
    console.log(props);

    const vysledneFilmy = allMovies.filter((oneMovie) => {
        return oneMovie["category"].includes(typeOfMovie)
    })
    

    return <div className="movies-slider">
        <div className="all-buttons">
            {
                categories.filter((oneCategory, index) => {
                    return oneCategory === props.categoryOfMovies
                })
                // categories.map((oneCategory, index) => {
                //     return <button className="one-button" key={index} onClick={()=> setTypeOfMovie(oneCategory)}>{oneCategory}</button>
                // })
            }
        </div>
        <div className="movies-and-buttons">
            <FaArrowCircleLeft className="arrow-button arrow-left"/>
            <div className="all-movies">
                {
                    vysledneFilmy.map((oneMovie) => {
                        const {id, image, title, age, tags, description, category} = oneMovie

                        return <div className="one-movie" key={id}>
                            <img src={image} alt="movie-image" />
                            <h3>{title}</h3>
                        </div>
                    })
                }
            </div>
            <FaArrowCircleRight className="arrow-button arrow-right" />
        </div>
        
    </div>
}

export default MovieSlider