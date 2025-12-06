import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Introduction from "@/src/components/About/Introduction";
import Approach from "@/src/components/About/Approach";
import Experience from "@/src/components/About/Experience";
import { getSingleton } from "@/src/sanity/lib/singleton";

export default async function About() {
  const aboutIntroData = await getSingleton("aboutIntro");

  return (
    <>
      <PaddingWrapper>
        <Introduction data={aboutIntroData} />
        <Approach />
        <Experience />
      </PaddingWrapper>
    </>
  );
}
