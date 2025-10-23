import { SubtitleXS } from "@/tokens/typography";
import { neueMontreal } from "@theme/fonts";
import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const InputLabel = styled(SubtitleXS)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;
  border: 0.063rem solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.contentColor};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${neueMontreal.style.fontFamily}, Arial, sans-serif;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 9rem;
  padding: 0.625rem 1rem;
  border: 0.063rem solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.contentColor};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${neueMontreal.style.fontFamily}, Arial, sans-serif;
  resize: none;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
