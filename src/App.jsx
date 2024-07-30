import './App.css'
import GenreMovieList from './Components/GenreMovieList/GenreMovieList'
import Header from './Components/Header/Header'
import ProductionHouse from './Components/ProductionHouse/ProductionHouse'
import Slider from './Components/Slider/Slider'

function App() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <ProductionHouse></ProductionHouse>
      <GenreMovieList></GenreMovieList>
    </>
  )
}

export default App
