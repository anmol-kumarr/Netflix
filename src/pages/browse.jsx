import { useSelector } from "react-redux"
import Header from "../components/header"
import useNowPlayingMovie from "../hooks/useNowPlayingMovie"
import VideoCard from "../components/videoCard"
import { ImVolumeMute2, ImVolumeMute } from "react-icons/im";
import { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import useFetchData from "../hooks/useFetchData";
import { addPopular } from "../utils/movieSlice";
import { imageUrl, } from "../constant";
import ReactSimplyCarousel from 'react-simply-carousel';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Carousel from "../components/Crousal";

const Browse = () => {
    const movie = useSelector(store => store.movies?.nowPlayingMovies)

    const [mute, setMute] = useState(true)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useNowPlayingMovie()
    useFetchData('https://api.themoviedb.org/3/movie/popular', addPopular)

    const popular = useSelector(state => state.movies.popular)
    if (!movie) return null
    const random = Math.floor(Math.random() * (20 - 1) + 1)
    const singleMovie = movie?.results[random]

    return (
        <div>

            <div className="aspect-video">

                <Header></Header>
                <div className="relative">
                    <VideoCard mute={mute} singleMovie={singleMovie} ></VideoCard>
                    <div className="  shadow-xl shadow-black w-screen aspect-video pt-[25%] absolute z-30 bg-gradient-to-r from-black ">


                        <div className="w-2/4 p-5 font-Gilroy">
                            <h1 className="text-white m-4 font-bold text-4xl ">{singleMovie.title}</h1>

                            {/* <p >{singleMovie.overview}</p> */}
                            {
                                singleMovie.overview.length > 150 ? <p className=" text-white  text-md m-4" >{singleMovie.overview.slice(0, 150)}...</p> : <p className=" text-white  text-md m-4" >{singleMovie.overview}</p>
                            }
                        </div>

                        <div className="px-5 flex items-center gap-2 font-bold">
                            <button className="p-3  px-8 m-2 rounded-md bg-white">Play Now</button>
                            <button className="p-3 flex items-center gap-2 px-8 m-2 rounded-md bg-black opacity-50 text-white ">
                                <RiErrorWarningLine />Info</button>
                            <button className="text-white text-xl my-auto" onClick={() => setMute(!mute)}>
                                {
                                    mute ? <ImVolumeMute2></ImVolumeMute2> : <ImVolumeMute></ImVolumeMute>
                                }
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-netflix-bg ">
                <div className="h-screen pt-4 ">
                    <div className="max-w-[1300px] mx-auto my-7">



                        <h2 className="text-white z-30 font-Gilroy font-semibold text-2xl m-5">Popular Movies</h2>
                        {
                            popular !== null && <Carousel movieData={popular}></Carousel>

                        }

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Browse