import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Images from "./components/images";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
 <Nav/>
 <Hero/>
 <About/>
 <Portfolio/>
 <Images/>
 <Contact/>
 <Footer/>

 </>
  );
}
