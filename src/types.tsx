interface TodayRsiData {
  change: number;
  close: number;
  diff: number;
  rsi: number;
  volume: number;
  ticker: TickerType;
  sector?: string;
  recommendedRsi?: number;
  isStared?: boolean;
  gap?: number;
}

interface PeriodRsiData {
  close: {
    [key: string]: number[];
  };
  rsi: {
    [key: string]: number[];
  };
  timestamp: string[];
}

type ShowType = "all" | "stared";

type TickerType =
  | "BNKU"
  | "BULZ"
  | "CURE"
  | "DFEN"
  | "DPST"
  | "DRN"
  | "DUSL"
  | "FAS"
  | "FNGU"
  | "HIBL"
  | "LABU"
  | "MIDU"
  | "NAIL"
  | "PILL"
  | "RETL"
  | "SOXL"
  | "TECL"
  | "TNA"
  | "TPOR"
  | "TQQQ"
  | "UDOW"
  | "UPRO"
  | "UTSL"
  | "WANT"
  | "WEBL";

export type { TodayRsiData, PeriodRsiData, ShowType, TickerType };
