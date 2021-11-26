import axios from "axios";
import classNames from "classnames";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { isMobile } from "react-device-detect";
import LoadingLayer from "./LoadingLayer";
import "./Rsi.scss";

export default function PeriodRsi() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [timestamp, setTimestamp] = useState<string[]>([]);
  const [rsiData, setRsiData] = useState<Record<string, number[]>>({});
  const [closeData, setCloseData] = useState<Record<string, number[]>>({});
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const recommendedRsiList: Record<string, number> = {
    BNKU: 35,
    BULZ: 65,
    CURE: 45,
    DFEN: 40,
    DPST: 35,
    DRN: 40,
    DUSL: 40,
    FAS: 45,
    FNGU: 55,
    HIBL: 55,
    LABU: 45,
    MIDU: 45,
    NAIL: 50,
    PILL: 45,
    RETL: 50,
    SOXL: 65,
    TECL: 60,
    TNA: 50,
    TPOR: 40,
    TQQQ: 60,
    UDOW: 50,
    UPRO: 55,
    UTSL: 35,
    WANT: 55,
    WEBL: 60
  };

  useEffect(() => {
    const start = moment().subtract(1, "years").format("YYYY-MM-DD");
    const end = moment().format("YYYY-MM-DD");
    setStartDate(start);
    setEndDate(end);

    fetchData(start, end);
  }, []);

  const fetchData = async (start: string, end: string) => {
    setShowLoading(true);

    try {
      const res = await axios.get(
        `https://61exw746vf.execute-api.ap-northeast-2.amazonaws.com/default/period_rsi?start_date=${start}&end_date=${end}`
      );

      if (res.status === 200) {
        console.log(res.data);
        setTimestamp(res.data.timestamp);
        setRsiData(res.data.rsi);
        setCloseData(res.data.close);
      } else {
        alert(res.data.error);
      }
    } finally {
      setShowLoading(false);
    }
  };

  const onChangeStartDate = (e: any) => {
    setStartDate(e.target.value);
  };

  const onChangeEndDate = (e: any) => {
    setEndDate(e.target.value);
  };

  const onClickSearch = () => {
    fetchData(startDate, endDate);
  };

  const tableColumns = useMemo<ColumnDescription[]>(() => {
    return [
      {
        dataField: "ticker",
        text: "Ticker",
        sort: true,
        headerClasses: (column, colIndex) => {
          return "fixed-cell gray";
        },
        classes: (cell, row, rowIndex, colIndex) => {
          return `fixed-cell ${rowIndex % 2 === 0 ? "gray" : "white"}`;
        }
      },
      ...timestamp.map(e => ({
        dataField: e,
        text: e,
        classes: (cell: any, row: any, rowIndex: any, colIndex: any) => {
          if (row[e] && row[e] < row.recommendedRsi) {
            return "recommended";
          }

          return "";
        }
      }))
    ];
  }, [timestamp]);

  const tableData = useMemo(() => {
    return Object.entries(rsiData).map((data: [string, number[]]): any => {
      const dict: any = {
        ticker: data[0]
      };

      timestamp.forEach((time, i) => {
        dict[time] = data[1][i];
        dict["recommendedRsi"] = recommendedRsiList[data[0]];
      });

      return dict;
    });
  }, [rsiData]);

  return (
    <div className="rsi period-rsi py-4">
      <div
        className={classNames(
          "mb-2 d-flex justify-content-end align-items-center",
          { "flex-column": isMobile }
        )}
      >
        <Form.Control
          className="date-input mx-1"
          type="date"
          value={startDate}
          max={moment().format("YYYY-MM-DD")}
          onChange={onChangeStartDate}
        />{" "}
        ~
        <Form.Control
          className="date-input mx-1"
          type="date"
          value={endDate}
          max={moment().format("YYYY-MM-DD")}
          onChange={onChangeEndDate}
        />
        <Button
          className={classNames({ "mt-2": isMobile })}
          variant="outline-secondary"
          onClick={onClickSearch}
        >
          조회
        </Button>
      </div>
      {0 < timestamp.length && (
        <BootstrapTable
          classes={classNames({ mobile: isMobile })}
          keyField="ticker"
          data={tableData}
          columns={tableColumns}
          striped
          condensed
        />
      )}

      {showLoading && <LoadingLayer />}
    </div>
  );
}