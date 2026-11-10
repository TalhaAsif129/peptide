import React from "react";
import RankingDetailTemplate from "./RankingDetailTemplate";
import cognitiveEnhancementData from "./rankingData/cognitiveEnhancementData";

export default function BestCognitiveEnhancement() {
  return <RankingDetailTemplate data={cognitiveEnhancementData} />;
}
