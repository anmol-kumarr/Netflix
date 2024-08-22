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
import MobileNav from "../components/mobileNav";

const Browse = () => {
    const movie = useSelector(store => store.movies?.nowPlayingMovies)
    const trending = useSelector(store => store.movies?.trending)
    const upcoming = useSelector(store => store.movies?.upcoming)
    const topRated = useSelector(store => store.movies?.topRated)
    // console.log(tvSeries)
    const [mute, setMute] = useState(true)
    // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
        <div className="bg-netflix-bg relative">

            <div className="aspect-video">

                <Header></Header>
                <div className="relative">
                    <VideoCard mute={mute} singleMovie={singleMovie} ></VideoCard>
                    <div className="  lg:shadow-xl lg:shadow-black w-screen aspect-video lg:pt-[25%] absolute z-30 bg-gradient-to-r from-black md:pt-[25%] sm:pt-[20%] pt-[15%] ">


                        <div className="w-2/4 lg:p-5 sm:p-2 p-2  font-Gilroy">
                            <h1 className="text-white sm:m-4 mt-4 mx-2 font-bold sm:text-2xl md:text-4xl ">
                            {
                            singleMovie.title.length>20?<>{singleMovie.title.slice(0,20)}...</>:<>{singleMovie.title}</>
                            }
                            </h1>

                            {/* <p >{singleMovie.overview}</p> */}
                            {
                                singleMovie.overview.length > 150 ? <p className=" text-white text-[10px] sm:text-[13px] md:text-md m-2 sm:m-3 md:m-4" >{singleMovie.overview.slice(0, 150)}...</p> : <p className=" text-[10px] text-white sm:text-[13px] md:text-md md:m-4 " >{singleMovie.overview}</p>
                            }
                        </div>

                        <div className="sm:px-5 sm:mt-0 mt-[-4px] px-2 flex items-center gap-2 font-bold">
                            <button className="sm:p-3 p-2  text-[11px] sm:px-8  sm:m-2 rounded-md bg-white">Play Now</button>
                            <button className="sm:p-3 p-2 flex items-center sm:text-lg gap-2 sm:px-8 px-4 text-[11px] m-2 rounded-md bg-black opacity-50 text-white ">
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
                <div className="lg:pt-8 md:pt-2">
                    <div className="max-w-[1300px] mx-auto my-7">


                        <div>

                            <h2 className="text-white z-30 font-Gilroy font-semibold text-2xl sm:m-5 m-3">Popular Movies</h2>
                            {
                                popular !== null && <Carousel categories={'movie'} Data={popular}></Carousel>

                            }
                        </div>
                        <div>
                            <h2 className=" text-white z-30 font-Gilroy font-semibold text-2xl sm:m-5 m-3">Top Rated</h2>
                            {
                                upcoming !== null && <Carousel categories={'movie'} Data={topRated}></Carousel>
                            }
                        </div>
                        <div>
                            <h2 className=" text-white z-30 font-Gilroy font-semibold text-2xl sm:m-5 m-3">Trending this week</h2>
                            {
                                trending !== null && <Carousel categories={'movie'} Data={trending}></Carousel>
                            }
                        </div>
                        <div>
                            <h2 className=" text-white z-30 font-Gilroy font-semibold text-2xl sm:m-5 m-3">Upcoming</h2>
                            {
                                upcoming !== null && <Carousel categories={'movie'} Data={upcoming}></Carousel>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <hr className="width-[1px] bg-white"></hr>
            <Footer></Footer>


            <MobileNav></MobileNav>


        </div>
    )
}
export default Browse

