import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    contentColor: string;
    invertedBGColor: string;
    invertedContentColor: string;

    borderColor: string;

    accentColor: string;
    textAccentColor: string;

    fontSize: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      gigantic: string;
      xgigantic: string;
      xgiganticPlus: string;
      xxgigantic: string;
      xxxgigantic: string;
    };
    breakpoint: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    color: {
      black: string;
      darkGrey: string;
      grey: string;
      white: string;

      darkYellow: string;
      yellow: string;
      lightYellow: string;

      gradientYellow: string;
    };
  }
}
