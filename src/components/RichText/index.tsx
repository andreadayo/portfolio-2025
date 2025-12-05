"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { ReactNode } from "react";
import { Highlight, LinkItem } from "./styles";

export type RichTextBlock = {
  _type: "block";
  _key: string;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  level?: number;
  children?: Array<{
    _type: "span";
    _key: string;
    text?: string;
    marks?: string[];
  }>;
  markDefs?: Array<
    | {
        _key: string;
        _type: "link";
        href?: string;
        newTab?: boolean;
      }
    | {
        _key: string;
        _type: "highlight";
      }
  >;
};

export type RichText = RichTextBlock[];

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
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
};

type RichTextProps = {
  value: RichText;
};

export default function RichText({ value }: RichTextProps) {
  return <PortableText value={value} components={components} />;
}
