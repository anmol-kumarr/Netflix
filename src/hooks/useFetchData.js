import { CgAttachment } from "react-icons/cg"
import { options } from "../constant"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const useFetchData=(url,fn)=>{
    const [sendData,setSendData]=useState(null)
    const  dispatch=useDispatch()
    
    const fetchData=async()=>{
        try{
            const response=await fetch(url,options)
            const data=await response.json()
            setSendData(data)
            dispatch(fn(data.results))
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    return sendData;
}
export default useFetchData