import styled from "styled-components";
import { SubtitleSM } from "@tokens/typography";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3.25rem;
  display: grid;
  grid-template-columns: 5fr 4fr;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgColor};
  border-bottom: 0.125rem solid ${({ theme }) => theme.borderColor};
`;

export const Logo = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accentColor};
  border: 0.125rem solid ${({ theme }) => theme.borderColor};
  border-top: none;
`;

export const Text = styled(SubtitleSM)`
  text-transform: uppercase;
`;

export const RightContainer = styled.div`
  height: 3.25rem;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  border: 0.125rem solid ${({ theme }) => theme.borderColor};
  border-top: none;
`;

export const LinksContainer = styled.div`
  flex: 1;
  height: 3.25rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-right: 0.125rem solid ${({ theme }) => theme.borderColor};
`;

export const Status = styled.div`
  height: 3.25rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${({ theme }) => theme.color.gradientYellow};
`;

export const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accentColor};
  border: 0.105rem solid ${({ theme }) => theme.borderColor};
`;

export const Button = styled.button`
  width: max-content;
  height: 3.25rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.invertedBGColor};
  color: ${({ theme }) => theme.invertedContentColor};
  border: none;
`;
