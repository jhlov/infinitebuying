import React, { useEffect, useState } from "react";
import { GoogleAdsense } from "./GoogleAdsense";
import PeriodRsi from "./PeriodRsi";
import "./Rsi.scss";
import TodayRsi from "./TodayRsi";
import { PeriodRsiData, ShowType, TickerType } from "./types";

export default function Rsi() {
  const [lastMonthRsiData, setLastMonthRsiData] =
    useState<PeriodRsiData | null>(null);
  const [showType, setShowType] = useState<ShowType>(
    (localStorage.getItem("show_type") as ShowType) ?? "all"
  );
  const [staredItemList, setStaredItemList] = useState<TickerType[]>([]);

  useEffect(() => {
    // init stared item
    const itemList = localStorage.getItem("star_item_list");
    if (itemList) {
      setStaredItemList(itemList.split(",") as TickerType[]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("star_item_list", staredItemList.join(","));
  }, [staredItemList]);

  const onClickStaredItem = (ticker: TickerType) => {
    if (staredItemList.includes(ticker)) {
      setStaredItemList(staredItemList.filter(e => e !== ticker));
    } else {
      setStaredItemList([...staredItemList, ticker]);
    }
  };

  return (
    <div className="rsi py-4">
      <TodayRsi
        showType={showType}
        setShowType={setShowType}
        staredItemList={staredItemList}
        onClickStaredItem={onClickStaredItem}
        lastMonthRsiData={lastMonthRsiData}
      />

      {/* google adsense */}
      <GoogleAdsense />

      <hr />
      <PeriodRsi
        showType={showType}
        staredItemList={staredItemList}
        setLastMonthRsiData={setLastMonthRsiData}
      />
    </div>
  );
}
