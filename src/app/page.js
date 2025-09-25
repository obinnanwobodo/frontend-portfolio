import About from "@/Components/About/About";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import Recent from "@/Components/Recent works/Recent";
import Services from "@/Components/Services/Services";
import Skills from "@/Components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    
    <div>

<div id="#">
  <Navbar/>
</div>


<div>
  <Hero/>
</div>


<div id="about">
  <About/>
</div>


<div id="skills">
  <Skills/>
</div>


<div id="services">
  <Services/>
</div>


<div id="projects">
  <Recent/>
</div>

    </div>
  );
}
