import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  OverlayTrigger,
  ToggleButton,
  Tooltip
} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { isBrowser, isMobile } from "react-device-detect";
import LoadingLayer from "./LoadingLayer";
import "./Rsi.scss";
import { PeriodRsiData, ShowType, TickerType, TodayRsiData } from "./types";
import utils from "./utils";

interface Props {
  showType: ShowType;
  setShowType: (showType: ShowType) => void;
  staredItemList: TickerType[];
  onClickStaredItem: (ticker: TickerType) => void;
  lastMonthRsiData: PeriodRsiData | null;
}

export default function TodayRsi(props: Props) {
  const [lastDate, setLastDate] = useState<string>("");
  const [curDate, setCurDate] = useState<string>("");
  const [todayRsiDatas, setTodayRsiDatas] = useState<TodayRsiData[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);

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

  const LOCBuyCarefulItems = [
    "BNKU",
    "CURE",
    "DRN",
    "DUSL",
    "HIBL",
    "MIDU",
    "NAIL",
    "PILL",
    "RETL",
    "TPOR",
    "UTSL",
    "WANT",
    "WEBL"
  ];

  useEffect(() => {
    initData();
  }, []);

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
    return [
      {
        dataField: "isStared",
        text: "",
        formatter: (cell: boolean, row: TodayRsiData) => {
          return (
            <span
              className={classNames("star", { stared: cell })}
              onClick={() => props.onClickStaredItem(row.ticker)}
            >
              {cell ? "★" : "☆"}
            </span>
          );
        },
        formatExtraData: {
          staredItemList: props.staredItemList
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
        sort: true,
        formatter: (cell: string, row: TodayRsiData) => {
          return `${cell}${LOCBuyCarefulItems.includes(cell) ? "*" : ""}`;
        }
      },
      {
        dataField: "rsi",
        text: "RSI(14)",
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
        dataField: "gap",
        text: "RSI 괴리율",
        sort: true,
        formatter: (cell: number, row: TodayRsiData) => {
          return <span>{cell.toFixed(1)} %</span>;
        },
        hidden: isMobile
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
              <span className="change red">
                <span className="arrow">▲ </span>
                {`${(cell * 100).toFixed(1)} %`}
              </span>
            );
          } else if (cell < 0) {
            return (
              <span className="change blue">
                <span className="arrow">▼ </span>
                {`${(cell * 100).toFixed(1)} %`}
              </span>
            );
          }

          return (
            <span className="change">{(cell * 100).toFixed(1) + "%"}</span>
          );
        },
        sort: true
      },
      {
        dataField: "volume",
        text: "거래량",
        formatter: (cell: number, row: TodayRsiData) => {
          return utils.intComma(Math.round(cell));
        },
        sort: true,
        hidden: isMobile
      }
    ];
  }, [isMobile, props.staredItemList]);

  const data = useMemo(
    () =>
      todayRsiDatas
        .filter(e =>
          props.showType === "all"
            ? true
            : props.staredItemList.includes(e.ticker)
        )
        .map(e => ({
          ...e,
          recommendedRsi: recommendedRsiList[e.ticker][0],
          sector: recommendedRsiList[e.ticker][1],
          isStared: props.staredItemList.includes(e.ticker),
          gap:
            ((e.rsi - recommendedRsiList[e.ticker][0]) /
              recommendedRsiList[e.ticker][0]) *
            100
        })),
    [todayRsiDatas, props.staredItemList, props.showType]
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

  const onChangeShowType = (type: ShowType) => {
    props.setShowType(type);
    localStorage.setItem("show_type", type);
  };

  const rowClasses = (row: TodayRsiData, rowIndex: number): string => {
    if (row.rsi < row.recommendedRsi!) {
      const gap = Math.abs(row.gap!);
      if (gap < 10) {
        return "recommended_10";
      } else if (gap < 20) {
        return "recommended_20";
      } else if (gap < 30) {
        return "recommended_30";
      } else if (gap < 40) {
        return "recommended_40";
      } else {
        return "recommended";
      }
    }

    return "";
  };

  const expandRow = {
    renderer: (row: TodayRsiData) => {
      const closeOptions: Highcharts.Options = {
        title: {
          text: `${row.ticker} 최근 한달 종가`,
          align: "left"
        },
        xAxis: {
          categories: props.lastMonthRsiData?.timestamp
        },
        yAxis: {
          title: {
            text: null
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            type: "line",
            name: "종가",
            lineWidth: 1.3,
            marker: {
              enabled: false
            },
            states: {
              hover: {
                lineWidth: 1.3
              }
            },
            data: props.lastMonthRsiData?.close[row.ticker]
          }
        ]
      };

      const rsiOptions: Highcharts.Options = {
        title: {
          text: `${row.ticker} 최근 한달 RSI`,
          align: "left"
        },
        xAxis: {
          categories: props.lastMonthRsiData?.timestamp
        },
        yAxis: {
          title: {
            text: null
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            type: "line",
            name: "RSI",
            lineWidth: 1.3,
            marker: {
              enabled: false
            },
            states: {
              hover: {
                lineWidth: 1.3
              }
            },
            data: props.lastMonthRsiData?.rsi[row.ticker]
          },
          {
            type: "line",
            name: "권장 RSI",
            lineWidth: 1.3,
            enableMouseTracking: false,
            marker: {
              enabled: false
            },
            dataLabels: {
              enabled: false
            },
            data: Array(props.lastMonthRsiData?.timestamp.length ?? 0).fill(
              recommendedRsiList[row.ticker][0]
            ),
            color: "red"
          }
        ]
      };

      return (
        <>
          <HighchartsReact highcharts={Highcharts} options={closeOptions} />
          <HighchartsReact highcharts={Highcharts} options={rsiOptions} />
        </>
      );
    }
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
            checked={props.showType === "all"}
            onChange={() => onChangeShowType("all")}
          >
            전체보기
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="radio"
            variant="outline-secondary"
            value="전체보기"
            checked={props.showType === "stared"}
            onChange={() => onChangeShowType("stared")}
          >
            즐겨찾기
          </ToggleButton>
        </ButtonGroup>
        <div className="d-flex align-items-center">
          <Button
            variant="outline-secondary"
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
            className="mr-2"
            variant="outline-secondary"
            onClick={() => onClickPrevDate(false)}
            disabled={curDate === lastDate}
          >
            {isBrowser ? `다음날짜 >` : ">>"}
          </Button>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip">
                매일 오전 8시 5분에 업데이트됩니다.
              </Tooltip>
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </OverlayTrigger>
        </div>
      </div>

      {0 < columns.length && (
        <>
          <p className="mb-0 text-left">
            <small>
              *:{" "}
              <a
                href="https://cafe.naver.com/infinitebuying/23962"
                target="_blank"
              >
                LOC 매수 유의종목
              </a>
            </small>
          </p>
          <p className="mb-0 text-left">
            <small>
              - 테이블을 클릭하면 최근 한달 종가, RSI 데이터를 그래프로 확인 할
              수 있습니다.
            </small>
          </p>
          <BootstrapTable
            classes={classNames({ mobile: isMobile })}
            keyField="ticker"
            data={data}
            columns={columns}
            rowClasses={rowClasses}
            expandRow={expandRow}
            condensed
            noDataIndication="데이터가 없습니다."
          />
        </>
      )}

      {showLoading && <LoadingLayer />}
    </div>
  );
}
