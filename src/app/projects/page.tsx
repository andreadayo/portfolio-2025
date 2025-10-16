import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Title from "@/src/components/Projects/Title";
import List from "@/src/components/Projects/List";

export default function Projects() {
  return (
    <>
      <PaddingWrapper>
        <Title />
        <List />
      </PaddingWrapper>
    </>
  );
}
