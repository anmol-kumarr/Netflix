import usefetchVideo from "../hooks/usefetchvideo"
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLikedVideos, removeLiked, removeWatchLater, addWatchLater } from "../utils/favouriteSlice";
import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { toast } from "react-toastify";


const VideoModal = ({ item, categories }) => {
    const id = usefetchVideo(item, categories)
    const [liked, setLiked] = useState(false)
    const [watchLater, setWatchLater] = useState(false)
    // console.log(item)
    const dispatch = useDispatch()
    const likedList = useSelector(store => store.favourite?.liked)
    const watchLaterList = useSelector(store => store.favourite?.watchLater)
    useEffect(() => {
        const isLiked = likedList.some(arr => arr.id === item.id);

        if (isLiked) {
            setLiked(true);
            toast.success('Added to liked');
        } else {
            setLiked(false);
            toast('Removed from liked');
        }

    }, [likedList])


    useEffect(() => {
        const isWatchLater = watchLaterList.some(arr => arr.id === item.id);

        if (isWatchLater) {
            setWatchLater(true);
            toast.success('Added to liked');
        } else {
            setWatchLater(false);
            toast('Removed from liked');
        }


    }, [watchLaterList])



    const saveLiked = () => {
        const isLikedVideo = likedList.some(video => video.id === item.id);
        isLikedVideo ? dispatch(removeLiked(item.id)) : dispatch(addLikedVideos(item))
    }


    const watchLaterHandler = () => {
        const isInWatchLater = watchLaterList.some(video => video.id === item.id);
        isInWatchLater ? dispatch(removeWatchLater(item.id)) : dispatch(addWatchLater(item));

    }
    return (
        <div className="pt-6 bg-black w-[230px]">
            <div className=" h-30 w-[230px] inline-block bg-black overflow-hidden">
                <iframe className="block h-30 w-[230px]" src={`https://www.youtube.com/embed/${id}?loop=1&controls=0&autoplay=1&mute=1&modestbranding=1&autohide=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className=" rounded-lg py-1 pb-2 px-3 text-white bg-black font-Gilroy">
                <p className=" text-xs font-semibold">
                    {item.title}
                </p>
                <div className="">

                    <div className="w-full flex m-1  gap-3">
                        <button className="text-xs w-6 h-6 pl-[1.5px] bg-white flex justify-center items-center text-black p- rounded-full"><FaPlay /></button>

                        <div onClick={watchLaterHandler} className="relative flex justify-center items-center cursor-pointer text-xs w-6 h-6 border-solid border-[1.4px] border-input-grey text-input-grey  rounded-full">
                            {
                                watchLater ? <SiTicktick className="peer" /> : <FaPlus className="peer" /> 
                            }
                        

                            <div className="text-black  peer-hover:block hidden  absolute bottom-6 left-0">
                                <p className="rounded-md p-1 text-[10px] text-center w-[70px] font-Gilroy bg-white">Watch later</p>
                            </div>
                        </div>


                        <div onClick={saveLiked} className=" relative flex justify-center items-center cursor-pointer  text-lg">
                            <FaHeart className={`peer ${liked && 'text-sign-in-red'}`} />
                            <div className="text-black  peer-hover:block hidden  absolute bottom-6 left-0">
                                <p className="rounded-md text-[10px] text-center w-[50px] font-Gilroy bg-white">I like This</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoModal