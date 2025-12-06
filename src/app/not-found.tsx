import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import NotFound from "@components/NotFound";
import { getSingleton } from "@/src/sanity/lib/singleton";

export default async function NotFoundPage() {
  const notFoundData = await getSingleton("notFound");

  return (
    <>
      <PaddingWrapper>
        <NotFound data={notFoundData} />
      </PaddingWrapper>
    </>
  );
}
