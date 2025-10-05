import styled from "styled-components";
import { TitleXL, TitleBase, TitleSM } from "@tokens/typography";

export const AboutContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    grid-template-rows: unset;
    grid-template-columns: 1fr 2fr;
  }
`;

export const ElementsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 3.5rem 2.5rem;
    gap: 2.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    padding: 3.75rem 3.25rem;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 3.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    gap: 1.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    padding: 3.75rem 3.25rem;
  }
`;

export const Heading = styled(TitleXL)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme?.fontSize?.xxxl};
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.textAccentColor};
`;

// ListItem Styles
export const ItemContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 0.063rem solid ${({ theme }) => theme.color.grey};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xs}) {
    flex-direction: row;
    gap: 1.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 2.25rem 2.5rem;
    align-items: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 0;
    border-bottom: none;
  }
`;

export const LogoContainer = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.color.grey};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    width: auto;
    height: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const CompanyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CompanyName = styled(TitleBase)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const Position = styled(TitleSM)`
  color: ${({ theme }) => theme.color.darkGrey};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const Duration = styled(TitleSM)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
