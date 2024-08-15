import { useEffect, useState } from "react";
import { options } from "../constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useVideo=(singleMovie)=>{
    const[id,setId]=useState(null)
    const dispatch=useDispatch()
    const fetchData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${singleMovie.id}/videos?language=en-US`;
        const response = await fetch(url, options)
        const data = await response.json()
        const filterData=data.results.filter((item)=>item.type==='Trailer')
        const videoData=filterData.length>0?filterData[0]:data.results

        dispatch(addTrailerVideo(videoData.key))
    
    
    }
    useEffect(() => {
        fetchData()
    }, [singleMovie])

}
export default useVideo