import styled from "styled-components";
import { TitleXL, BodyBase } from "@tokens/typography";

export const AboutContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "second"
    "first";
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    grid-template-rows: unset;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "second first";
  }
`;

export const ElementsContainer = styled.div`
  position: relative;
  grid-area: first;
  width: 100%;
  height: 100%;
  max-height: 16rem;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    height: auto;
    max-height: none;
  }
`;

export const TextContainer = styled.div`
  grid-area: second;
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 3.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 4.5rem 3.25rem;
    gap: 1.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    padding: 6.25rem 3.25rem;
  }
`;

export const Heading = styled(TitleXL)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme?.fontSize?.xxxl};
  }
`;

export const Text = styled(BodyBase)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
