"use client";

import styled from "styled-components";

export const PaddingWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 0 2rem;
  }
`;
