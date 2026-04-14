import { defineArrayMember } from "sanity";
import { HighlightIcon } from "@sanity/icons";
import styled from "styled-components";

const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.textAccentColor};
`;

export const HighlightDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => <HighlightSpan data-mark="highlight">{children}</HighlightSpan>;

export const richText = defineArrayMember({
  type: "block",
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
      { title: "Underline", value: "underline" },
      {
        title: "Highlight",
        value: "highlight",
        icon: HighlightIcon,
        component: HighlightDecorator,
      },
    ],
    annotations: [
      {
        name: "link",
        type: "object",
        title: "Link",
        fields: [
          {
            name: "href",
            type: "url",
            title: "URL",
            validation: (Rule) =>
              Rule.uri({
                scheme: ["http", "https", "mailto", "tel"],
              }),
          },
          {
            name: "newTab",
            type: "boolean",
            title: "Open in new tab",
            initialValue: true,
          },
        ],
      },
    ],
  },
});
