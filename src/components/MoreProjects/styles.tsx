import styled from "styled-components";
import { TitleBase } from "@tokens/typography";

export const GridContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridItem = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const PreviewImage = styled.div`
  aspect-ratio: 4 / 3;
  width: 100%;
  background: ${({ theme }) => theme.color.grey};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TitleBox = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    padding: 1rem;
  }
`;

export const Title = styled(TitleBase)`
  color: ${({ theme }) => theme.contentColor};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const ArrowBox = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.invertedBGColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const ArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
