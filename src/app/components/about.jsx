'use client'
import React, { useEffect } from 'react';
import "./about.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const About = () => {
   
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{

        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 90%",
                end: "top -50%",
                toggleActions: "play none none reverse",
            }
        });
        const tls3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 10%",
                end: "top -50%",
                toggleActions: "play none none reverse",
                scrub:true
            }
        });
        if(window.innerWidth>1023){
            tls3.fromTo("#aboutimg",{scale:1},{scale:0.9,duration:3})
        }
        
        tls2.fromTo("#aboutimg",{
            y:20,opacity:0
        },{y:0,opacity:1,duration:1,ease:"power1.inOut"})
        .fromTo("#abouttxt p",{y:5,opacity:0},{y:0,opacity:1,duration:.5,stagger:.1})
        .fromTo("#aboutbtn",{opacity:0,y:10},{opacity:1,y:0,duration:.5,ease:"power1.inOut"})
    },[])
    const para="Hi, I’m Rabab, a Moroccan UGC creator based in Casablanca. I specialize in producing authentic, engaging content that connects brands with their audience in a meaningful way. With a fresh perspective and a passion for storytelling, I create high-quality visuals and reviews that align with your brand’s identity. My goal is to help you build trust and spark interest through relatable, creative content. Let’s collaborate to bring your brand’s vision to life! 💗"
    return (
        <div id='about'>
            <div id='abouttxt'>
<h2>About Me</h2>
<p>{para}</p>
<a href="/#portfolio"><div id='aboutbtn'>Check My Portfolio</div></a>
            </div>
            <img id='aboutimg' src='./ugcmr.jpg'/>
        </div>
    );
}

export default About;
