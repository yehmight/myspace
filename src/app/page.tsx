import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/herosection";
import About from "./components/about";
import Desc from "./components/description";
import GalleryWrapper from "./components/GalleryWrapper";
import Skills from "./components/myskills";
import Service from "./components/service";

export default function Home() {
  return (
    <div>
      <Hero />
      <Desc />
      <About />
      <GalleryWrapper />
      <Skills />
      <Service />
    </div>
  );
}
