import { options } from "../constant"
import { useEffect} from "react"
import { useDispatch } from "react-redux"

const useFetchData=(url,fn)=>{
    const  dispatch=useDispatch()
    
    const fetchData=async()=>{
        try{
            const response=await fetch(url,options)
            const data=await response.json()
            // console.log(data)
        
            dispatch(fn(data.results))
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
}
export default useFetchData