import styled from "styled-components";
import { TitleMD } from "@tokens/typography";
import Image from "next/image";

// TODO: Reuse styles from Home/About
export const AboutContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 11rem);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  z-index: 10;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    min-height: calc(100vh - 15.5rem);
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    grid-template-rows: unset;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ElementsContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    display: block;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.color.gradientYellow}; /* overlay */
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1; /* ensure content stays above gradient */
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 3.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 4.5rem 3.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    padding: 6.25rem 3.25rem;
  }
`;

export const Heading = styled(TitleMD)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme?.fontSize?.xl};
  }
`;

export const Icon = styled(Image)`
  width: 3.75rem;
  height: 3.75rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    width: 5rem;
    height: 5rem;
  }
`;
