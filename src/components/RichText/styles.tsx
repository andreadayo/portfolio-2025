import styled from "styled-components";
import Link from "next/link";

export const Highlight = styled.span`
  color: ${({ theme }) => theme.textAccentColor};
`;

export const LinkItem = styled(Link)`
  color: ${({ theme }) => theme.textAccentColor};
  text-decoration: underline;

  &:visited {
    color: ${({ theme }) => theme.textAccentColor};
  }
`;
