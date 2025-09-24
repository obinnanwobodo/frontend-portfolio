import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
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


<div id="skills">
  <Skills/>
</div>


    </div>
  );
}
