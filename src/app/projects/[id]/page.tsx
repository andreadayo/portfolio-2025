import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import ProjectTitle from "@/src/components/ProjectPreview/Title";
import Description from "@/src/components/ProjectPreview/Description";
import Screenshots from "@/src/components/ProjectPreview/Screenshots";
import MoreProjects from "@/src/components/Projects/MoreProjects";
import { client } from "@/src/sanity/lib/client";
import { normalizeProjectType } from "@/src/components/Projects/Tab/utils";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export default async function ProjectPreview({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;

  const projectData = await client.fetch(
    `*[_type == "projectItem" && isShown == true && projectSlug.current == $slug][0]`,
    { slug: id },
  );

  if (!projectData) {
    notFound();
  }

  const relatedProjects = await client.fetch(
    `*[_type == "projectItem" && isShown == true && type == $type && projectSlug.current != $slug] | order(date desc)[0...3]`,
    { type: projectData.type, slug: id },
  );

  const selectedTab = normalizeProjectType(projectData.type) ?? "website";

  return (
    <>
      <PaddingWrapper>
        <ProjectTitle data={projectData} />
        <Description data={projectData} />
        <Screenshots data={projectData} />
        {/* TODO: Documentation */}
        <MoreProjects data={relatedProjects} selectedTab={selectedTab} />
      </PaddingWrapper>
    </>
  );
}
