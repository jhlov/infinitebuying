interface IBBuyingSellingCondition {
  orderType: string; // loc, 보통(지정가)
  priceType: string; // 평단가, 전날 종가
  rate: number; // 퍼센트
}

interface IBTestParams {
  stock: string;
  startDate: string;
  money: number;
  firstBuyingPriceType: string;
  buying1Condition: IBBuyingSellingCondition;
  buying2Condition: IBBuyingSellingCondition;
  sellingCondition: IBBuyingSellingCondition;
}

export type { IBBuyingSellingCondition, IBTestParams };
