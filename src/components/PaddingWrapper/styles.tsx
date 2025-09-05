"use client";

import styled from "styled-components";

export const PaddingWrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 0 2rem;
  }
`;
