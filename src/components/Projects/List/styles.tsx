import styled from "styled-components";
import { BodyLG, SubtitleXS, TitleXGigantic } from "@tokens/typography";

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
  grid-template-columns: 1fr 2fr;
`;

export const PreviewImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.grey};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3.75rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
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
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled(TitleXGigantic)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;
`;

export const Description = styled(BodyLG)`
  color: ${({ theme }) => theme.color.darkGrey};
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

export const Tag = styled(SubtitleXS)`
  color: ${({ theme }) => theme.contentColor};
  background-color: ${({ theme }) => theme.color.lightYellow};
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
`;
