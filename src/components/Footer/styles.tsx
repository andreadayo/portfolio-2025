import styled from "styled-components";
import {
  TitleGigantic,
  SubtitleSM,
  BodyLG,
  BodyBase,
  BodyXS,
} from "@tokens/typography";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  outline: 0.125rem solid ${({ theme }) => theme.borderColor};
`;

export const ThanksContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TwoColumns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  outline: 0.125rem solid ${({ theme }) => theme.borderColor};
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 3.25rem;
  outline: 0.125rem solid ${({ theme }) => theme.borderColor};
`;

export const MessageText = styled(BodyLG)`
  color: ${({ theme }) => theme.contentColor};
`;

export const EmailLink = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  overflow-x: hidden;

  &:hover {
    background: ${({ theme }) => theme.color.gradientYellow};
  }
`;

export const Address = styled(TitleGigantic)`
  color: ${({ theme }) => theme.contentColor};
`;

export const Icon = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grey};
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    outline: 0.125rem solid ${({ theme }) => theme.borderColor};
    z-index: 10;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 3.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const LinkItem = styled(BodyBase)`
  color: ${({ theme }) => theme.contentColor};
`;

export const CopyrightContainer = styled.div`
  width: 100%;
  height: 2.25rem;
  display: flex;
  align-items: center;
`;

export const CopyrightWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
`;

export const CopyrightText = styled(BodyXS)`
  color: ${({ theme }) => theme.contentColor};
`;

export const Button = styled.button`
  width: max-content;
  height: 2.25rem;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.invertedBGColor};
  border: none;
`;

export const Label = styled(SubtitleSM)`
  color: ${({ theme }) => theme.invertedContentColor};
  text-transform: uppercase;
`;
