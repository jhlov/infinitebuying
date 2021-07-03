import React from "react";
import Condition from "./Condition";
import { IBTestParams } from "./interfaces";

/**
 * 연구소
 */
const Lab = () => {
  const startBacktest = (testParams: IBTestParams) => {
    testParams.buying1Condition.rate = Number(testParams.buying1Condition.rate);
    testParams.buying2Condition.rate = Number(testParams.buying2Condition.rate);
    testParams.sellingCondition.rate = Number(testParams.sellingCondition.rate);
    console.log(testParams);
  };

  return (
    <div className="mt-3">
      <Condition startBacktest={startBacktest} />
    </div>
  );
};

export default Lab;
