import { useState } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { imageUrl, } from "../constant";
import VideoModal from "./videoModal";
const Carousel = ({ Data ,categories}) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    // console.log(movieData)
    const [visibleVideo, setVisibleVideo] = useState(null)
    const playVideo = (id) => {
        setVisibleVideo(id)
    }
    const pauseVideo=(id)=>{
        setVisibleVideo(null)
    }

    return (

        <div className="relative">
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={2}
                itemsToScroll={2}
                infinite={true}
                containerProps={
                    {
                        style: {
                            gap: '20px'
                        }
                    }
                }
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        position: "absolute",
                        right: '0%',
                        top: '5px',
                        alignSelf: '',
                        background: 'black',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 288,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 50,
                        padding: '10px'
                    },
                    children: <span><MdOutlineArrowForwardIos></MdOutlineArrowForwardIos></span>,
                }}
                backwardBtnProps={{

                    style: {
                        position: "absolute",
                        left: '0%',
                        top: '5px',
                        zIndex: '10',
                        alignSelf: 'center',
                        boxShadow: '0px 0px 30px black',
                        background: 'black',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 288,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 50,
                        padding: '10px'
                    },
                    children: <span><MdArrowBackIosNew></MdArrowBackIosNew></span>,
                }}
                responsiveProps={[
                    {

                        itemsToShow: 8,
                        itemsToScroll: 3,
                        minWidth: 768,

                    },
                ]}
                speed={400}
                easing="linear"

            >

                {
                    Data.map((item) => (

                        <div onMouseLeave={()=>pauseVideo(item.id)} onMouseEnter={() => playVideo(item.id)} key={item.id} className='m-2  h-[300px] p-2 w-[200px]'>
                            {
                                visibleVideo!==item.id ? <img className="h-[100%] rounded-md" src={imageUrl + item?.poster_path} alt="" /> :<div className=" scale-150">
                                <VideoModal categories={categories} item={item}></VideoModal>
                                </div>
                            }

                        </div>



                    ))
                }
            </ReactSimplyCarousel>


        </div>

    )
}

export default Carousel;