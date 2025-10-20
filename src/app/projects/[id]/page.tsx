import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import ProjectTitle from "@/src/components/ProjectPreview/Title";
import Description from "@/src/components/ProjectPreview/Description";
import MoreProjects from "@/src/components/MoreProjects";

export default function ProjectPreview() {
  return (
    <>
      <PaddingWrapper>
        <ProjectTitle />
        <Description />
        {/* 
          Screenshots
          Documentation
         */}
        <MoreProjects />
      </PaddingWrapper>
    </>
  );
}
