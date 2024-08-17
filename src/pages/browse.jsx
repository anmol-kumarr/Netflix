import { useSelector } from "react-redux"
import Header from "../components/header"
import useNowPlayingMovie from "../hooks/useNowPlayingMovie"
import VideoCard from "../components/videoCard"
import { ImVolumeMute2, ImVolumeMute } from "react-icons/im";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import useFetchData from "../hooks/useFetchData";
import { addPopular, addTopRated, addTrending, addUpcoming } from "../utils/movieSlice";
import Carousel from "../components/Crousal";
import Footer from "../components/footer";

const Browse = () => {
    const movie = useSelector(store => store.movies?.nowPlayingMovies)
    const trending = useSelector(store => store.movies?.trending)
    const upcoming = useSelector(store => store.movies?.upcoming)
    const topRated = useSelector(store => store.movies?.topRated)
    // console.log(tvSeries)
    const [mute, setMute] = useState(true)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useNowPlayingMovie()
    useFetchData('https://api.themoviedb.org/3/movie/popular', addPopular)
    useFetchData('https://api.themoviedb.org/3/movie/upcoming', addUpcoming)
    useFetchData('https://api.themoviedb.org/3/trending/movie/week', addTrending)
    useFetchData('https://api.themoviedb.org/3/movie/top_rated', addTopRated)

    const popular = useSelector(state => state.movies.popular)
    if (!movie) return null
    const random = Math.floor(Math.random() * (20 - 1) + 1)
    const singleMovie = movie?.results[random]

    return (
        <div className="bg-netflix-bg">

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
                <div className="pt-8 ">
                    <div className="max-w-[1300px] mx-auto my-7">


                        <div>

                            <h2 className="text-white z-30 font-Gilroy font-semibold text-2xl m-5">Popular Movies</h2>
                            {
                                popular !== null && <Carousel categories={'movie'} Data={popular}></Carousel>

                            }
                        </div>
                        <div>
                            <h2 className=" text-white z-30 font-Gilroy font-semibold text-2xl m-5">Top Rated</h2>
                            {
                                upcoming !== null && <Carousel categories={'movie'} Data={topRated}></Carousel>
                            }
                        </div>
                        <div>
                            <h2 className=" text-white z-30 font-Gilroy font-semibold text-2xl m-5">Trending this week</h2>
                            {
                                trending !== null && <Carousel categories={'movie'} Data={trending}></Carousel>
                            }
                        </div>
                        <div>
                            <h2 className=" text-white z-30 font-Gilroy font-semibold text-2xl m-5">Upcoming</h2>
                            {
                                upcoming !== null && <Carousel categories={'movie'} Data={upcoming}></Carousel>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <hr className="width-[1px] bg-white"></hr>
            <Footer></Footer>

        </div>
    )
}
export default Browse

