import GenresList from "../../Constant/GenresList";
import MovieList from "../MovieList/MovieList";

const GenreMovieList = () => {
    return (
        <div className="">
            {
                GenresList.genre.map((item, index) => index <= 4 && (
                    <div className="p-8 px-8 md:px-16" key={item.id}>
                        <h2 className="text-white text-xl font-bold">{item.name}</h2>
                        <MovieList genreId={item.id} index_={index}></MovieList>
                    </div>
                ))
            }
        </div>
    );
};

export default GenreMovieList;