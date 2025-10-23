import styled from "styled-components";
import { TitleXL, BodyBase } from "@tokens/typography";

export const AboutContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    grid-template-rows: unset;
    grid-template-columns: 1fr 2fr;
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
    padding: 3.75rem 3.25rem;
    gap: 1.5rem;
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

export const Text = styled(BodyBase)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.textAccentColor};
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 3.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 3.75rem 3.25rem;
    gap: 2.25rem;
  }
`;

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    flex-direction: row;
    gap: 2rem;
  }
`;
