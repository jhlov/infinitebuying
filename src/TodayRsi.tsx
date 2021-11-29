import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { isBrowser, isMobile } from "react-device-detect";
import LoadingLayer from "./LoadingLayer";
import "./Rsi.scss";
import TickerList from "./tickerList";
import utils from "./utils";

interface TodayRsiData {
  change: number;
  close: number;
  diff: number;
  rsi: number;
  volume: number;
  ticker: TickerList;
  sector?: string;
  recommendedRsi?: number;
  isStared?: boolean;
}

type ShowType = "all" | "stared";

export default function TodayRsi() {
  const [showType, setShowType] = useState<ShowType>(
    (localStorage.getItem("show_type") as ShowType) ?? "all"
  );
  const [lastDate, setLastDate] = useState<string>("");
  const [curDate, setCurDate] = useState<string>("");
  const [todayRsiDatas, setTodayRsiDatas] = useState<TodayRsiData[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [staredItemList, setStaredItemList] = useState<TickerList[]>([]);

  const recommendedRsiList: { [key: string]: [number, string] } = {
    BNKU: [35, "금융"],
    BULZ: [65, "기술"],
    CURE: [45, "바이오"],
    DFEN: [40, "항공우주"],
    DPST: [35, "금융"],
    DRN: [40, "부동산"],
    DUSL: [40, "산업재"],
    FAS: [45, "금융"],
    FNGU: [55, "기술"],
    HIBL: [55, "S&P500"],
    LABU: [45, "바이오"],
    MIDU: [45, "중소형/소비재"],
    NAIL: [50, "건설"],
    PILL: [45, "바이오"],
    RETL: [50, "소매유통"],
    SOXL: [65, "기술"],
    TECL: [60, "기술"],
    TNA: [50, "중소형/소비재"],
    TPOR: [40, "운송"],
    TQQQ: [60, "기술"],
    UDOW: [50, "다우존스"],
    UPRO: [55, "S&P500"],
    UTSL: [35, "유틸리티"],
    WANT: [55, "중소형/소비재"],
    WEBL: [60, "기술"]
  };

  useEffect(() => {
    // init stared item
    const itemList = localStorage.getItem("star_item_list");
    if (itemList) {
      setStaredItemList(itemList.split(",") as TickerList[]);
    }

    initData();
  }, []);

  useEffect(() => {
    localStorage.setItem("star_item_list", staredItemList.join(","));
  }, [staredItemList]);

  const initData = async () => {
    setShowLoading(true);

    try {
      const res = await axios.get(
        "https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi"
      );

      if (res.status === 200) {
        setCurDate(res.data.date);
        setLastDate(res.data.date);
        setTodayRsiDatas(res.data.data);
      } else {
        alert(res.data.error);
      }
    } finally {
      setShowLoading(false);
    }
  };

  const columns = useMemo(() => {
    const _columns = [
      {
        dataField: "isStared",
        text: "",
        formatter: (cell: boolean, row: TodayRsiData) => {
          return (
            <span
              className={classNames("star", { stared: cell })}
              onClick={() => onClickStar(row.ticker)}
            >
              {cell ? "★" : "☆"}
            </span>
          );
        },
        formatExtraData: {
          staredItemList: staredItemList
        }
      },
      {
        dataField: "sector",
        text: "섹터",
        sort: true
      },
      {
        dataField: "ticker",
        text: "Ticker",
        sort: true
      },
      {
        dataField: "rsi",
        text: "RSI",
        formatter: (cell: number, row: TodayRsiData) => {
          return cell.toFixed(2);
        },
        sort: true
      },
      {
        dataField: "recommendedRsi",
        text: "권장 RSI",
        sort: true
      },
      {
        dataField: "close",
        text: "현재가",
        sort: true
      },
      {
        dataField: "change",
        text: "등락률",
        formatter: (cell: number, row: TodayRsiData) => {
          if (0 < cell) {
            return (
              <span className="change red">{`▲ ${(cell * 100).toFixed(
                1
              )} %`}</span>
            );
          } else if (cell < 0) {
            return (
              <span className="change blue">{`▼ ${(cell * 100).toFixed(
                1
              )} %`}</span>
            );
          }

          return (
            <span className="change">{(cell * 100).toFixed(1) + "%"}</span>
          );
        },
        sort: true
      }
    ];

    if (isBrowser) {
      _columns.push({
        dataField: "volume",
        text: "거래량",
        formatter: (cell: number, row: TodayRsiData) => {
          return utils.intComma(Math.round(cell));
        },
        sort: true
      });
    }

    return _columns;
  }, [isBrowser, staredItemList]);

  const data = useMemo(
    () =>
      todayRsiDatas
        .filter(e =>
          showType === "all" ? true : staredItemList.includes(e.ticker)
        )
        .map(e => ({
          ...e,
          recommendedRsi: recommendedRsiList[e.ticker][0],
          sector: recommendedRsiList[e.ticker][1],
          isStared: staredItemList.includes(e.ticker)
        })),
    [todayRsiDatas, staredItemList, showType]
  );

  const onClickPrevDate = async (isPrev: boolean) => {
    setShowLoading(true);

    try {
      const res = await axios.get(
        `https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=${curDate}&prev=${isPrev}`
      );

      if (res.status === 200) {
        setCurDate(res.data.date);
        setTodayRsiDatas(res.data.data);
      } else {
        alert(res.data.error);
      }
    } catch (err: any) {
      console.log(err);
      alert(err.response.data.message);
    } finally {
      setShowLoading(false);
    }
  };

  const onChangeDate = async (e: any) => {
    setShowLoading(true);

    setCurDate(e.target.value);
    try {
      const res = await axios.get(
        `https://wl7z14vyrd.execute-api.ap-northeast-2.amazonaws.com/default/today_rsi?date=${e.target.value}`
      );

      if (res.status === 200) {
        setCurDate(res.data.date);
        setTodayRsiDatas(res.data.data);
      } else {
        alert(res.data.error);
      }
    } catch (err: any) {
      console.log(err);
      alert(err.response.data.message);
    } finally {
      setShowLoading(false);
    }
  };

  const onClickStar = (ticker: TickerList) => {
    if (staredItemList.includes(ticker)) {
      setStaredItemList(staredItemList.filter(e => e !== ticker));
    } else {
      setStaredItemList([...staredItemList, ticker]);
    }
  };

  const onChangeShowType = (type: ShowType) => {
    setShowType(type);
    localStorage.setItem("show_type", type);
  };

  const rowClasses = (row: TodayRsiData, rowIndex: number): string => {
    if (row.rsi < row.recommendedRsi!) {
      const rate: number =
        ((row.recommendedRsi! - row.rsi) / row.recommendedRsi!) * 100;
      if (rate < 10) {
        return "recommended_10";
      } else if (rate < 20) {
        return "recommended_20";
      } else if (rate < 30) {
        return "recommended_30";
      } else if (rate < 40) {
        return "recommended_40";
      } else {
        return "recommended";
      }
    }

    return "";
  };

  return (
    <div className="rsi py-4">
      <div
        className={classNames(
          "mb-2 d-flex justify-content-between align-items-center",
          { "flex-column": isMobile }
        )}
      >
        <ButtonGroup className={classNames({ "mb-2": isMobile })} toggle>
          <ToggleButton
            type="radio"
            name="radio"
            variant="outline-secondary"
            value="전체보기"
            checked={showType === "all"}
            onChange={() => onChangeShowType("all")}
          >
            전체보기
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="radio"
            variant="outline-secondary"
            value="전체보기"
            checked={showType === "stared"}
            onChange={() => onChangeShowType("stared")}
          >
            즐겨찾기
          </ToggleButton>
        </ButtonGroup>
        <div className="d-flex">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => onClickPrevDate(true)}
          >
            {isBrowser ? `< 이전날짜` : "<<"}
          </Button>
          <Form.Control
            className="date-input mx-1"
            type="date"
            value={curDate}
            max={lastDate}
            onChange={onChangeDate}
          />
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => onClickPrevDate(false)}
            disabled={curDate === lastDate}
          >
            {isBrowser ? `다음날짜 >` : ">>"}
          </Button>
        </div>
      </div>

      {0 < columns.length && (
        <BootstrapTable
          classes={classNames({ mobile: isMobile })}
          keyField="ticker"
          data={data}
          columns={columns}
          rowClasses={rowClasses}
          condensed
          noDataIndication="데이터가 없습니다."
        />
      )}

      {showLoading && <LoadingLayer />}
    </div>
  );
}
