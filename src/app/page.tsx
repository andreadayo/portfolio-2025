import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Hero from "@components/Home/Hero";
import About from "@components/Home/About";

export default function Home() {
  return (
    <>
      <PaddingWrapper>
        <Hero />
        <About />
      </PaddingWrapper>
    </>
  );
}
