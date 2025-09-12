import styled from "styled-components";
import { azeretMono, neueMontreal } from "../theme/fonts";

const Title = styled.span`
  font-family: ${neueMontreal.style.fontFamily}, Arial, sans-serif;
  font-style: normal;
  font-weight: 450;
  letter-spacing: 0;
`;

export const TitleXXXGigantic = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.xxxgigantic};
`;

export const TitleXGigantic = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.xgiganticPlus};
`;
export const TitleGigantic = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.gigantic};
`;
export const TitleXXXL = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.xxxl};
`;
export const TitleXXL = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.xxl};
`;
export const TitleXL = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.xl};
`;
export const TitleLG = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.lg};
`;
export const TitleMD = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.md};
`;
export const TitleBase = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.base};
`;
export const TitleXS = styled(Title)`
  font-size: ${({ theme }) => theme?.fontSize?.xs};
`;

const Subtitle = styled.span`
  font-family: ${azeretMono.style.fontFamily}, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
`;

export const SubtitleGigantic = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.gigantic};
`;
export const SubtitleXXXL = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.xxxl};
`;
export const SubtitleXXL = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.xxl};
`;
export const SubtitleXL = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.xl};
`;
export const SubtitleLG = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.lg};
`;
export const SubtitleMD = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.md};
`;
export const SubtitleBase = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.base};
`;
export const SubtitleSM = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.sm};
`;
export const SubtitleXS = styled(Subtitle)`
  font-size: ${({ theme }) => theme?.fontSize?.xs};
`;

const Body = styled.span`
  font-family: ${neueMontreal.style.fontFamily}, Arial, sans-serif;
  font-style: normal;
  font-weight: 450;
  line-height: 135%;
  letter-spacing: 0;
`;

export const BodyGigantic = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.gigantic};
`;
export const BodyXXXL = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.xxxl};
`;
export const BodyXXL = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.xxl};
`;
export const BodyXL = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.xl};
`;
export const BodyLG = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.lg};
`;
export const BodyMD = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.md};
`;
export const BodyBase = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.base};
`;
export const BodySM = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.sm};
`;
export const BodyXS = styled(Body)`
  font-size: ${({ theme }) => theme?.fontSize?.xs};
`;
