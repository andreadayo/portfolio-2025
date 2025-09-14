import styled from "styled-components";
import { TitleXL, TitleBase } from "@tokens/typography";

export const HeroContainer = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xs}) {
    height: 28rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    height: 40rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    height: 26rem;
    display: grid;
    grid-template-columns: 1fr calc(100% / 6 * 4 - 16.375rem);
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    grid-template-columns: 4.5fr 4.5fr;
    height: 32rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xxl}) {
    grid-template-columns: 5fr 4.5fr;
  }
`;

export const HeroTextContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.bgColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 3.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 6.25rem 3.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xxl}) {
    flex: 1;
  }
`;

export const HeroSmallTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const HeroTextFirst = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeroText = styled(TitleXL)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xxl}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

export const HeroSmallText = styled(TitleBase)`
  color: ${({ theme }) => theme.contentColor};
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.accentColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.textAccentColor};
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grey};
`;
