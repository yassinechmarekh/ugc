'use client'
import React, { useEffect, useRef, useState } from 'react';
import "./portfolio.css"
const Portfolio = () => {
  const [isopen, setopen] = useState(false);
  const [isplay, setplay] = useState(false);

  const [vd, setvd] = useState("")
  const refvd = useRef()

  useEffect(() => {
    const vdov=document.getElementById('myVideo')
    if (isopen == true) {
      refvd.current.style.display = "flex"
      setplay(true)
      console.log(vd)
      if(vdov) vdov.play()
    }else{
     if(vdov) vdov.pause()
       refvd.current.style.display="none"
      setplay(false)
      
    }

  }, [isopen]);
  return (

    <div id='portfolio'>
      <div ref={refvd} id='vdoverlay' >
        <img src='./reject.png' id='exit' onClick={()=>{
          setopen(false)
        }} />
        <div className='vdcontainer2' onMouseEnter={()=>{
         

        }}
        onMouseLeave={()=>{
        
        }}
        onClick={()=>{
          const vdov=document.getElementById('myVideo')
          if(isplay==true){
            setplay(false)
            vdov.pause()
          }else{
            setplay(true)
            vdov.play()
          }
        }}
        >
        {vd}

          {/* Play button */}
         

          {/* Pause button */}
        
        </div>
      </div>

      <h2>Ugc Exemples</h2>
      <div id='phone'>

        <div className='vdcontainer'>
          <video
            id='vd1'
            onClick={() => {
              setvd(  <video key={"vd1"}
                id="myVideo" autoplay loop
                onClick={() => {
         
    
                }}
    
    
              >
               <source src="./10.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>)
              setopen(true)
            
            }}


          >
            <source src="./10.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button */}
          <img src='./vdplay.png' className='vdplay' alt='play' onClick={() => {
            setopen(true);   // Open the video

            setvd(  <video
              id="myVideo" autoplay loop
              onClick={() => {
       
  
              }}
  
  
            >
             <source src="./10.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>)
          }} />

          {/* Pause button */}

        </div>



        <div className='vdcontainer'>
          <video
            id='vd1'
            onClick={() => {
              setopen(true)
              setvd(  <video key={"vd2"}
                id="myVideo" autoplay loop
                onClick={() => {
         
    
                }}
    
    
              >
               <source src="./11.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>)
            }}


          >
            <source src="./11.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button */}
          <img src='./vdplay.png' className='vdplay' alt='play' onClick={() => {
            setopen(true);   // Open the video
            setvd(  <video key={"vd2"}
              id="myVideo" autoplay loop
              onClick={() => {
       
  
              }}
  
  
            >
             <source src="./11.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>)
          }} />

          {/* Pause button */}

        </div>




        <div className='vdcontainer'>
          <video
            id='vd1'
            onClick={() => {
              setopen(true)
              setvd(  <video key={"vd3"}
                id="myVideo" autoplay loop
                onClick={() => {
         
    
                }}
    
    
              >
               <source src="./12.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>)
            }}


          >
            <source src="./12.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button */}
          <img src='./vdplay.png' className='vdplay' alt='play' onClick={() => {
            setopen(true);   // Open the video
            setvd(  <video key={"vd3"}
              id="myVideo" autoplay loop
              onClick={() => {
       
  
              }}
  
  
            >
             <source src="./12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>)
          }} />

          {/* Pause button */}

        </div>





        <div className='vdcontainer'>
          <video

            id='vd1'
            onClick={() => {
              setopen(true)
              setvd(  <video key={"vd4"}
                id="myVideo" autoplay loop
                onClick={() => {
         
    
                }}
    
    
              >
               <source src="./13.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>)
            }}


          >
            <source src="./13.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button */}
          <img src='./vdplay.png' className='vdplay' alt='play' onClick={() => {
            setopen(true);   // Open the video
            setvd(  <video key={"vd4"}
              id="myVideo" autoplay loop
              onClick={() => {
       
  
              }}
  
  
            >
             <source src="./13.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>)

          }} />

          {/* Pause button */}

        </div>

      </div>


    </div>
  );
}

export default Portfolio;
