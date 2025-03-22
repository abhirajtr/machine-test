import { BREAKPOINTS } from "@src/constants/styles";
import { useThemeStore } from "@src/store/themeState";
import { ThemeConfig } from "antd";

export const useTheme = () => {
  const { themeColor } = useThemeStore(state => state);

  const themeConfig: ThemeConfig = {
    components: {
      Layout: {
        headerBg: "#ffffff",
        bodyBg: "#ededed",
        headerPadding: "0 30px"
      },
      Typography: {
        fontWeightStrong: 700
      }
    },
    token: {
      screenXS: BREAKPOINTS.xs,
      screenSM: BREAKPOINTS.sm,
      screenMD: BREAKPOINTS.md,
      screenLG: BREAKPOINTS.lg,
      screenXL: BREAKPOINTS.xl,
      screenXXL: BREAKPOINTS.xxl,
      ...themeColor
    },
    cssVar: true
    // algorithm: theme.darkAlgorithm
  };
  return {
    themeConfig
  };
};
