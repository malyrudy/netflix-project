import "../components/MovieSlider.css"
import allMovies from "../data"
import { useState } from "react"
import categories from "./categories"

const MovieSlider = () => {
    const [typeOfMovie, setTypeOfMovie] = useState("oblíbené")

    const vysledneFilmy = allMovies.filter((oneMovie) => {
        return oneMovie["category"].includes(typeOfMovie)
    })
    

    return <div className="movies-slider">
        <div className="all-buttons">
            {
                categories.map((oneCategory, index) => {
                    return <button className="one-button" key={index} onClick={()=> setTypeOfMovie(oneCategory)}>{oneCategory}</button>
                })
            }
        </div>
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
    </div>
}

export default MovieSlider