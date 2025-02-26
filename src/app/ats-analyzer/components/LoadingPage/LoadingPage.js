import { useEffect } from 'react'
import './style/LoadingPage.css'
const LoadingPage = ({setCount, upload}) => {
  useEffect(()=>{
    if(upload){
      setCount(3);
    }
  },[upload])
  return (
    <div className="animation-container">
        <div className="magnifier"></div> 
        <div className="glowing-text">
            <span>A</span><span>N</span><span>A</span><span>L</span><span>Y</span><span>Z</span><span>I</span><span>N</span><span>G</span><span>.</span><span>.</span><span>.</span>
        </div>
    </div>


  )
}

export default LoadingPage
