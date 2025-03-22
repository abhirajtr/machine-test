import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  themeColor: {
    colorPrimary: string;
    colorWarning: string;
    colorSuccess: string;
  };
}

type Actions = {
  updateThemeColors: (colors: any) => void;
};

export const useThemeStore = create<State & Actions>()(
  immer(set => ({
    themeColor: {
      colorPrimary: "#1890FF",
      colorWarning: "#52c41a",
      colorSuccess: "#faad14"
    },
    updateThemeColors: colors =>
      set(state => {
        state.themeColor = {
          ...state.themeColor,
          ...colors
        };
      })
  }))
);
