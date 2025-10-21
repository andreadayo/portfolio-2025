import styled from "styled-components";
import { BodyBase } from "@/tokens/typography";

export const TextContainer = styled.div`
  grid-area: second;
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 3.5rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    padding: 2.5 3.25rem;
    gap: 1.5rem;
  }
`;

export const Text = styled(BodyBase)`
  color: ${({ theme }) => theme.contentColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
