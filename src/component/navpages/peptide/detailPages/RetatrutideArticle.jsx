import React from "react";
import { Link } from "react-router-dom";
import PeptideKeyTakeaways from "../components/PeptideKeyTakeaways";
import PeptideStatCard from "../components/PeptideStatCard";
import PeptideQuoteCard from "../components/PeptideQuoteCard";
import PeptideCallout from "../components/PeptideCallout";

const LINK_CLS =
  "text-[#095e64] font-semibold underline decoration-[#066068] transition-colors";

export default function RetatrutideArticle() {
  return (
    <article className="font-sans">
      <div className="blog-prose max-w-none [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24">
        {/* ============================================================ */}
        {/* SECTION 1: What Is Retatrutide?                              */}
        {/* ============================================================ */}
        <section id="what-is-retatrutide">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] font-bold leading-[33px] tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            What Is Retatrutide?
          </h2>

          <p className="mb-5 text-[#1c2522] text-[17px] leading-[31px]">
            Retatrutide is the first drug to activate all three major metabolic receptors — GLP-1, GIP, and glucagon — in a single molecule. In its Phase 2 obesity trial, participants taking the highest dose lost a mean of 24.2% of their body weight over 48 weeks.<sup>[1]</sup> In the larger Phase 3 TRIUMPH-1 trial, the 12 mg dose produced 28.3% (about 70 lbs) over 80 weeks.<sup>[5]</sup> That&#39;s a bigger number than any approved weight-loss drug has produced in its main trials.
          </p>

          <p className="mb-5 text-[#1c2522] text-[17px] leading-[31px]">
            It&#39;s developed by Eli Lilly under the compound designation LY3437943. Three Phase 3 trials reported positive results in 2026, and Lilly plans to submit it to the FDA in the first quarter of 2027.<sup>[6]</sup> Until it&#39;s approved, it isn&#39;t available by prescription or from compounding pharmacies; access is limited to clinical trials and a small Lilly early-access program.<sup>[7]</sup> If approval comes through, it could become the most effective pharmacological obesity treatment ever approved.
          </p>

          {/* Key Takeaways */}
          <PeptideKeyTakeaways
            title="Key Takeaways"
            items={[
              "Retatrutide targets GLP-1, GIP, and glucagon receptors simultaneously — the only drug in its class to do all three.",
              <span>
                The Phase 3 TRIUMPH-1 trial showed mean{" "}
                <Link to="/treatment/weight-loss" className={LINK_CLS}>
                  weight loss
                </Link>{" "}
                of 28.3% at the 12 mg dose over 80 weeks (24.2% over 48 weeks in Phase 2), the highest figure reported for any obesity drug to date.<sup>[1][5]</sup>
              </span>,
              <span>
                It is still investigational: Lilly plans an FDA submission in early 2027. Until then there&#39;s no prescription or compounding pathway; access is through clinical trials or Lilly&#39;s narrow early-access program.<sup>[6][7]</sup>
              </span>,
              "GI side effects (nausea, vomiting, diarrhea) are the dominant safety signal, consistent with the broader GLP-1 drug class, and are most pronounced during dose escalation.",
              <span>
                Cardiovascular outcomes data is still early: in TRIUMPH-3, major cardiovascular events were numerically lower than placebo but not statistically significant, and a dedicated outcomes trial is ongoing — a meaningful gap given that{" "}
                <Link to="/peptides/semaglutide" className={LINK_CLS}>
                  semaglutide
                </Link>
                &#39;s SELECT trial changed prescribing practice for the whole class.<sup>[6]</sup>
              </span>,
            ]}
          />

          {/* Table 1: Quick Facts */}
          <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
            <table className="w-full min-w-[320px] text-sm">
              <thead className="[&amp;:has(th:not(.hidden))]:table-header-group hidden">
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <th className="hidden" aria-hidden="true"></th>
                  <th className="hidden" aria-hidden="true"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F7F8F9]">
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>Class</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    Triple Incretin Agonist
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>Mechanism</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    GLP-1 + GIP + Glucagon receptor agonism
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>Developer</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    Eli Lilly (LY3437943)
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>FDA Status</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    Investigational — FDA submission planned Q1 2027
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>Administration</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    Subcutaneous injection, once weekly
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>Trial Dose Range</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    2 mg → 12 mg once weekly, stepped up every 4 weeks
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>Half-life</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    ~6 days — half-life not established in available clinical trial data
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    <strong>Primary Uses</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#1c2522] sm:px-5 sm:py-3">
                    Obesity, Type 2 Diabetes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: Dosing — What the Trials Used                     */}
        {/* ============================================================ */}
        <section id="dosing-what-the-trials-used">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] font-bold tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            Dosing — What the Trials Used
          </h2>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The Phase 2 obesity trial tested four active doses — 2 mg, 4 mg, 8 mg, and 12 mg — all administered once weekly by subcutaneous injection.<sup>[1]</sup> Participants didn&#39;t start at their assigned maintenance dose. They escalated gradually over roughly 24 weeks, with the 12 mg group passing through 2 mg and 4 mg steps before reaching the top dose. That slow ramp is deliberate: it&#39;s how you get the GI side effects down to a manageable level.
          </p>

          {/* Stat Card */}
          <PeptideStatCard
            stat="24.2%"
            label="mean weight loss at 12 mg over 48 weeks — Phase 2 obesity trial (PMID 37366315)"
          />

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The dose-response relationship was clear and steep. Higher doses produced meaningfully better outcomes, and the curve hadn&#39;t obviously flattened by 12 mg.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            Phase 3 (TRIUMPH-1) settled on 4 mg, 9 mg, and 12 mg. Everyone started at 2 mg and stepped up every four weeks: one step to reach 4 mg, and steps at 2, 4, 6, and 9 mg to reach 12 mg.<sup>[5]</sup> Even the 4 mg dose, reached with a single step, produced 19.0% mean weight loss at 80 weeks.
          </p>

          {/* Table 2: Phase 2 Dose-Response */}
          <div className="my-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3.5">
              <h4 className="font-saira text-sm font-bold uppercase tracking-[-0.14px] text-[#6b7280]">
                Dose-Response: Phase 2 Obesity Trial (48 Weeks)
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    <th className="bg-[#F7F8F9] px-3 py-2.5 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-[#6b7280] sm:px-5 sm:py-3.5 sm:text-xs">
                      Outcome
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-emerald-600 text-white">
                      4 mg
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-blue-600 text-white">
                      8 mg
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-violet-600 text-white">
                      12 mg
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Mean weight loss
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~8.7%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~17.3%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~24.2%
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Placebo-adjusted loss
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~7.0%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~15.6%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~22.5%
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      ≥5% weight loss (responders)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~75%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~91%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~100%
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      ≥15% weight loss (responders)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~27%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~67%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~83%
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      ≥25% weight loss (responders)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~5%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~30%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~42%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The responder data at 12 mg is striking: roughly 83% of participants lost at least 15% of their body weight, and about 42% lost 25% or more.<sup>[1]</sup> For context, 15% weight loss is the threshold where most obesity-related comorbidities — hypertension, sleep apnea, joint disease — begin to meaningfully improve.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            Because retatrutide isn&#39;t approved yet, these doses are not prescribable. They exist as reference data for understanding what the drug does. Once the FDA reviews it, the approved dose range may differ from what the trials tested. Check ClinicalTrials.gov for current trial protocols.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: Dosing References and Calculator                  */}
        {/* ============================================================ */}
        <section id="dosing-references-and-calculator">
          <h3 className="scroll-mt-24 font-heading saira-bold text-[21px] font-semibold leading-[28px] tracking-[-0.21px] text-[#1c2522] mt-8 mb-3">
            Dosing References and Calculator
          </h3>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            For readers researching how the trial milligram doses translate into reconstitution volumes and insulin-syringe units at different vial concentrations, we maintain vial-specific dosing references and a dedicated calculator:
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-[#1c2522] text-[17px] leading-[30px] marker:text-[#0b7c84]">
            <li>
              <Link to="/protocols/retatrutide-dosing-5mg" className={LINK_CLS}>
                Retatrutide 5 mg vial dosing protocol
              </Link>
            </li>
            <li>
              <Link to="/protocols/retatrutide-dosing-10mg" className={LINK_CLS}>
                Retatrutide 10 mg vial dosing protocol
              </Link>
            </li>
            <li>
              <Link to="/protocols/retatrutide-dosing-20mg" className={LINK_CLS}>
                Retatrutide 20 mg vial dosing protocol
              </Link>
            </li>
            <li>
              <Link to="/protocols/retatrutide-dosing-30mg" className={LINK_CLS}>
                Retatrutide 30 mg vial dosing protocol
              </Link>
            </li>
            <li>
              <Link to="/tools/retatrutide-dosage-calculator" className={LINK_CLS}>
                Retatrutide dosage calculator
              </Link>{" "}
              — convert any milligram dose to insulin-syringe units for your specific vial and bacteriostatic-water setup
            </li>
          </ul>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            These references only summarize the milligram-to-units arithmetic reported in the trial literature. Because retatrutide is investigational, they are not a recommendation to obtain or self-administer it outside a clinical trial.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: What Makes Retatrutide Different                  */}
        {/* ============================================================ */}
        <section id="what-makes-retatrutide-different">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] font-bold leading-[33px] tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            What Makes Retatrutide Different
          </h2>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            Every GLP-1 drug on the market — semaglutide,{" "}
            <Link to="/peptides/liraglutide" className={LINK_CLS}>
              liraglutide
            </Link>{" "}
            — hits one receptor.{" "}
            <Link to="/peptides/tirzepatide" className={LINK_CLS}>
              Tirzepatide
            </Link>{" "}
            added a second, GIP, and the results were noticeably better than single-agonist drugs. Retatrutide adds a third: the glucagon receptor.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            That third target is what makes this compound pharmacologically distinct. Glucagon receptor activation increases energy expenditure — your body burns more calories at rest. It also has direct effects on fat metabolism in the liver, which is why retatrutide is being studied for metabolic-associated steatotic liver disease (MASLD) alongside obesity.<sup>[2]</sup> GLP-1 and GIP handle the appetite and insulin side of the equation; glucagon handles the energy output side. Hitting all three simultaneously is what the trial numbers reflect.
          </p>

          {/* Blue Callout */}
          <PeptideCallout type="blue" title="Why the glucagon receptor matters">
            <p>
              Glucagon is usually thought of as the hormone that raises blood sugar — the opposite of insulin. But glucagon receptor agonism at the right dose, in the context of GLP-1 co-activation, doesn&#39;t cause problematic hyperglycemia. Instead, it increases thermogenesis (heat production and calorie burning) and promotes fat breakdown in the liver. The GLP-1 component essentially counterbalances the blood sugar effect while the glucagon component adds metabolic drive that GLP-1 alone can&#39;t provide.
            </p>
          </PeptideCallout>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: How Does Retatrutide Work?                        */}
        {/* ============================================================ */}
        <section id="how-does-retatrutide-work">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] font-bold tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            How Does Retatrutide Work?
          </h2>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            Start with what you already know about GLP-1 drugs: they slow gastric emptying, reduce appetite, and improve insulin secretion in a glucose-dependent way. That&#39;s the foundation. Retatrutide does all of that — and then adds two more layers.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The GIP receptor component amplifies the insulin response and appears to improve how fat tissue handles energy storage and release.<sup>[3]</sup> This is the same receptor{" "}
            <Link to="/peptides/tirzepatide" className={LINK_CLS}>
              tirzepatide
            </Link>{" "}
            targets alongside GLP-1, and it&#39;s part of why dual agonists outperformed pure GLP-1 drugs in head-to-head comparisons.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The glucagon receptor layer is what&#39;s new. Glucagon receptor agonism increases basal metabolic rate — your resting calorie burn goes up. It also drives fatty acid oxidation in the liver, which is why retatrutide showed signals for liver fat reduction in the Phase 2 diabetes trial.<sup>[2]</sup> The net effect is a drug that suppresses intake (GLP-1 + GIP), improves insulin dynamics (GLP-1 + GIP), and increases output (glucagon) — all three levers pulled at once.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The glucose-dependent nature of the GLP-1 and GIP components matters for safety: insulin secretion is amplified only when blood glucose is elevated, which limits hypoglycemia risk compared to older diabetes drugs like sulfonylureas.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: What the Clinical Evidence Actually Shows        */}
        {/* ============================================================ */}
        <section id="what-the-clinical-evidence-actually-shows">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] font-bold leading-[33px] tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            What the Clinical Evidence Actually Shows
          </h2>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7: Phase 2 Obesity Trial                            */}
        {/* ============================================================ */}
        <section id="phase-2-obesity-trial">
          <h3 className="scroll-mt-24 font-heading saira-bold text-[21px] leading-[28px] font-semibold tracking-[-0.21px] text-[#1c2522] mt-8 mb-3">
            Phase 2 Obesity Trial
          </h3>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The Phase 2 obesity trial published in the <em>New England Journal of Medicine</em> in 2023 was the first large efficacy readout.<sup>[1]</sup> Participants were adults with obesity or overweight plus at least one weight-related comorbidity, without diabetes. The trial ran 48 weeks at maintenance dose, following a ~24-week escalation period.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            At the 12 mg dose, mean weight loss was 24.2% — roughly 58 lbs from a starting weight around 240 lbs. To put that in BMI (body mass index) terms: a participant starting at a BMI of 38 would end near 29, crossing from obese to overweight. The 8 mg dose produced approximately 17.3% weight loss, and 4 mg produced approximately 8.7%.<sup>[1]</sup>
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 8: Phase 2 Type 2 Diabetes Trial                    */}
        {/* ============================================================ */}
        <section id="phase-2-type-2-diabetes-trial">
          <h3 className="scroll-mt-24 font-heading saira-bold text-[21px] leading-[28px] font-semibold tracking-[-0.21px] text-[#1c2522] mt-8 mb-3">
            Phase 2 Type 2 Diabetes Trial
          </h3>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The <em>Lancet</em> published the Phase 2 diabetes trial alongside the obesity data in 2023.<sup>[2]</sup> In people with type 2 diabetes, retatrutide produced dose-dependent reductions in HbA1c (a 90-day average of blood glucose levels) of up to 2.2 percentage points at the highest dose — a clinically meaningful reduction that would move many patients from poorly controlled to well-controlled diabetes. Weight loss in this population reached approximately 16.9% at the highest dose over 36 weeks, somewhat lower than the non-diabetic obesity trial, which is consistent with what&#39;s seen across the GLP-1 class.<sup>[2]</sup>
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 9: Phase 3: The TRIUMPH Trials                      */}
        {/* ============================================================ */}
        <section id="phase-3-the-triumph-trials">
          <h3 className="scroll-mt-24 font-heading saira-bold text-[21px] leading-[28px] font-semibold tracking-[-0.21px] text-[#1c2522] mt-8 mb-3">
            Phase 3: The TRIUMPH Trials
          </h3>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            TRIUMPH-1 is the pivotal Phase 3 obesity trial: 2,339 adults with obesity or overweight plus at least one weight-related condition, without diabetes, randomized to 4 mg, 9 mg, 12 mg, or placebo for 80 weeks. Eli Lilly reported topline results in May 2026.<sup>[5]</sup>
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            At 12 mg, mean weight loss was 28.3% (70.3 lbs) versus 2.2% on placebo. 45.3% of participants on 12 mg lost at least 30% of their body weight, a level long associated with bariatric surgery, and 65.3% finished below the BMI 30 threshold for obesity. In an extension for people who started with a BMI of 35 or higher, those who continued on 12 mg reached 30.3% (85.0 lbs) at 104 weeks.<sup>[5]</sup>
          </p>

          {/* Table 3: Phase 3 Dose-Response */}
          <div className="my-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3.5">
              <h4 className="font-saira text-sm font-bold uppercase tracking-[-0.14px] text-[#6b7280]">
                Dose-Response: Phase 3 TRIUMPH-1 (80 Weeks)
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    <th className="bg-[#F7F8F9] px-3 py-2.5 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-[#6b7280] sm:px-5 sm:py-3.5 sm:text-xs">
                      Outcome
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-emerald-600 text-white">
                      4 mg
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-blue-600 text-white">
                      9 mg
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-violet-600 text-white">
                      12 mg
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-emerald-600 text-white">
                      Placebo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Mean weight loss
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      19.0%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      25.9%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      28.3%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      2.2%
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      ≥25% weight loss (responders)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      27.8%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      52.9%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      62.5%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      2.2%
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      ≥30% weight loss (responders)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      15.3%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      37.9%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      45.3%
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      0.5%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            Two more Phase 3 trials reported in July 2026. In TRIUMPH-2, adults with type 2 diabetes and obesity or overweight lost up to 20.8% of body weight at 80 weeks, with A1C down by up to 1.6 percentage points. In TRIUMPH-3, adults with severe obesity and established cardiovascular disease lost up to 22.6% at 80 weeks.<sup>[6]</sup> As in Phase 2, people with diabetes lost somewhat less weight than people without it.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 10: Where Retatrutide Fits in the Broader Class      */}
        {/* ============================================================ */}
        <section id="where-retatrutide-fits-in-the-broader-class">
          <h3 className="scroll-mt-24 font-heading saira-bold text-[21px] leading-[28px] font-semibold tracking-[-0.21px] text-[#1c2522] mt-8 mb-3">
            Where Retatrutide Fits in the Broader Class
          </h3>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            A 2024 review in <em>Diabetes Care</em> and a 2025 systematic review in <em>Annals of Internal Medicine</em> both position retatrutide as the leading edge of a new generation of incretin-based therapies, with the triple agonist mechanism producing the highest weight loss percentages seen in any pharmacological trial to date.<sup>[3][4]</sup> Both predate the Phase 3 results, which have since reported even higher numbers; the drug still has no approved indication.
          </p>

          {/* Quote Card */}
          <PeptideQuoteCard
            quote="Retatrutide is the first drug to hit all three metabolic receptors simultaneously — and the Phase 3 numbers suggest that distinction matters."
          />
        </section>

        {/* ============================================================ */}
        {/* SECTION 11: What We Don't Know Yet                          */}
        {/* ============================================================ */}
        <section id="what-we-dont-know-yet">
          <h3 className="scroll-mt-24 font-heading saira-bold text-[21px] leading-[28px] font-semibold tracking-[-0.21px] text-[#1c2522] mt-8 mb-3">
            What We Don&#39;t Know Yet
          </h3>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-[#1c2522] marker:text-[#0b7c84] text-[17px] leading-[30px]">
            <li>
              <strong>Long-term safety</strong> — Phase 3 followed people for up to 104 weeks. There&#39;s no data yet on what happens at 3 or 5 years of continuous use.
            </li>
            <li>
              <strong>Cardiovascular outcomes</strong> — Semaglutide&#39;s SELECT trial demonstrated a 20% reduction in major cardiovascular events. In TRIUMPH-3, major cardiovascular events were numerically lower with retatrutide than placebo, but the difference wasn&#39;t statistically significant; a dedicated cardiovascular and kidney outcomes trial is still running.<sup>[6]</sup>
            </li>
            <li>
              <strong>Weight regain after stopping</strong> — The class-wide pattern is significant regain after discontinuation. Whether retatrutide&#39;s higher weight loss translates to better or worse regain dynamics is unknown.
            </li>
            <li>
              <strong>Head-to-head comparisons</strong> — No direct trials against tirzepatide or semaglutide exist. Cross-trial comparisons are unreliable because populations, durations, and endpoints differ.
            </li>
            <li>
              <strong>Liver disease outcomes</strong> — Phase 2 showed signals for liver fat reduction, but no confirmed MASLD/NASH outcomes data exists yet; a dedicated Phase 3 trial is underway.
            </li>
            <li>
              <strong>Bone density and muscle mass</strong> — Rapid large-magnitude weight loss raises questions about lean mass preservation. The published trials haven&#39;t fully characterized this yet.
            </li>
          </ul>
        </section>

        {/* ============================================================ */}
        {/* SECTION 12: Side Effects — What to Actually Expect          */}
        {/* ============================================================ */}
        <section id="side-effects-what-to-actually-expect">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] font-bold leading-[33px] tracking-[-0.26px] text-[#333333] mt-10 mb-4">
            Side Effects — What to Actually Expect
          </h2>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The side effect profile looks like the rest of the GLP-1 class, amplified somewhat by the higher weight loss and the glucagon component. The Phase 3 TRIUMPH-1 trial is now the largest dataset: at 12 mg, 42.4% of participants reported nausea (vs 14.8% on placebo), 32.0% diarrhea, 26.1% constipation, and 25.3% vomiting.<sup>[5]</sup>
          </p>

          <p className="mb-3 leading-[31px] text-[#1c2522] text-[17px]">
            <strong>During dose escalation (the first 16 weeks for the 12 mg dose in Phase 3):</strong>
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-[#1c2522] marker:text-[#0b7c84] text-[17px] leading-[30px]">
            <li>
              <strong>Nausea</strong> — the most commonly reported side effect across the Phase 2 and Phase 3 trials; most pronounced in the 24–48 hours after each injection and tends to improve as the body adjusts at each dose step.
            </li>
            <li>
              <strong>Vomiting</strong> — reported less frequently than nausea; more common at higher doses and during escalation steps.
            </li>
            <li>
              <strong>Diarrhea</strong> — reported during escalation; typically transient.
            </li>
            <li>
              <strong>Decreased appetite</strong> — technically an intended effect, but worth noting that appetite suppression can be intense enough in some participants to require dose pauses.
            </li>
          </ul>

          <p className="mb-3 leading-[31px] text-[#1c2522] text-[17px]">
            <strong>At stable maintenance dose:</strong>
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-[#1c2522] marker:text-[#0b7c84] text-[17px] leading-[30px]">
            <li>
              <strong>Constipation</strong> — more common at higher doses and later in treatment, consistent with the GLP-1 class pattern of slowed GI motility.
            </li>
            <li>
              <strong>Injection site reactions</strong> — mild redness or tenderness at the injection site; rotating sites (abdomen, thigh, upper arm) reduces this.
            </li>
            <li>
              <strong>Fatigue</strong> — reported in Phase 2, particularly during escalation phases.
            </li>
          </ul>

          <p className="mb-3 leading-[31px] text-[#1c2522] text-[17px]">
            <strong>Rare but worth knowing:</strong>
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-[#1c2522] marker:text-[#0b7c84] text-[17px] leading-[30px]">
            <li>
              <strong>Pancreatitis risk</strong> — a class-level concern shared with all GLP-1 drugs; no cases were confirmed in Phase 2, but the theoretical risk exists and warrants monitoring.
            </li>
            <li>
              <strong>Dysesthesia</strong> — tingling, burning, or skin sensitivity, reported in 12.5% at 12 mg vs 0.9% on placebo in TRIUMPH-1; mostly mild to moderate, and most cases resolved during treatment.<sup>[5]</sup>
            </li>
            <li>
              <strong>Gallbladder events</strong> — rapid significant weight loss increases gallstone risk; this is a known concern across the GLP-1 class.
            </li>
            <li>
              <strong>Tachycardia (elevated resting heart rate)</strong> — the glucagon receptor component may contribute to modest increases in resting heart rate; elevated resting heart rate has been observed in clinical trials and may warrant cardiovascular monitoring, though the specific contribution of the glucagon receptor component requires further characterization.
            </li>
          </ul>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            If you&#39;re enrolled in a retatrutide trial and experience severe abdominal pain (possible pancreatitis), significant changes in heart rate, or GI symptoms that prevent normal eating or hydration, contact your trial coordinator immediately — don&#39;t wait for your next scheduled visit.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 13: Regulatory & Access Status                       */}
        {/* ============================================================ */}
        <section id="regulatory-access-status">
          <h2 className="scroll-mt-24 font-heading saira-bold font-bold text-[26px] leading-[33px] tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            Regulatory &amp; Access Status
          </h2>

          {/* Amber Callout */}
          <PeptideCallout type="warning" title="Access status as of 2026-10">
            <p>
              Retatrutide isn&#39;t FDA approved yet, so there&#39;s no prescription or compounding pathway in the United States. Legal access is through Eli Lilly&#39;s clinical trials or, since August 2026, a narrow early-access program for adults with refractory obesity and serious complications who can&#39;t join a trial; a doctor applies on the patient&#39;s behalf.<sup>[7]</sup> Products sold online as &quot;retatrutide&quot; aren&#39;t Lilly&#39;s drug and aren&#39;t regulated, so their purity and dose can&#39;t be verified.
            </p>
          </PeptideCallout>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            Retatrutide is classified as an investigational new drug (IND) under FDA oversight. Three Phase 3 trials (TRIUMPH-1, -2, and -3) reported positive topline results in May and July 2026, and Eli Lilly plans to submit a Biologics License Application (BLA) to the FDA in the first quarter of 2027.<sup>[5][6]</sup> Standard FDA review takes about 10–12 months from submission (less with priority review), which puts a realistic approval window in late 2027 to 2028.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            To find active trials you may be eligible for, search ClinicalTrials.gov for &quot;retatrutide&quot; or &quot;LY3437943.&quot; Eligibility criteria vary by trial; most obesity trials require a BMI of 30 or above, or 27 or above with a weight-related comorbidity.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The FDA has taken enforcement action against companies marketing unapproved peptide and GLP-1 class products. Patients and providers should consult FDA.gov and the FDA&#39;s MedWatch program for current enforcement activity.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 14: How Retatrutide Compares to Tirzepatide & Semaglutide */}
        {/* ============================================================ */}
        <section id="how-retatrutide-compares-to-tirzepatide-and-semaglutide">
          <h2 className="scroll-mt-24 font-heading saira-bold font-bold text-[26px] leading-[33px] tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            How Retatrutide Compares to Tirzepatide and Semaglutide
          </h2>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The honest answer is: we don&#39;t know yet, because no head-to-head trial exists. What we have are Phase 3 numbers for all three drugs, but from separate trials — different populations, different durations, different study designs. Cross-trial comparisons can tell you something directionally, but they can&#39;t tell you definitively that retatrutide is &quot;better.&quot;
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            With that caveat clearly stated, here&#39;s what the trial data shows:
          </p>

          {/* Table 4: GLP-1 Class Comparison */}
          <div className="my-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3.5">
              <h4 className="font-saira text-sm font-bold uppercase tracking-[-0.14px] text-[#6b7280]">
                Weight Loss: GLP-1 Class Comparison
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    <th className="bg-[#F7F8F9] px-3 py-2.5 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-[#6b7280] sm:px-5 sm:py-3.5 sm:text-xs">
                      Parameter
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-emerald-600 text-white">
                      Retatrutide
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-blue-600 text-white">
                      Tirzepatide
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-violet-600 text-white">
                      Semaglutide
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Peak mean weight loss
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~28.3% (80 wk)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~22.5% (72 wk)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~14.9% (68 wk)
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Trial phase
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Phase 3 (TRIUMPH-1)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Phase 3 (SURMOUNT-1)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Phase 3 (STEP 1)
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Receptors targeted
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      GLP-1 + GIP + Glucagon
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      GLP-1 + GIP
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      GLP-1
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      FDA status
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Investigational
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Approved (obesity)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Approved (obesity)
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Available now?
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      No
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Yes
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Yes
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      CV outcomes trial
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Ongoing
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Ongoing
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Yes (SELECT)
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Administration
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      SC weekly
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      SC weekly
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      SC weekly
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            <Link to="/peptides/tirzepatide" className={LINK_CLS}>
              Tirzepatide
            </Link>{" "}
            and{" "}
            <Link to="/peptides/semaglutide" className={LINK_CLS}>
              semaglutide
            </Link>{" "}
            are both approved and accessible now. Retatrutide&#39;s Phase 3 weight-loss numbers are the highest of the three, but it isn&#39;t approved yet. For someone deciding between available options today, the approved drugs are the practical choice. For someone interested in what&#39;s coming, retatrutide is the most closely watched compound in the pipeline.
          </p>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            For a deeper comparison, see our{" "}
            <Link to="/compare/retatrutide-vs-tirzepatide" className={LINK_CLS}>
              retatrutide vs tirzepatide breakdown
            </Link>.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 15: What the Evidence Does Not Show                  */}
        {/* ============================================================ */}
        <section id="what-the-evidence-does-not-show">
          <h2 className="scroll-mt-24 font-heading saira-bold font-bold text-[26px] leading-[33px] tracking-[-0.26px] text-[##1c2522] mt-10 mb-4">
            What the Evidence Does Not Show
          </h2>

          <p className="mb-5 leading-[31px] text-[#1c2522] text-[17px]">
            The trial data is genuinely impressive. It is also still limited. Here&#39;s what you should not conclude from it:
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-[#1c2522] marker:text-[#0b7c84] text-[17px] leading-[30px]">
            <li>
              <strong>Topline results ≠ full publication.</strong> The Phase 3 results so far come from Lilly&#39;s topline releases. Full peer-reviewed papers and the FDA&#39;s own review will add detail, including subgroups and rarer side effects.
            </li>
            <li>
              <strong>Two years ≠ long-term safety.</strong> Phase 3 ran 80 weeks, with an extension to 104 weeks. That is not long enough to characterize risks that emerge over years of use — bone density changes, sustained cardiovascular effects, or rare adverse events with low incidence.
            </li>
            <li>
              <strong>Weight loss ≠ cardiovascular benefit.</strong> Semaglutide&#39;s SELECT trial showed that weight loss alone doesn&#39;t explain the cardiovascular benefit — there appear to be direct cardiac effects. Whether retatrutide has similar benefits, better benefits, or different risks due to the glucagon component is unknown.
            </li>
            <li>
              <strong>Trial population ≠ real-world population.</strong> Clinical trial participants are selected, monitored closely, and supported throughout. Real-world adherence, side effect management, and outcomes typically differ from trial conditions.
            </li>
          </ul>
        </section>

        {/* ============================================================ */}
        {/* SECTION 16: FAQ                                             */}
        {/* ============================================================ */}
        <section id="faq">
          <h2 className="scroll-mt-24 font-heading saira-bold font-bold text-[26px] leading-[33px] tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            FAQ
          </h2>

          <div className="space-y-6 text-[#1c2522] text-[17px]">
            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>How does retatrutide differ from tirzepatide? </strong>
                Tirzepatide targets two receptors — GLP-1 and GIP. Retatrutide adds a third: the glucagon receptor. That glucagon activation increases energy expenditure and promotes liver fat metabolism, which is why retatrutide&#39;s Phase 3 weight loss (28.3%) exceeds tirzepatide&#39;s (22.5%) — though the comparison isn&#39;t direct because the trials differ in design, duration, and population.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>Can I get retatrutide from a compounding pharmacy? </strong>
                No. Compounding pharmacies can only compound drugs that have an FDA-approved reference listed drug or that appear on the FDA&#39;s 503A/503B bulk drug substance lists. Retatrutide has neither. Any compounding pharmacy claiming to offer retatrutide would be operating outside FDA regulations.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>When will retatrutide be FDA approved? </strong>
                Eli Lilly plans to submit retatrutide to the FDA in the first quarter of 2027.<sup>[6]</sup> Standard FDA review takes about 10–12 months, so a realistic approval window is late 2027 to 2028. No approval date has been announced.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>Is retatrutide safe? </strong>
                Phase 2 and Phase 3 trials showed a side effect profile consistent with the GLP-1 drug class — primarily GI symptoms during dose escalation — plus dysesthesia (skin sensitivity) in some participants.<sup>[1][2][5]</sup> &quot;Safe&quot; in a clinical sense means the benefit-risk profile was acceptable in a controlled trial setting over up to two years. Data beyond that doesn&#39;t exist yet.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>Where can I find retatrutide clinical trials? </strong>
                Search ClinicalTrials.gov for &quot;retatrutide&quot; or &quot;LY3437943.&quot; Filter by status (recruiting) and location. Eligibility typically requires a BMI of 30 or above, or 27 or above with a qualifying comorbidity, and no prior bariatric surgery. Each trial has specific criteria — review them carefully before contacting a trial site.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 17: References                                      */}
        {/* ============================================================ */}
        <section id="references">
          <h2 className="scroll-mt-24 font-heading saira-bold font-bold text-[26px] leading-[33px] tracking-[-0.26px] text-[#1c2522] mt-10 mb-4">
            References
          </h2>

          <ol className="mb-8 list-decimal space-y-2.5 pl-6 text-[0.9375rem] leading-relaxed text-[#1c2522] marker:text-[#0b7ca4] text-[17px]">
            <li>
              Jastreboff AM, et al. &quot;Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial.&quot; <em>N Engl J Med</em>. 2023;389(6):514-526. PMID: 37366315
            </li>
            <li>
              Rosenstock J, et al. &quot;Retatrutide, a GIP, GLP-1 and glucagon receptor agonist, for people with type 2 diabetes: a randomised, double-blind, placebo and active-controlled, parallel-group, phase 2 trial conducted in the USA.&quot; <em>Lancet</em>. 2023;402(10401):529-544. PMID: 37385280
            </li>
            <li>
              Nauck MA, D&#39;Alessio DA. &quot;Efficacy and Safety of GLP-1 Medicines for Type 2 Diabetes and Obesity.&quot; <em>Diabetes Care</em>. 2024. PMID: 38843460
            </li>
            <li>
              Shi Q, et al. &quot;Efficacy and Safety of Glucagon-Like Peptide-1 Receptor Agonists for Weight Loss Among Adults Without Diabetes: A Systematic Review of Randomized Controlled Trials.&quot; <em>Ann Intern Med</em>. 2025. PMID: 39761578
            </li>
            <li>
              Eli Lilly and Company. &quot;Lilly&#39;s triple agonist, retatrutide, delivered powerful weight loss in pivotal Phase 3 obesity trial.&quot; News release. May 21, 2026.
            </li>
            <li>
              Eli Lilly and Company. &quot;Lilly&#39;s triple agonist, retatrutide, successful in two additional phase 3 obesity trials, delivering significant improvements in weight and A1C.&quot; News release. July 23, 2026.
            </li>
            <li>
              Grossi G. &quot;Lilly Expands Retatrutide Access Amid Doctor Pushback.&quot; <em>AJMC</em>. August 5, 2026.
            </li>
          </ol>

          <hr className="my-8 border-[#e5e7eb]" />

          <em className="text-sm italic text-[#1c2522] text-[17px] leading-[31px]">
            This content is for informational purposes only and does not constitute medical advice. Consult a licensed healthcare provider before starting any treatment.
          </em>
        </section>
      </div>
    </article>
  );
}
