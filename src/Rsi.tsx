import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
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

  const recommendedRsiList: Record<string, number> = {
    BNKU: 35,
    DFEN: 40,
    DPST: 35,
    DUSL: 40,
    FAS: 45,
    FNGU: 55,
    HIBL: 55,
    LABU: 45,
    MIDU: 45,
    NAIL: 50,
    RETL: 50,
    SOXL: 65,
    TECL: 60,
    TNA: 50,
    TPOR: 40,
    TQQQ: 60,
    UPRO: 55,
    WANT: 55,
    WEBL: 60,
    BULZ: 65,
    UDOW: 50,
    PILL: 45,
    CURE: 45,
    DRN: 40,
    UTSL: 35
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
              <span className="red">{`▲ ${(cell * 100).toFixed(1)} %`}</span>
            );
          } else if (cell < 0) {
            return (
              <span className="blue">{`▼ ${(cell * 100).toFixed(1)} %`}</span>
            );
          }

          return (cell * 100).toFixed(1) + "%";
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
        recommendedRsi: recommendedRsiList[e.ticker]
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

  const rowClasses = (row: TodayRsiData, rowIndex: number): string => {
    if (row.rsi < row.recommendedRsi!) {
      return "recommended";
    }

    return "";
  };

  return (
    <div className="rsi py-4">
      <div className="text-right mb-2">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => onClickPrevDate(true)}
        >
          {`< 이전날짜`}
        </Button>
        <span className="mx-2 text-right">{curDate}</span>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => onClickPrevDate(false)}
          disabled={curDate === lastDate}
        >
          {`다음날짜 >`}
        </Button>
      </div>

      {0 < columns.length && (
        <BootstrapTable
          classes={classNames({ mobile: isMobile })}
          keyField="ticker"
          sort={{ dataField: "ticker", order: "asc" }}
          data={data}
          columns={columns}
          rowClasses={rowClasses}
          striped
          condensed
        />
      )}
    </div>
  );
}