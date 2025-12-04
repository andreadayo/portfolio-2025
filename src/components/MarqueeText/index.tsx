"use client";

import { Container, Item, Text, Icon } from "./styles";

type Props = {
  children: React.ReactNode;
  icon?: string;
  small?: boolean;
};

export default function MarqueeText({ children, icon }: Props) {
  const REPEAT = 10;
  const content = Array.from({ length: REPEAT }, (_, i) => (
    <Item key={i}>
      <Text>{children}</Text>
      <Icon
        src={icon ?? "/assets/fallback.svg"}
        alt="icon"
        width={36}
        height={36}
      />
    </Item>
  ));

  return <Container>{content}</Container>;
}
