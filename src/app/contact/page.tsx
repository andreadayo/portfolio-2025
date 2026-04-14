import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Contact from "@/src/components/Contact";
import { getSingleton } from "@/src/sanity/lib/singleton";

export default async function Home() {
  const contactData = await getSingleton("contact");

  return (
    <>
      <PaddingWrapper>
        <Contact data={contactData} />
      </PaddingWrapper>
    </>
  );
}
