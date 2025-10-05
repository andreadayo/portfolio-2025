import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import Introduction from "@/src/components/About/Introduction";
import Approach from "@/src/components/About/Approach";

export default function Home() {
  return (
    <>
      <PaddingWrapper>
        <Introduction />
        <Approach />
      </PaddingWrapper>
    </>
  );
}
