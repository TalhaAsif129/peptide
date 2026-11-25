import React from "react";
import { Helmet } from "react-helmet-async";
import TreatmentDetailTemplate from "../TreatmentDetailTemplate";
import tissueRepairRecoveryData from "../treatmentData/tissueRepairRecoveryData";

export default function TreatmentTissueRepair() {
  return (
    <>
      <Helmet>
        <title>Tissue Repair & Recovery Peptide Clinics | MyPeptideMatch.com</title>
        <meta
          name="description"
          content="Find peptide therapy clinics offering Tissue Repair & Recovery treatments. Compare providers and request consultations near you."
        />
      </Helmet>
      <TreatmentDetailTemplate data={tissueRepairRecoveryData} />
    </>
  );
}
