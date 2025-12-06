"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import { ReactNode } from "react";
import { Highlight, LinkItem } from "./styles";

const components: PortableTextComponents = {
  marks: {
    highlight: ({ children }: { children: ReactNode }) => (
      <Highlight>{children}</Highlight>
    ),
    link: ({ value, children }) => {
      const target = value?.newTab ? "_blank" : undefined;
      return (
        <LinkItem href={value?.href} target={target} rel="noopener noreferrer">
          {children}
        </LinkItem>
      );
    },
  },
  block: {
    normal: ({ children }) => <p style={{ margin: 0 }}>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
};

type RichTextProps = {
  value: PortableTextBlock[];
};

export default function RichText({ value }: RichTextProps) {
  return <PortableText value={value} components={components} />;
}
