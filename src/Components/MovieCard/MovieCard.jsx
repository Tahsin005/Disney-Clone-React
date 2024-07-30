
const MovieCard = ({movie}) => {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[110px] md:w-[200px] rounded-lg hover:border-2 hover:border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer" />
        </>
    );
};

export default MovieCard;