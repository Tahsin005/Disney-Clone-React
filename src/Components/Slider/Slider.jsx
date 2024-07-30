import { useEffect, useRef, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const screenWidth = window.innerWidth;
const Slider = () => {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        GlobalApi.getTrendingVideos.then(res => {
            console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }, []);

    const slideRight = (e) => {
        e.scrollLeft += screenWidth - 110;
    }
    const slideLeft = (e) => {
        e.scrollLeft -= screenWidth - 110;
    }

  
    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-4xl absolute mx-8 mt-[200px] cursor-pointer" onClick={() => slideLeft(elementRef.current)}></HiChevronLeft>
            <HiChevronRight className="hidden md:block text-white text-4xl absolute mx-8 mt-[200px] cursor-pointer right-0" onClick={() => slideRight(elementRef.current)}></HiChevronRight>
            <div ref={elementRef} className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth">
                {
                    movieList.map((item, index) => (
                        <img key={index} src={IMAGE_BASE_URL + item.backdrop_path} alt="" className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-4 hover:border-gray-400 transition-all duration-100 ease-in-out shadow-lg shadow-slate-800"/>
                    ))
                }
            </div>
        </div>
    );
};

export default Slider;