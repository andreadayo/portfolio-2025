import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Hero from "@components/Home/Hero";
import About from "@components/Home/About";
import Technologies from "@components/Home/Technologies";
import Projects from "@components/Home/Projects";

export default function Home() {
  return (
    <>
      <PaddingWrapper>
        <Hero />
        <About />
        <Technologies />
        <Projects />
      </PaddingWrapper>
    </>
  );
}
