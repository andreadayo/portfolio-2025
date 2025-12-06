"use client";

import { Container, Item, Text, Icon } from "./styles";

type Props = {
  children: React.ReactNode;
  icon?: string;
  small?: boolean;
  href?: string;
};

export default function MarqueeText({ children, icon, small, href }: Props) {
  const REPEAT = 10;
  const content = Array.from({ length: REPEAT }, (_, i) => (
    <Item key={i}>
      <Text $small={small}>{children}</Text>
      <Icon
        src={icon ?? "/assets/fallback.svg"}
        alt="icon"
        width={36}
        height={36}
        $small={small}
      />
    </Item>
  ));

  return small && href ? (
    <Container as="a" href={href} $small={small}>
      {content}
    </Container>
  ) : (
    <Container as="div" $small={small}>
      {content}
    </Container>
  );
}
