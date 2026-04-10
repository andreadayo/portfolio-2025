import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Title from "@/src/components/Projects/Title";
import List from "@/src/components/Projects/List";
import MoreProjects from "@/src/components/MoreProjects";
import { getSingleton } from "@/src/sanity/lib/singleton";
import { client } from "@/src/sanity/lib/client";

export default async function Projects() {
  const projectsTitleData = await getSingleton("projects");
  const projectsItemData = await client.fetch(
    `*[_type == "projectItem" && isShown == true && isFeatured == true] | order(date desc)`
  );

  return (
    <>
      <PaddingWrapper>
        <Title data={projectsTitleData} />
        <List data={projectsItemData} />
        <MoreProjects count={6} />
      </PaddingWrapper>
    </>
  );
}
