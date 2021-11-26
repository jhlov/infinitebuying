import React from "react";
import PeriodRsi from "./PeriodRsi";
import "./Rsi.scss";
import TodayRsi from "./TodayRsi";

export default function Rsi() {
  return (
    <div className="rsi py-4">
      <TodayRsi />
      <hr />
      <PeriodRsi />
    </div>
  );
}
