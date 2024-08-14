import { useDispatch } from "react-redux"
import { options } from "../constant"
import { addNowPlayingMovie } from "../utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovie = () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    const dispatch = useDispatch()
    const fetchData = async () => {
        try {
            const response = await fetch(url, options)
            const apiData = await response.json()
        
            dispatch(addNowPlayingMovie(apiData))
        }
        catch (err) {
            // setErr(true)
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    },[])
}
export default useNowPlayingMovie;