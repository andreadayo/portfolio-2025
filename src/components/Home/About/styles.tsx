import styled from "styled-components";
import { TitleXXXL, BodyLG } from "@tokens/typography";

export const AboutContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 2fr;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const ElementsContainer = styled.div`
  width: 100%;
  height: 100%;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;
export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 6.25rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Heading = styled(TitleXXXL)`
  color: ${({ theme }) => theme.contentColor};
`;

export const Text = styled(BodyLG)`
  color: ${({ theme }) => theme.contentColor};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.textAccentColor};
`;
