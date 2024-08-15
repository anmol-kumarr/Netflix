import usefetchVideo from "../hooks/usefetchvideo"

const VideoModal = ({item}) => {
    const id=usefetchVideo(item)
    // console.log(id)
    return (
        <div className="">
            <div className=" w-[80px] h-[150px] aspect-video">
            <iframe className=" w-auto h-[100%] overflow-hidden object-cover" src={`https://www.youtube.com/embed/${id}?loop=1&controls=0&autoplay=1&mute=1&modestbranding=1&autohide=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default VideoModal