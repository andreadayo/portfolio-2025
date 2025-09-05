import styled from "styled-components";
import { TitleXXXL } from "@tokens/typography";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 32rem; /* TODO: remove temporary height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    display: grid;
    grid-template-columns: 1fr calc(100% / 6 * 4 - 16.375rem);
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    grid-template-columns: 4.5fr 4.5fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xxl}) {
    grid-template-columns: 5fr 4.5fr;
  }
`;

export const HeroTextContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 6.25rem 3.25rem;
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const HeroText = styled(TitleXXXL)`
  color: ${({ theme }) => theme.contentColor};
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.accentColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;
