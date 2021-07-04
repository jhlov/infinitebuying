import axios from "axios";
import React, { useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import Condition from "./Condition";
import { IBResponseData, IBTestParams } from "./interfaces";
import "./Lab.scss";

/**
 * 연구소
 */
const Lab = () => {
  const [data, setData] = useState<IBResponseData | null>(null);
  const [loding, setLoding] = useState<boolean>(false);

  const startBacktest = async (testParams: IBTestParams) => {
    testParams.buying1Condition.rate = Number(testParams.buying1Condition.rate);
    testParams.buying2Condition.rate = Number(testParams.buying2Condition.rate);
    testParams.sellingCondition.rate = Number(testParams.sellingCondition.rate);
    // console.log(testParams);

    setLoding(true);
    setData(null);

    try {
      const res = await axios.get(
        "https://54o7jbyvz3.execute-api.ap-northeast-2.amazonaws.com/default/infinitebuying",
        {
          params: {
            stock: testParams.stock,
            startDate: testParams.startDate,
            money: testParams.money,
            totalDays: testParams.totalDays,
            firstBuyingPriceType: testParams.firstBuyingPriceType,
            buying1OrderType: testParams.buying1Condition.orderType,
            buying1PriceType: testParams.buying1Condition.priceType,
            buying1Rate: testParams.buying1Condition.rate,
            buying2OrderType: testParams.buying2Condition.orderType,
            buying2PriceType: testParams.buying2Condition.priceType,
            buying2Rate: testParams.buying1Condition.rate,
            sellingOrderType: testParams.sellingCondition.orderType,
            sellingPriceType: testParams.sellingCondition.priceType,
            sellingRate: testParams.sellingCondition.rate
          }
        }
      );

      if (res.status === 200) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoding(false);
    }
  };

  return (
    <div className="mt-3">
      <Condition startBacktest={startBacktest} />

      {loding && (
        <div className="mt-5">
          <Spinner animation="border" />
        </div>
      )}

      {data !== null && (
        <Table className="mt-5">
          <thead>
            <tr>
              <th>일차</th>
              <th>날짜</th>
              <th>
                종가
                <br />
                (매수단가)
              </th>
              <th>매수개수</th>
              <th>매수금</th>
              <th>평단가</th>
              <th>보유개수</th>
              <th>평가금</th>
              <th>총매수금</th>
              <th>수익금</th>
              <th>수익률</th>
              <th>원금대비수익률</th>
            </tr>
          </thead>
          <tbody>
            {data.buying_info.map(e => (
              <tr key={e.days}>
                <td>{e.days}일</td>
                <td>{e.date}</td>
                <td>{e.close}</td>
                <td>{e.buying_count}</td>
                <td>{e.buying_price.toFixed(2)}</td>
                <td>{e.avg_price.toFixed(2)}</td>
                <td>{e.total_count}</td>
                <td>{e.evaluated_price.toFixed(2)}</td>
                <td>{e.total_price.toFixed(2)}</td>
                <td>{e.profits.toFixed(2)}</td>
                <td>{(e.profits_rate * 100).toFixed(2)}%</td>
                <td>{(e.total_money_profits_rate * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
          {data.sell_info !== null && (
            <thead>
              <tr>
                <th>일차</th>
                <th>날짜</th>
                <th>종가</th>
                <th></th>
                <th></th>
                <th>매도가</th>
                <th>매도개수</th>
                <th>매도금</th>
                <th>
                  매도시점
                  <br />
                  총매수금
                </th>
                <th>수익금</th>
                <th>수익률</th>
                <th>원금대비수익률</th>
              </tr>
            </thead>
          )}
          {data.sell_info !== null && (
            <tbody className="sell">
              <tr>
                <td>{data.sell_info.days}일</td>
                <td>{data.sell_info.date}</td>
                <td>{data.sell_info.close}</td>
                <td></td>
                <td></td>
                <td>{data.sell_info.sell_unit_price}</td>
                <td>{data.sell_info.sell_count}</td>
                <td>{data.sell_info.evaluated_price}</td>
                <td>{data.sell_info.total_price}</td>
                <td>{data.sell_info.profits.toFixed(2)}</td>
                <td>{(data.sell_info.profits_rate * 100).toFixed(2)}%</td>
                <td>
                  {(data.sell_info.total_money_profits_rate * 100).toFixed(2)}%
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      )}
    </div>
  );
};

export default Lab;
