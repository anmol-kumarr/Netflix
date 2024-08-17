import useVideo from "../hooks/useVideo"
import { useSelector } from "react-redux"

const VideoCard = ({ singleMovie,mute }) => {
    useVideo(singleMovie)
    const id=useSelector(state=>state.movies.trailerVideo)
    return (
        <div className=" absolute w-screen overflow-hidden">
            <iframe className=" overflow-hidden w-screen aspect-video" src={`https://www.youtube.com/embed/${id}?loop=1&controls=0&autoplay=1&${mute?'mute=1':'mute=0'}&modestbranding=1&autohide=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
export default VideoCard