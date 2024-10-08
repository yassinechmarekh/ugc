'use client'
import React, { useEffect } from 'react';
import "./hero.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
  

    useEffect(()=>{
        
        const tls = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",
            }
        });
        tls.fromTo("#heroimgugc",{
            x:30,opacity:0
        },{
            x:0,opacity:1,duration:2
        },"anim1")
        .fromTo("#star1",{y:10,rotate:0},{y:0,rotate:5,yoyo:true,repeat: -1,duration:1,ease:"power1.inOut"},"anim1")
       
        .fromTo("#herotxt h1",{y:20,opacity:0},{opacity:1,y:0,duration:.5})
        .fromTo("#herotxt p",{y:20,opacity:0},{opacity:1,y:0,duration:.5})
        .fromTo("#herotxt div",{y:10,opacity:0},{opacity:1,y:0,duration:1},"anim2")
        .fromTo("#star2",{opacity:0,rotate:50,y:-40},{opacity:1,rotate:0,y:0,duration:1},"anim2")
        .fromTo("#particlehero",{y:10,opacity:0},{opacity:1,y:0,duration:1},"anim2")
    },[])
    return (
        <div id='hero'>
            <div id='herotxt'>
                <h1>Ugc By Rabab</h1>
                <p>Rabab brings you the most inspiring user-generated content, from photography to art, all in one place.
                </p>
                <a href="/#about"  >  <div onClick={()=>{
                  
                }}>About Me</div></a>
            </div>
            <div id='heroimgugc'>
                 <img src='./particle1.0.png' id='particlehero'/>
            <img src='./star2.png' id='star2'/>
            </div>

            <img src='./star1.png' id='star1'/>
        </div>
    );
}

export default Hero;
