import Header from "../components/header"
import useNowPlayingMovie from "../hooks/useNowPlayingMovie"

const Browse = () => {

    useNowPlayingMovie()
    
    return (
        <>
            <Header></Header>
            Browse
        </>
    )
}
export default Browse