import { TitleLG, TitleXXXL } from "@/tokens/typography";
import styled, { css } from "styled-components";

export const TechnologiesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  position: relative;

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
`;

const boxBase = css`
  padding: 3.25rem 3.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.color.gradientYellow};

  &::after {
    content: "";
    position: absolute;
    inset: -0.063rem;
    border: 0.063rem solid ${({ theme }) => theme.borderColor};
    pointer-events: none;
  }
`;

export const Box1 = styled.div`
  ${boxBase}
  margin-left: 0.030rem;
  border-left: none;
  grid-row: 1 / span 2;
  grid-column: 1;

  &::after {
    border-left: none;
  }
`;

export const Box2 = styled.div`
  ${boxBase}
  width: calc(100% - 0.063rem);
  margin-left: 0.063rem;
  grid-row: 2 / span 2;
  grid-column: 2;
`;

export const Box3 = styled.div`
  ${boxBase}
  width: calc(100% - 0.063rem);
  margin-left: 0.063rem;
  grid-row: 3 / span 2;
  grid-column: 3;
`;

export const Circle = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grey};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Title = styled(TitleXXXL)`
  color: ${({ theme }) => theme.contentColor};
`;

export const Description = styled(TitleLG)`
  color: ${({ theme }) => theme.contentColor};
`;
