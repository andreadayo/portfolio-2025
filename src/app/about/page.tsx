import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Introduction from "@/src/components/About/Introduction";
import Approach from "@/src/components/About/Approach";
import Experience from "@/src/components/About/Experience";

export default function Home() {
  return (
    <>
      <PaddingWrapper>
        <Introduction />
        <Approach />
        <Experience />
      </PaddingWrapper>
    </>
  );
}
