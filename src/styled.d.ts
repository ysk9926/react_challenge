import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    titleClolr: string;
    textColor: string;
    accentColor: string;
    subBgColor: string;
    decreaseColor: string;
    increaseColor: string;
    flatColor: string;
    btnColor: string;
    btnHoverColor: string;
  }
}
