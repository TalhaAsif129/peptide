import React from "react";
import { Helmet } from "react-helmet-async";
import TreatmentDetailTemplate from "../TreatmentDetailTemplate";
import weightLossData from "../treatmentData/weightLossData";

export default function TreatmentWeightLoss() {
  return (
    <>
      <Helmet>
        <title>Weight Loss Peptide Clinics | MyPeptideMatch.com</title>
        <meta
          name="description"
          content="Find peptide therapy clinics offering Weight Loss treatments. Compare providers and request consultations near you."
        />
      </Helmet>
      <TreatmentDetailTemplate data={weightLossData} />
    </>
  );
}
