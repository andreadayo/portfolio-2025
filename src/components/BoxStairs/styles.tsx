import { TitleXL, TitleBase } from "@/tokens/typography";
import styled from "styled-components";

export const StairsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: -0.063rem;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0;

    /* divider after col 1 */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(100% / 3); /* after 1st col */
      width: 0.063rem;
      background: ${({ theme }) => theme.color.grey};
      z-index: 0; /* stay behind children */
    }

    /* divider after col 2 */
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc((100% / 3) * 2); /* after 2nd col */
      width: 0.063rem;
      background: ${({ theme }) => theme.color.grey};
      z-index: 0; /* stay behind children */
    }

    /* children */
    & > * {
      position: relative;
      z-index: 1;
    }
  }
`;

export const Box = styled.div`
  padding: 2.25rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.color.gradientYellow};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  border: none;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 3.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    outline: none;
    border: 0.063rem solid ${({ theme }) => theme.borderColor};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    padding: 3.25rem 3.75rem;
  }

  &.box-1 {
    margin-left: 0;
    border-left: none;

    @media only screen and (min-width: ${({ theme }) =>
        theme?.breakpoint?.md}) {
      width: calc(100% + 0.126rem);
      margin-left: -0.063rem;
      grid-row: 1 / span 2;
      grid-column: 1;
    }
  }

  &.box-2 {
    width: 100%;
    margin-top: 0.063rem;
    margin-left: 0;

    @media only screen and (min-width: ${({ theme }) =>
        theme?.breakpoint?.md}) {
      width: calc(100% + 0.063rem);
      margin-left: 0.03rem;
      margin-top: 0;
      grid-row: 2 / span 2;
      grid-column: 2;
    }
  }

  &.box-3 {
    width: 100%;
    margin-top: 0.063rem;
    margin-left: 0;

    @media only screen and (min-width: ${({ theme }) =>
        theme?.breakpoint?.md}) {
      width: calc(100% + 0.003rem);
      margin-left: 0.063rem;
      margin-top: 0;
      grid-row: 3 / span 2;
      grid-column: 3;
    }
  }
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grey};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Title = styled(TitleXL)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

export const Description = styled(TitleBase)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
