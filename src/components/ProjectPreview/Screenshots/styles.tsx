import styled from "styled-components";

export const GridContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
    gap: 2rem;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.color.grey};
`;
