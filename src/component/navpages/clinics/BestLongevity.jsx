import React from "react";
import RankingDetailTemplate from "./RankingDetailTemplate";
import antiAgingLongevityData from "./rankingData/antiAgingLongevityData";

export default function BestLongevity() {
  return <RankingDetailTemplate data={antiAgingLongevityData} />;
}
