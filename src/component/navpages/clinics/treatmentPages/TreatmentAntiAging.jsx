import React from "react";
import { Helmet } from "react-helmet-async";
import TreatmentDetailTemplate from "../TreatmentDetailTemplate";
import antiAgingLongevityData from "../treatmentData/antiAgingLongevityData";

export default function TreatmentAntiAging() {
  return (
    <>
      <Helmet>
        <title>Anti-Aging & Longevity Peptide Clinics | MyPeptideMatch.com</title>
        <meta
          name="description"
          content="Find peptide therapy clinics offering Anti-Aging & Longevity treatments. Compare providers and request consultations near you."
        />
      </Helmet>
      <TreatmentDetailTemplate data={antiAgingLongevityData} />
    </>
  );
}
