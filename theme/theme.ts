import { DefaultTheme } from "styled-components";

import breakpoint from "./base/breakpoint";
import color from "./base/color";
import typography from "./base/typography";

const theme: DefaultTheme = {
  bgColor: color.color.white,
  contentColor: color.color.black,
  accentColor: color.color.yellow,
  textAccentColor: color.color.darkYellow,

  ...breakpoint,
  ...typography,
  ...color,
};

export default theme;
