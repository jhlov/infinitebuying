import axios from "axios";
import classNames from "classnames";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { isMobile } from "react-device-detect";
import "./Rsi.scss";

export default function PeriodRsi() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [timestamp, setTimestamp] = useState<string[]>([]);
  const [rsiData, setRsiData] = useState<Record<string, number[]>>({});
  const [closeData, setCloseData] = useState<Record<string, number[]>>({});

  useEffect(() => {
    const start = moment().subtract(3, "months").format("YYYY-MM-DD");
    const end = moment().format("YYYY-MM-DD");
    setStartDate(start);
    setEndDate(end);

    initData(start, end);
  }, []);

  const initData = async (start: string, end: string) => {
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
  };

  const onChangeStartDate = (e: any) => {
    setStartDate(e.target.value);
  };

  const onChangeEndDate = (e: any) => {
    setEndDate(e.target.value);
  };

  const tableColumns = useMemo<ColumnDescription[]>(() => {
    return [
      {
        dataField: "ticker",
        text: "Ticker",
        sort: true
      },
      ...timestamp.map(e => ({
        dataField: e,
        text: e
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
      });

      return dict;
    });
  }, [rsiData]);

  return (
    <div className="rsi period-rsi py-4">
      <div className="mb-2 d-flex justify-content-end align-items-center">
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
        <Button variant="outline-secondary" size="sm">
          검색
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
    </div>
  );
}
