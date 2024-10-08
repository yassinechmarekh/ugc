'use client'
import React, { useEffect, useRef, useState } from 'react';
import "./nav.css"
import Link from 'next/link';

import { useRouter } from 'next/router';

const Nav = () => {
  const [isopen,setopen]=useState(false)

  const navphone=useRef()
  
  useEffect(()=>{
if(isopen){
if(navphone){
  navphone.current.style.transform="scale(1)"
}
}else{
 navphone.current.style.transform="scale(0)"
}

  },[isopen])
    return (
        <div id='nav'>
            <span>UGC BY Rabab</span>
            <ul id='listpc'>
              
             <a href="/"> <li >  Home</li></a>
             <a href="/#about"> <li >  About Me</li></a>
             <a href="/#portfolio"> <li >  Portfolio</li></a>
                
            </ul>
            <div><a href='/#contactsection' id='contact'>Contact Me</a></div>
            <img src='./menu.png' id='menuicon' onClick={()=>{
              setopen(true)
            }}/>
            <div id='navphone' ref={navphone}>
              <img src='./reject.png' id='closenav' onClick={()=>{
                setopen(false)
              }}/>
            <ul>
          <a href="/">  <li onClick={()=>{
               setopen(false)
                navphone.current.style.transform="ScaleY(0)"
              }}>  Home</li></a>
              <a href="/#about"> <li onClick={()=>{
               setopen(false)
                 navphone.current.style.transform="ScaleY(0)"
              }}> About Me</li></a>
            <a href="/#portfolio">  <li onClick={()=>{
                 setopen(false)
                 navphone.current.style.transform="ScaleY(0)"
              }}>  Portfolio</li></a>
                   <a href="/#contactsection"> <li onClick={()=>{
                setopen(false)
                 navphone.current.style.transform="ScaleY(0)"
              }}>  Contact Me</li></a>
                
                
            </ul>
 
            </div>
        </div>
    );
}

export default Nav;
