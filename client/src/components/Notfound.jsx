import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound=()=>{
    const router=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            router('/')
        }, 3000)
    },[])
    return(
        <div>
            <h1>Page not found</h1>
            <p>Redirecting in 3 sec...</p>
        </div>
    )
}
export default NotFound;