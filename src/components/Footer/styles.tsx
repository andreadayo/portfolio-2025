import styled from "styled-components";
import { SubtitleXS, BodyXS, BodyBase } from "@tokens/typography";
import Link from "next/link";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const ThanksContainer = styled.div`
  width: 100%;
`;

export const TwoColumns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.bgColor};
  z-index: 10;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 1.5rem 3.25rem;
  }
`;

export const MessageText = styled(BodyBase)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    &:first-of-type {
      outline: 0.063rem solid ${({ theme }) => theme.borderColor};
      z-index: 10;
    }
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 2rem 3.25rem;
    gap: 0.75rem;
  }
`;

export const LinkItem = styled(Link)`
  width: max-content;
  color: ${({ theme }) => theme.contentColor};
`;

export const LinkText = styled(BodyBase)`
  color: ${({ theme }) => theme.contentColor};
`;

export const CopyrightContainer = styled.div`
  width: 100%;
  height: 2.25rem;
  display: flex;
  align-items: center;
`;

export const CopyrightWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
`;

export const CopyrightText = styled(BodyXS)`
  color: ${({ theme }) => theme.contentColor};
`;

export const Button = styled.button`
  width: max-content;
  height: 2.25rem;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.invertedBGColor};
  border: none;
`;

export const Label = styled(SubtitleXS)`
  color: ${({ theme }) => theme.invertedContentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
