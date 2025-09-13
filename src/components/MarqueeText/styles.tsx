import styled from "styled-components";
import { TitleXXGigantic } from "@tokens/typography";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  white-space: nowrap;
  overflow: hidden;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    gap: 2rem;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    gap: 2rem;
  }
`;

export const Text = styled(TitleXXGigantic)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    font-size: ${({ theme }) => theme.fontSize.xxxgigantic};
  }
`;

export const Icon = styled.span`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 50%;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    width: 3rem;
    height: 3rem;
  }
`;
