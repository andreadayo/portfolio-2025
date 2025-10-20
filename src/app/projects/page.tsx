import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Title from "@/src/components/Projects/Title";
import List from "@/src/components/Projects/List";
import More from "@/src/components/MoreProjects";

export default function Projects() {
  return (
    <>
      <PaddingWrapper>
        <Title />
        <List />
        <More />
      </PaddingWrapper>
    </>
  );
}
