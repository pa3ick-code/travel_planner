import { create } from "zustand";

type State = {
    isDarkMode: boolean;
}

type Action = {
    updateIsDarkMode: (isDarkMode: State['isDarkMode'])=>void
}

const useStore = create<State & Action>((set)=>({
    isDarkMode: false,
    updateIsDarkMode: (isDarkMode)=>set(()=>({isDarkMode: isDarkMode}))
}));