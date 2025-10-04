"use client";

import { Container, Item, Text, Icon } from "./styles";

type Props = {
  children: React.ReactNode;
  small?: boolean;
};

export default function MarqueeText({ children }: Props) {
  const REPEAT = 10;
  const content = Array.from({ length: REPEAT }, (_, i) => (
    <Item key={i}>
      <Text>{children}</Text>
      <Icon />
    </Item>
  ));

  return <Container>{content}</Container>;
}
