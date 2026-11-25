import React from "react";
import RankingDetailTemplate from "./RankingDetailTemplate";
import weightLossData from "./rankingData/weightLossData";

export default function BestWeightLoss() {
  return <RankingDetailTemplate data={weightLossData} />;
}
