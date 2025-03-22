import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  collapsed: boolean;
};

type Actions = {
  toggleCollapsed: () => void;
  setCollapsed: (collapsed: boolean) => void;
};

export const useSideNavStore = create<State & Actions>()(
  immer(set => ({
    collapsed: false,
    toggleCollapsed: () =>
      set(state => {
        state.collapsed = !state.collapsed;
      }),
    setCollapsed: (collapsed: boolean) =>
      set(state => {
        state.collapsed = collapsed;
      })
  }))
);
