import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Hero from "@components/Home/Hero";
import About from "@components/Home/About";
import Technologies from "@components/Home/Technologies";
import Projects from "@components/Home/Projects";
import { getSingleton } from "@/src/sanity/lib/singleton";

export default async function Home() {
  const homeHero = await getSingleton("homeHero");

  return (
    <>
      <PaddingWrapper>
        <Hero data={homeHero} />
        <About />
        <Technologies />
        <Projects />
      </PaddingWrapper>
    </>
  );
}
