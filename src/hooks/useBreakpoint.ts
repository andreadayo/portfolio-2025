import { useTheme } from "styled-components";

export function useBreakpoint() {
  const theme = useTheme();

  const parse = (key: keyof typeof theme.breakpoint) =>
    Number(theme.breakpoint[key].replace("px", ""));

  return {
    xs: parse("xs"),
    sm: parse("sm"),
    md: parse("md"),
    lg: parse("lg"),
    xl: parse("xl"),
    xxl: parse("xxl"),
    xxxl: parse("xxxl"),
  };
}
