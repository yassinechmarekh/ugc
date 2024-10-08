'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./images.css"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Images = () => {
    useEffect(() => {
        //Runs only on the first render
    
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#gallery",
                start: "top 80%",
                end: "top 5%",
               
                toggleActions: "play none none reverse",
            }
        });
        tls2.to("#img1", {
            opacity: 1,
            x:0,
    
            duration: 2,
            ease: "power1.inOut"
        },"anim5").to("#img4", {
            opacity: 1,
    x:0,
            duration: 2,
            ease: "power1.inOut",
            stagger:.4
        },"anim5").to("#img2", {
            opacity: 1,
    y:0,
            duration: 2,
            ease: "power1.inOut",
            stagger:.4
        },"anim5").to("#img3", {
            opacity: 1,
    y:0,
            duration: 2,
            ease: "power1.inOut",
            stagger:.4
        },"anim5")
    
    }, []);
    return (
       <div id='gallerycon'>
        <h2>My Ugc Gallery</h2>
             <div id='gallery'>
            <img src='./ugcimg1.jpg' id='img1'/>
            <div>
                <img src='./ugcimg3.jpg' id='img2'/>
                <img src='./ugcimg2.jpg' id='img3'/>
            </div>
            <img src='./ugc4.jpg' id='img4'/>
        </div>
        </div>
        
    );
}

export default Images;
