import styled from "styled-components";
import { BodyBase, SubtitleXXS, TitleXXL } from "@tokens/typography";

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const PreviewImage = styled.div`
  aspect-ratio: 4 / 3;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.grey};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    aspect-ratio: auto;
  }

  @media only screen and (min-width: 1300px) {
    aspect-ratio: 4 / 3;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;
  background: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${({ theme }) => theme.color.gradientYellow};
    z-index: 0;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 2.25rem 2.5rem;
  }

  @media only screen and (min-width: 1300px) {
    padding: 1.5rem 3.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    padding: 2.75rem 3.75rem;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    gap: 1rem;
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

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    display: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    display: flex;
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
