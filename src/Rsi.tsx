import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { isBrowser, isMobile } from "react-device-detect";
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
  recommendedRsi?: number;
}

export default function Rsi() {
  const [lastDate, setLastDate] = useState<string>("");
  const [curDate, setCurDate] = useState<string>("");
  const [todayRsiDatas, setTodayRsiDatas] = useState<TodayRsiData[]>([]);
  const [columns, setColumns] = useState<ColumnDescription[]>([]);

  const recommendedRsiList: Record<string, [number, string]> = {
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
    initData();
    updateColumns();
  }, []);

  useEffect(() => {
    updateColumns();
  }, [isBrowser]);

  const initData = async () => {
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
  };

  const updateColumns = () => {
    const _columns = [
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

    setColumns(_columns);
  };

  const data = useMemo(
    () =>
      todayRsiDatas.map(e => ({
        ...e,
        recommendedRsi: recommendedRsiList[e.ticker][0],
        sector: recommendedRsiList[e.ticker][1]
      })),
    [todayRsiDatas]
  );

  const onClickPrevDate = async (isPrev: boolean) => {
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
    }
  };

  const onChangeDate = async (e: any) => {
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
    }
  };

  const rowClasses = (row: TodayRsiData, rowIndex: number): string => {
    if (row.rsi < row.recommendedRsi!) {
      return "recommended";
    }

    return "";
  };

  return (
    <div className="rsi py-4">
      <div
        className={classNames("mb-2 d-flex", [
          isBrowser ? "justify-content-end" : "justify-content-center"
        ])}
      >
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

      {0 < columns.length && (
        <BootstrapTable
          classes={classNames({ mobile: isMobile })}
          keyField="ticker"
          data={data}
          columns={columns}
          rowClasses={rowClasses}
          striped
          condensed
        />
      )}

      {todayRsiDatas.length === 0 && <p>데이터가 없습니다.</p>}
    </div>
  );
}
