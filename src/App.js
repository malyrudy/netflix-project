import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import MovieSlider from "./components/MovieSlider"

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="movie-sliders">
        <MovieSlider categoryOfMovies="Oblíbené"/>
        <MovieSlider categoryOfMovies="Komedie"/>
        <MovieSlider categoryOfMovies="Romantický"/>
        <MovieSlider categoryOfMovies="Akční"/>
        <MovieSlider categoryOfMovies="Nově přidané"/>
        <MovieSlider categoryOfMovies="Seriál"/>
      </div>
    </div>
  )
}

export default App