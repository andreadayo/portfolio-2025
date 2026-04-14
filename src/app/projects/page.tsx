import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Title from "@/src/components/Projects/Title";
import Main from "@/src/components/Projects/Main";
import { getSingleton } from "@/src/sanity/lib/singleton";
import { client } from "@/src/sanity/lib/client";

export default async function Projects() {
  const projectsTitleData = await getSingleton("projects");
  const projectsItemData = await client.fetch(
    `*[_type == "projectItem" && isShown == true && isFeatured == true] | order(date desc)`,
  );
  const projectsMoreData = await client.fetch(
    `*[_type == "projectItem" && isShown == true && isFeatured == false] | order(date desc)`,
  );

  return (
    <>
      <PaddingWrapper>
        <Title data={projectsTitleData} />
        <Main
          featuredProjects={projectsItemData}
          moreProjects={projectsMoreData}
        />
      </PaddingWrapper>
    </>
  );
}
