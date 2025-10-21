import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Title from "@/src/components/Projects/Title";
import List from "@/src/components/Projects/List";
import MoreProjects from "@/src/components/MoreProjects";

export default function Projects() {
  return (
    <>
      <PaddingWrapper>
        <Title />
        <List />
        <MoreProjects count={6} />
      </PaddingWrapper>
    </>
  );
}
