interface IBBuyingSellingCondition {
  orderType: string; // loc, 보통(지정가)
  priceType: string; // 평단가, 전날 종가
  rate: number; // 퍼센트
}

interface IBTestParams {
  stock: string;
  startDate: string;
  money: number;
  totalDays: number;
  firstBuyingPriceType: string;
  buying1Condition: IBBuyingSellingCondition;
  buying2Condition: IBBuyingSellingCondition;
  sellingCondition: IBBuyingSellingCondition;
}

interface IBResponseData {
  buying_info: {
    days: number;
    date: string;
    close: number;
    buying_count: number;
    buying_price: number;
    avg_price: number;
    total_count: number;
    evaluated_price: number;
    total_price: number;
    profits: number;
    profits_rate: number;
    total_money_profits_rate: number;
  }[];
  sell_info: {
    days: number;
    date: string;
    close: number;
    sell_unit_price: number;
    sell_count: number;
    evaluated_price: number;
    total_price: number;
    profits: number;
    profits_rate: number;
    total_money_profits_rate: number;
  } | null;
}

export type { IBBuyingSellingCondition, IBTestParams, IBResponseData };
