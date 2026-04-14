import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Introduction from "@/src/components/About/Introduction";
import Approach from "@/src/components/About/Approach";
import Experience from "@/src/components/About/Experience";
import { getSingleton } from "@/src/sanity/lib/singleton";

export default async function About() {
  const aboutIntroData = await getSingleton("aboutIntro");
  const aboutApproachData = await getSingleton("aboutApproach");
  const aboutExperienceData = await getSingleton("aboutExperience");

  return (
    <>
      <PaddingWrapper>
        <Introduction data={aboutIntroData} />
        <Approach data={aboutApproachData} />
        <Experience data={aboutExperienceData} />
      </PaddingWrapper>
    </>
  );
}
