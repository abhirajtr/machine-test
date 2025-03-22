import { ThemeConfig } from "antd";
import { BREAKPOINTS } from "./constants/styles";

export const themeConfig: ThemeConfig = {
  components: {
    Layout: {
      headerBg: "#ffffff",
      bodyBg: "#ededed",
      headerPadding: "0 30px"
    }
  },
  token: {
    screenXS: BREAKPOINTS.xs,
    screenSM: BREAKPOINTS.sm,
    screenMD: BREAKPOINTS.md,
    screenLG: BREAKPOINTS.lg,
    screenXL: BREAKPOINTS.xl,
    screenXXL: BREAKPOINTS.xxl
  }
};
