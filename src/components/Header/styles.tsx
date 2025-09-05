import styled from "styled-components";
import { SubtitleSM } from "@tokens/typography";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgColor};
  outline: 0.125rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    height: 3.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    display: grid;
    grid-template-columns: 2fr 4fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xl}) {
    grid-template-columns: 4.5fr 4.5fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.xxl}) {
    grid-template-columns: 5fr 4fr;
  }
`;

export const Logo = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accentColor};
  outline: 0.125rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    width: 3.25rem;
    height: 3.25rem;
  }
`;

export const Text = styled(SubtitleSM)`
  text-transform: uppercase;
`;

export const HeaderActions = styled.div<{ open?: boolean }>`
  z-index: 10;
  position: absolute;
  top: 2.5rem;
  left: 0;
  width: 100%;
  height: auto;
  justify-content: flex-end;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    top: 3.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    position: static;
    height: 3.25rem;
    display: flex;
    flex-direction: row;
    outline: 0.125rem solid ${({ theme }) => theme.borderColor};
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;
  background-color: ${({ theme }) => theme.bgColor};
  outline: 0.125rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    flex: 1;
    height: 3.25rem;
    flex-direction: row;
    align-items: center;
  }
`;

export const Status = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.bgColor}; /* base */
  outline: 0.125rem solid ${({ theme }) => theme.borderColor};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.color.gradientYellow}; /* overlay */
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1; /* ensure content stays above gradient */
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    width: auto;
    height: 3.25rem;
  }
`;

export const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accentColor};
  border: 0.105rem solid ${({ theme }) => theme.borderColor};
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.invertedBGColor};
  color: ${({ theme }) => theme.invertedContentColor};
  border: none;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    height: 3.25rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    width: max-content;
  }
`;

export const MenuButton = styled.button`
  justify-self: flex-end;
  width: 3.25rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.invertedBGColor};
  color: ${({ theme }) => theme.invertedContentColor};
  border: none;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.lg}) {
    display: none;
  }
`;
