"use client";

import { Divider } from "@/src/components/Divider";
import { TextContainer, Text } from "./styles";

export default function Description() {
  return (
    <>
      <Divider type="yellow">Description</Divider>
      <TextContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          leo sapien. Maecenas in nisl eu ligula egestas finibus. Maecenas sed
          nisi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer sed leo sapien. Maecenas in nisl eu ligula egestas finibus.
          Maecenas sed nisi ligula.
        </Text>
      </TextContainer>
    </>
  );
}
