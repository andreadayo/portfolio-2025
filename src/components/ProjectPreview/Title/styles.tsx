import styled from "styled-components";
import { TitleXXL, BodyBase, SubtitleXXS } from "@/tokens/typography";

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    gap: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 2.25rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    z-index: 999; // above header
  }

  @media only screen and (min-width: 1300px) {
    padding: 1.5rem 3.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    padding: 2.75rem 3.75rem;
  }
`;

export const Title = styled(TitleXXL)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    font-size: ${({ theme }) => theme.fontSize.gigantic};
  }

  @media only screen and (min-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.xgigantic};
  }
`;

export const Description = styled(BodyBase)`
  color: ${({ theme }) => theme.color.darkGrey};

  @media only screen and (min-width: 1300px) {
    font-size: ${({ theme }) => theme?.fontSize?.md};
  }
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    gap: 1rem;
  }
`;

export const Tag = styled(SubtitleXXS)`
  color: ${({ theme }) => theme.contentColor};
  background-color: ${({ theme }) => theme.color.lightYellow};
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 0.5rem 0.75rem;
    font-size: ${({ theme }) => theme?.fontSize?.xs};
  }
`;

export const PreviewImage = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;
