import { create } from 'zustand';

interface MetricsState {
  revenue: number;
  expenses: number;
  netProfit: number;
  objective: number;
  progress: number;
}

interface AppStore {
  metrics: MetricsState;
  darkMode: boolean;
  toggleDarkMode: () => void;
  updateMetrics: (metrics: Partial<MetricsState>) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  metrics: {
    revenue: 1240,
    expenses: 340,
    netProfit: 900,
    objective: 1200,
    progress: 75,
  },
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  updateMetrics: (metrics) =>
    set((state) => ({
      metrics: { ...state.metrics, ...metrics },
    })),
}));