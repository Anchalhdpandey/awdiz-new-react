import { useState } from "react"

function Welcome(){
    const[isSignIn,setIsSignIn]=useState(false)
    console.log(isSignIn, "isSignIn")
    function Change(){
        setIsSignIn(!isSignIn)
    }
    return(
        <div>
            {isSignIn ? <button onClick={Change}>Welcome Logout</button>:
            <button onClick={Change}>Sign in!</button>}
            {isSignIn && <h1>Welcome isSignIn turned to true</h1>}
        </div>
    )
}
export default Welcome;