import styled from "styled-components";
import { TitleXXXGigantic } from "@tokens/typography";

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  white-space: nowrap;
  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Text = styled(TitleXXXGigantic)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;
`;

export const Icon = styled.span`
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 50%;
`;
