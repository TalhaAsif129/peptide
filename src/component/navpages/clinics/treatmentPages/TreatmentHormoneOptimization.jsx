import React from "react";
import { Helmet } from "react-helmet-async";
import TreatmentDetailTemplate from "../TreatmentDetailTemplate";
import hormoneOptimizationData from "../treatmentData/hormoneOptimizationData";

export default function TreatmentHormoneOptimization() {
  return (
    <>
      <Helmet>
        <title>Hormone Optimization Peptide Clinics | MyPeptideMatch.com</title>
        <meta
          name="description"
          content="Find peptide therapy clinics offering Hormone Optimization treatments. Compare providers and request consultations near you."
        />
      </Helmet>
      <TreatmentDetailTemplate data={hormoneOptimizationData} />
    </>
  );
}
