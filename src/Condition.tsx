import React, { useMemo, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Condition.scss";

interface BuyingSellingCondition {
  orderType: string; // loc, 보통(지정가)
  priceType: string; // 평단가, 전날 종가
  rate: number; // 퍼센트
}

/**
 * 조건
 */
const Condition = () => {
  const [selectedStock, setSelectedStock] = useState<string>("TQQQ");
  const [startDate, setStartDate] = useState<string>("2021-01-01");
  const [money, setMoney] = useState<number>(10000);
  const [firstBuying, setFirstBuying] = useState<string>("open");
  const [buying1Condition, setBuying1Condition] =
    useState<BuyingSellingCondition>({
      orderType: "loc",
      priceType: "avgPrice",
      rate: 0
    });
  const [buying2Condition, setBuying2Condition] =
    useState<BuyingSellingCondition>({
      orderType: "loc",
      priceType: "avgPrice",
      rate: 15
    });
  const [sellingCondition, setSellingCondition] =
    useState<BuyingSellingCondition>({
      orderType: "limitOrder",
      priceType: "avgPrice",
      rate: 10
    });

  const minMoney = 10000;

  const stockList: string[] = [
    "TECL",
    "FAS",
    "RETL",
    "DPST",
    "DUSL",
    "NAIL",
    "LABU",
    "TQQQ",
    "FNGU",
    "BNKU",
    "UPRO",
    "TPOR",
    "DFEN",
    "WEBL",
    "TNA",
    "MIDU",
    "HIBL",
    "WANT",
    "SOXL"
  ];

  const minDateList: { [key: string]: string } = {
    TECL: "2008-12-18",
    FAS: "2008-11-07",
    RETL: "2010-07-15",
    DPST: "2015-08-20",
    DUSL: "2017-05-04",
    NAIL: "2015-08-20",
    LABU: "2015-05-29",
    TQQQ: "2010-02-11",
    FNGU: "2018-01-24",
    BNKU: "2019-04-04",
    UPRO: "2009-06-26",
    TPOR: "2017-11-07",
    DFEN: "2017-05-04",
    WEBL: "2019-11-08",
    TNA: "2008-11-06",
    MIDU: "2009-01-09",
    HIBL: "2019-11-08",
    WANT: "2018-12-03",
    SOXL: "2010-03-12"
  };

  /**
   * 현재 선택한 종목의 mindate
   */
  const minDate = useMemo((): string => {
    return minDateList[selectedStock];
  }, [selectedStock]);

  /**
   * 주식 종목 셀렉트 변경
   */
  const onChangeStock = (e: any) => {
    const newValue: string = e.target.value;
    console.log("onChangeStock", newValue);
    setSelectedStock(newValue);

    // min 값 체크 하기
    if (startDate < minDateList[newValue]) {
      setStartDate(minDateList[newValue]);
    }
  };

  /**
   * 투자금 변경
   */
  const onChangeMoney = (e: any) => {
    const newValue: number = Math.max(minMoney, e.target.value);
    console.log("onChangeMoney", newValue);
    setMoney(newValue);
  };

  /**
   * 시작 날짜 변경
   */
  const onChangeStartDate = (e: any) => {
    console.log("onChangeStartDate", e.target.value);
    setStartDate(e.target.value);
  };

  /**
   * 첫날 매수 단가 셀렉트 변경
   */
  const onChangeFirstBuying = (e: any) => {
    console.log("onChangeFirstBuying", e.target.value);
    setFirstBuying(e.target.value);
  };

  /**
   * 매수조건 1 변경
   */
  const onChangeBuying1Condition = (key: string, e: any) => {
    const value: any = e.target.value;
    setBuying1Condition({ ...buying1Condition, [key]: value });
  };

  /**
   * 매수조건 2 변경
   */
  const onChangeBuying2Condition = (key: string, e: any) => {
    const value: any = e.target.value;
    setBuying1Condition({ ...buying2Condition, [key]: value });
  };

  /**
   * 매도조건 변경
   */
  const onChangeSellingCondition = (key: string, e: any) => {
    const value: any = e.target.value;
    setBuying1Condition({ ...sellingCondition, [key]: value });
  };

  const onClickTestStart = () => {
    console.log("onClickTestStart");
  };

  return (
    <div className="condition p-4">
      <Row>
        <Col md={12} lg>
          <Form.Group controlId="stock">
            <Form.Label>종목</Form.Label>
            <Form.Control
              as="select"
              onChange={onChangeStock}
              value={selectedStock}
            >
              {stockList.map(e => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="money">
            <Form.Label>
              투자금($) <small>최소 $10,000</small>
            </Form.Label>
            <Form.Control
              type="number"
              value={money}
              min={minMoney}
              onChange={onChangeMoney}
            />
          </Form.Group>
          <Form.Group controlId="start-date">
            <Form.Label>시작일</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              min={minDate}
              onChange={onChangeStartDate}
            />
          </Form.Group>
          <Form.Group controlId="first-buying">
            <Form.Label>첫날 매수 단가</Form.Label>
            <Form.Control
              as="select"
              onChange={onChangeFirstBuying}
              value={firstBuying}
            >
              <option value="open">시작가</option>
              <option value="close">종가</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={12} lg>
          <h2>매수 조건 1</h2>
          <div className="d-flex align-items-center mb-3">
            <Form.Group controlId="buying-1-ordertype" className="mb-0 mr-1">
              <Form.Control
                as="select"
                value={buying1Condition.orderType}
                onChange={e => onChangeBuying1Condition("orderType", e)}
              >
                <option value="loc">LOC</option>
                <option value="limitOrder">보통가(지정가)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="buying-1-pricetype" className="mb-0 mr-1">
              <Form.Control
                as="select"
                value={buying1Condition.priceType}
                onChange={e => onChangeBuying1Condition("priceType", e)}
              >
                <option value="avgPrice">평단가</option>
                <option value="yesterdayClose">전날 종가</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="buying-1-rate" className="mb-0">
              <Form.Control
                type="number"
                value={buying1Condition.rate}
                onChange={e => onChangeBuying1Condition("rate", e)}
              />
            </Form.Group>
            <span>%</span>
          </div>

          <h2>매수 조건 2</h2>
          <div className="d-flex align-items-center mb-3">
            <Form.Group controlId="buying-2-ordertype" className="mb-0 mr-1">
              <Form.Control
                as="select"
                value={buying2Condition.orderType}
                onChange={e => onChangeBuying2Condition("orderType", e)}
              >
                <option value="loc">LOC</option>
                <option value="limitOrder">보통가(지정가)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="buying-2-pricetype" className="mb-0 mr-1">
              <Form.Control
                as="select"
                value={buying2Condition.priceType}
                onChange={e => onChangeBuying2Condition("priceType", e)}
              >
                <option value="avgPrice">평단가</option>
                <option value="yesterdayClose">전날 종가</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="buying-2-rate" className="mb-0">
              <Form.Control
                type="number"
                value={buying2Condition.rate}
                onChange={e => onChangeBuying2Condition("rate", e)}
              />
            </Form.Group>
            <span>%</span>
          </div>

          <hr />

          <h2>매도 조건</h2>
          <div className="d-flex align-items-center mb-3">
            <Form.Group controlId="selling-ordertype" className="mb-0 mr-1">
              <Form.Control
                as="select"
                value={sellingCondition.orderType}
                onChange={e => onChangeSellingCondition("orderType", e)}
              >
                <option value="limitOrder">보통가(지정가)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="selling-pricetype" className="mb-0 mr-1">
              <Form.Control
                as="select"
                value={sellingCondition.priceType}
                onChange={e => onChangeSellingCondition("priceType", e)}
              >
                <option value="avgPrice">평단가</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="selling-rate" className="mb-0">
              <Form.Control
                type="number"
                value={sellingCondition.rate}
                onChange={e => onChangeSellingCondition("rate", e)}
              />
            </Form.Group>
            <span>%</span>
          </div>
        </Col>
      </Row>
      <Button onClick={onClickTestStart}>테스트 시작</Button>
    </div>
  );
};

export default Condition;
