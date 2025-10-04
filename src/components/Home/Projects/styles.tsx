import styled from "styled-components";
import { SubtitleXS, TitleXL } from "@/tokens/typography";

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const ProjectRow = styled.div`
  width: 100%;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  border-bottom: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 1.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 2.25rem 3.25rem;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Title = styled(TitleXL)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme?.fontSize?.gigantic};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme?.fontSize?.xxgigantic};
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  gap: 1.25rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    gap: 2.25rem;
  }
`;

export const Detail = styled(SubtitleXS)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme?.fontSize?.sm};
  }
`;
