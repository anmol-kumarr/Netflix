import { useEffect, useState } from "react";
import { options } from "../constant";
const useFetchVideo = (singleMovie,categories) => {
    const [id, setId] = useState(null)

    const fetchData = async () => {
        const url = `https://api.themoviedb.org/3/${categories}/${singleMovie.id}/videos?language=en-US`;
        const response = await fetch(url, options)
        const data = await response.json()
        // console.log(data)
        const filterData = data.results.filter((item) => item.type === 'Trailer')
        const videoData = filterData.length > 0 ? filterData[0] : data.results
        setId(videoData.key)

    }
    useEffect(() => {
        fetchData()
    }, [singleMovie])
    return id
}
export default useFetchVideo