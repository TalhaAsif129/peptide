import React from "react";
import { Link } from "react-router-dom";
import PeptideKeyTakeaways from "../components/PeptideKeyTakeaways";
import { AlertTriangle, Info } from "lucide-react";

const LINK_CLS =
  "text-[#095e64] underline decoration-[#095e64] underline-offset-2  transition-colors font-semibold";

export default function CjcIpamorelinArticle() {
  return (
    <article className="font-sans">
      <div className="blog-prose max-w-none [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24">
        {/* ============================================================ */}
        {/* SECTION 1: What Is CJC-1295 / Ipamorelin?                   */}
        {/* ============================================================ */}
        <section id="what-is-cjc-1295-ipamorelin">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            What Is CJC-1295 / Ipamorelin?
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            If you're looking at growth{" "}
            <Link to="/treatment/hormone-optimization" className={LINK_CLS}>
              hormone optimization
            </Link>{" "}
            without using synthetic HGH itself, this combination is the most commonly prescribed peptide stack in US clinics right now. CJC-1295 and{" "}
            <Link to="/peptides/ipamorelin" className={LINK_CLS}>
              ipamorelin
            </Link>{" "}
            work on different but complementary receptors to coax your pituitary gland into releasing more of your own growth hormone — in pulses that closely resemble your body's natural secretion pattern, rather than the flat pharmacological spike you'd get from exogenous HGH.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            CJC-1295 is a synthetic analog of growth hormone-releasing hormone (GHRH), the signal your hypothalamus sends when it wants your pituitary to produce GH. Ipamorelin is a growth hormone secretagogue (GHS) that works through the ghrelin receptor (GHSR-1a) — a separate pathway that amplifies the GH pulse. Using both together is the key point: one opens the door, the other pushes through it.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Neither peptide is FDA approved as a standalone drug, but both are legally available in the US through licensed compounding pharmacies by prescription. That puts them in a different category from purely investigational compounds — you can actually access this through a legitimate clinical pathway today.
          </p>

          {/* Key Takeaways */}
          <PeptideKeyTakeaways
            title="Key Takeaways"
            items={[
              <span>
                CJC-1295 and ipamorelin work through two separate receptor pathways (
                <Link to="/peptides/ghrh" className={LINK_CLS}>
                  GHRH
                </Link>{" "}
                receptor and ghrelin receptor) to produce GH pulses that mimic the body's natural pattern — a meaningful difference from synthetic HGH.
              </span>,
              "Neither peptide is on the FDA's 503A bulks list. Both left Category 2 in September 2024, which removed a restriction but did not authorize compounding.",
              <span>
                The combination is most commonly used for body composition,{" "}
                <Link to="/treatment/tissue-repair-recovery" className={LINK_CLS}>
                  recovery
                </Link>{" "}
                acceleration, and sleep quality — with clinical evidence primarily from ipamorelin and CJC-1295 studied individually rather than as a formal combination.
              </span>,
              "Most patients notice sleep improvements within 2–4 weeks; body composition changes typically emerge around weeks 8–12.",
              "Side effects are generally mild and dose-dependent: water retention, joint aches, and transient injection-site reactions are the most common.",
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
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>Class</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    Growth Hormone Secretagogue (GHS) combination
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>Mechanism</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    GHRH receptor agonism (CJC-1295) + Ghrelin receptor (GHSR-1a) agonism (ipamorelin)
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>FDA Status</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    Not approved; removed from Category 2 (Sept 2024), not on the 503A bulks list
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>Administration</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    Subcutaneous injection
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>Typical Dose (Practitioner Range)</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    200–300 mcg of each peptide, 3–5 nights per week — dosing in humans has not been established in clinical trials; reported practitioner use ranges vary and lack peer-reviewed validation
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>Half-life</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    CJC-1295 with DAC: ~6–8 days, though half-life not established in humans; Ipamorelin: ~2 hours, though half-life not established in humans
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>Primary Uses</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    Body composition, recovery, sleep quality,{" "}
                    <Link to="/treatment/anti-aging-longevity" className={LINK_CLS}>
                      anti-aging
                    </Link>, hormone optimization
                  </td>
                </tr>
                <tr className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    <strong>CAS Number (Ipamorelin)</strong>
                  </td>
                  <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                    170851-70-4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: Typical Dosing — Practitioner & Community Ranges  */}
        {/* ============================================================ */}
        <section id="typical-dosing-practitioner-community-ranges">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            Typical Dosing — Practitioner &amp; Community Ranges
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            There are no published randomized controlled trials establishing an official dose for the CJC-1295 / ipamorelin combination specifically. The ranges below reflect what practitioners and researchers commonly use, based on available protocol guides, compounding pharmacy documentation, and published research on each peptide individually.
          </p>

          {/* Amber Warning Box */}
          <div className="my-6 rounded-xl border-l-4 border-amber-400 bg-amber-50/70 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
              <div className="min-w-0">
                <p className="mb-1.5 text-sm font-bold text-amber-800">
                  Not clinical trial dosing
                </p>
                <div className="text-[0.9375rem] leading-relaxed text-[#4a4a4a]">
                  <p>
                    These ranges are not derived from randomized clinical trials of the combination. They represent practitioner and community consensus. Individual dosing should be determined by a licensed healthcare provider who can account for your baseline IGF-1 levels, health history, and treatment goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            The most commonly reported clinical protocol pairs 200–300 mcg of ipamorelin with 200–300 mcg of CJC-1295 (with DAC), injected subcutaneously 3–5 times per week, typically 30–60 minutes before sleep.<sup>[1]</sup> Dosing and pharmacokinetic parameters for CJC-1295/Ipamorelin combination have not been established in published human clinical trials. Timing before sleep matters: GH is naturally secreted in pulses during slow-wave sleep, and dosing in this window is thought to amplify rather than override that rhythm.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            CJC-1295 comes in two forms — with DAC (Drug Affinity Complex) and without DAC. The DAC version has a significantly longer half-life (approximately 6–8 days — though that figure hasn&#39;t been established in published human clinical data), which allows for less frequent dosing and produces a sustained elevation in baseline GH levels rather than a single sharp pulse. The non-DAC version (also called Modified GRF 1-29) has a much shorter half-life and is typically used for more precise pulse timing. Most compounding pharmacy formulations in the US use CJC-1295 with DAC.
          </p>

          {/* Table 2: Common Protocol Variations */}
          <div className="my-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3.5">
              <h4 className="text-sm font-bold uppercase font-saira tracking-[-0.14px] text-[#6b7280]">
                CJC-1295 / Ipamorelin: Common Protocol Variations
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
                      Conservative
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-blue-600 text-white">
                      Standard
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-violet-600 text-white">
                      Aggressive
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Dose per peptide
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      100–150 mcg
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      200–300 mcg
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      300–500 mcg (practitioner-reported, no clinical trial data available)
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Frequency
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      3x/week
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      5x/week
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Daily (practitioner-reported, no clinical trial data available)
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Timing
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Pre-sleep
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Pre-sleep
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Pre-sleep or post-workout
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Typical duration
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      3–6 months
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      3–6 months
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      6+ months
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Most practitioners start patients at the lower end — 100–200 mcg of each — for the first 4 weeks before assessing IGF-1 levels and adjusting upward. Baseline and follow-up IGF-1 testing (insulin-like growth factor 1, a downstream marker of GH activity) is standard practice to verify the peptides are working and to avoid over-suppression of the GH axis.
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: What Makes This Combination Different            */}
        {/* ============================================================ */}
        <section id="what-makes-this-combination-different">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            What Makes This Combination Different
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            The short answer is synergy through mechanism diversity. Using two peptides that hit separate receptor pathways produces a GH pulse that&#39;s larger than either would generate alone — and that&#39;s well-documented for the ipamorelin / GHRH combination class.<sup>[2]</sup>
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Here&#39;s why that matters practically: exogenous HGH bypasses your pituitary entirely. It delivers a fixed pharmacological dose regardless of what your body is doing. CJC-1295 and ipamorelin work upstream — they stimulate your pituitary to produce GH, which means your body&#39;s own feedback mechanisms (primarily somatostatin) stay in the loop. The result is a more physiologic release pattern, which is thought to reduce the side effect burden associated with supraphysiologic HGH levels.
          </p>

          {/* Blue Info Box */}
          <div className="my-6 rounded-xl border-l-4 border-blue-400 bg-blue-50/70 p-5">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" />
              <div className="min-w-0">
                <p className="mb-1.5 text-sm font-bold text-blue-800">
                  Why the combination matters mechanistically
                </p>
                <div className="text-[0.9375rem] leading-relaxed text-[#4a4a4a]">
                  <p>
                    Ipamorelin is one of the most selective GHS peptides studied — it stimulates GH release without meaningfully raising cortisol or prolactin at standard doses, which is a real advantage over older secretagogues like{" "}
                    <Link to="/peptides/ghrp-2" className={LINK_CLS}>
                      GHRP-2
                    </Link>{" "}
                    and{" "}
                    <Link to="/peptides/ghrp-6" className={LINK_CLS}>
                      GHRP-6
                    </Link>.<sup>[2]</sup> Pairing it with CJC-1295 amplifies the GH pulse through a completely different receptor, producing additive effects without stacking the side effect profiles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            For orthopaedic and sports medicine applications specifically, growth hormone secretagogues like ipamorelin and CJC-1295 have been highlighted as promising adjuncts for tissue regeneration and neuromuscular recovery — though the authors of a 2026 review in the <em>Journal of the American Academy of Orthopaedic Surgeons</em> note that the clinical evidence base is still developing.<sup>[3]</sup>
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: How Does CJC-1295 / Ipamorelin Work?              */}
        {/* ============================================================ */}
        <section id="how-does-cjc-1295-ipamorelin-work">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            How Does CJC-1295 / Ipamorelin Work?
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Your pituitary gland releases growth hormone in pulses — not continuously. Those pulses are controlled by two competing signals from your hypothalamus: GHRH (growth hormone-releasing hormone), which tells the pituitary to fire, and somatostatin, which tells it to stop. The balance between those two signals determines how much GH you produce.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            CJC-1295 is a synthetic GHRH analog. It binds to GHRH receptors on the pituitary&#39;s somatotroph cells and pushes the accelerator — increasing both the amplitude (size) and duration of GH pulses.<sup>[1]</sup> The DAC modification extends its half-life dramatically by binding to albumin in the bloodstream, which is why a single injection can sustain elevated GH levels for days rather than hours.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Ipamorelin works through a completely different receptor — the ghrelin receptor (GHSR-1a). Ghrelin is the hormone your stomach releases when you&#39;re hungry, and it has a secondary effect of stimulating GH release. Ipamorelin mimics that GH-stimulating effect without the hunger signal or the cortisol and prolactin elevation you&#39;d get from ghrelin itself.<sup>[2]</sup> When you use ipamorelin alongside CJC-1295, the two signals arrive at the pituitary through separate pathways and produce a GH pulse that&#39;s meaningfully larger than either would produce alone.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Downstream, that elevated GH pulse drives increased production of IGF-1 (insulin-like growth factor 1) in the liver. IGF-1 is the primary mediator of GH&#39;s anabolic effects — it promotes protein synthesis in muscle tissue, supports lipolysis (fat breakdown) in adipose tissue, and plays a role in collagen synthesis and{" "}
            <Link to="/treatment/tissue-repair-recovery" className={LINK_CLS}>
              tissue repair
            </Link>. That&#39;s the chain that connects the injection to the outcomes patients actually care about: better recovery, improved body composition, and the sleep quality improvements that most patients notice first.
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: What the Clinical Evidence Actually Shows         */}
        {/* ============================================================ */}
        <section id="what-the-clinical-evidence-actually-shows">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            What the Clinical Evidence Actually Shows
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Here&#39;s where honesty matters. Most of the published clinical research exists on CJC-1295 and ipamorelin as individual compounds — not as a combination. The combination protocol is standard clinical practice, but it hasn&#39;t been tested in a large, randomized controlled trial as a paired therapy.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>CJC-1295 (individual):</strong> A published study demonstrated that CJC-1295 with DAC produced dose-dependent increases in serum GH levels and sustained IGF-1 elevations lasting more than 6 days after a single injection in healthy adults.<sup>[1]</sup> That&#39;s the pharmacokinetic basis for the once-or-twice-weekly dosing protocols used in clinical practice.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Ipamorelin (individual):</strong> Ipamorelin has been studied in both animal models and human subjects, with published data supporting its selectivity for GH release without significant effects on cortisol, prolactin, or ACTH at therapeutic doses.<sup>[2]</sup> A 2026 review in the <em>Journal of the American Academy of Orthopaedic Surgeons</em> identified ipamorelin and CJC-1295 among the growth hormone secretagogues with emerging evidence for tissue regeneration and neuromuscular recovery applications.<sup>[3]</sup>
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Doping detection context:</strong> The combination has received enough attention in competitive sports that doping control laboratories have developed detection methods for ipamorelin and related peptides in biological matrices — which, practically speaking, tells you these compounds are being used at scale.<sup>[4]</sup>
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: What the Evidence Does Not Show                   */}
        {/* ============================================================ */}
        <section id="what-the-evidence-does-not-show">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            What the Evidence Does Not Show
          </h2>

          <ul className="mb-4 pl-6 list-disc space-y-2 text-[#1c2522] text-[16px] sm:text-[17px] leading-[30px] marker:text-[#0b7c84]">
            <li>
              <strong>Combination RCT data</strong> — No published randomized controlled trial has tested the CJC-1295 / ipamorelin combination specifically. The clinical rationale for pairing them is mechanistically sound, but the formal efficacy data for the combination doesn&#39;t exist yet.
            </li>
            <li>
              <strong>Long-term safety data</strong> — Most available human data comes from shorter-duration studies. We don&#39;t have robust data on what happens to the GH axis after 2–3 years of continuous use.
            </li>
            <li>
              <strong>Head-to-head comparisons with HGH</strong> — There are no published direct comparison trials between this combination and exogenous HGH for body composition outcomes in adults.
            </li>
            <li>
              <strong>Cardiovascular outcomes</strong> — No long-term cardiovascular outcomes data exists for this combination. GH excess is associated with cardiovascular risk; whether the modest GH elevations from secretagogue therapy carry similar risk is unknown.
            </li>
            <li>
              <strong>Oncological safety</strong> — IGF-1 is a growth factor. The theoretical concern about IGF-1 elevation and cancer risk exists for all GH-stimulating therapies. No clinical evidence establishes a causal link at therapeutic secretagogue doses, but the question hasn&#39;t been answered definitively.
            </li>
          </ul>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 7: Side Effects — What to Actually Expect            */}
        {/* ============================================================ */}
        <section id="side-effects-what-to-actually-expect">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            Side Effects — What to Actually Expect
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            The side effect profile for this combination is generally considered mild relative to exogenous HGH, because you&#39;re working within your body&#39;s own regulatory system rather than overriding it. That said, &quot;mild&quot; doesn&#39;t mean &quot;none.&quot;
          </p>

          <p className="mb-2 text-[#1c2522] text-[16px] sm:text-[17px] leading-[31px]">
            <strong>Early in treatment (weeks 1–6):</strong>
          </p>

          <ul className="mb-4 pl-6 list-disc space-y-2 text-[#1c2522] text-[17px] leading-[30px] marker:text-[#0b7c84]">
            <li>
              <strong>Water retention</strong> — The most common early complaint. GH increases renal sodium reabsorption, which causes fluid retention, often noticeable in the hands and feet. It typically improves after the first few weeks as the body adjusts.
            </li>
            <li>
              <strong>Joint aches</strong> — Related to the water retention and GH-mediated effects on connective tissue. Usually mild; most patients find it resolves without intervention.
            </li>
            <li>
              <strong>Injection site reactions</strong> — Mild redness, itching, or tenderness at the injection site. Rotating sites (abdomen, thigh, upper arm) reduces this significantly.
            </li>
            <li>
              <strong>Transient flushing or tingling</strong> — Ipamorelin in particular can cause a brief warm flush or tingling sensation within 30 minutes of injection. It&#39;s harmless and fades quickly.
            </li>
          </ul>

          <p className="mb-2 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>At stable dose:</strong>
          </p>

          <ul className="mb-4 pl-6 list-disc space-y-2 text-[#1c2522] text-[17px] leading-[30px] marker:text-[#0b7c84]">
            <li>
              <strong>Fatigue or vivid dreams</strong> — Some patients report more intense dreaming or mild fatigue, likely connected to the changes in sleep architecture from increased GH during slow-wave sleep.
            </li>
            <li>
              <strong>Elevated fasting glucose</strong> — GH is counter-regulatory to insulin. Prolonged use can mildly elevate fasting blood glucose, particularly in patients with pre-existing insulin resistance. Monitoring is warranted.
            </li>
            <li>
              <strong>Numbness or tingling in extremities</strong> — Carpal tunnel-like symptoms are a known GH-related effect. Less common at the doses used with secretagogues than with exogenous HGH, but worth watching for.
            </li>
          </ul>

          <p className="mb-2 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Worth flagging to your provider immediately:</strong>
          </p>

          <ul className="mb-4 pl-6 list-disc space-y-2 text-[#1c2522] text-[17px] leading-[30px] marker:text-[#0b7c84]">
            <li>Persistent joint swelling that doesn&#39;t improve after the first month</li>
            <li>Fasting glucose consistently above your baseline</li>
            <li>Any unusual changes in vision</li>
            <li>Signs of pituitary dysfunction (severe headache, visual field changes)</li>
          </ul>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 8: Regulatory & Access Status                        */}
        {/* ============================================================ */}
        <section id="regulatory-access-status">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            Regulatory &amp; Access Status
          </h2>

          {/* Amber Warning Box */}
          <div className="my-6 rounded-xl border-l-4 border-amber-400 bg-amber-50/70 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
              <div className="min-w-0">
                <p className="mb-1.5 text-sm font-bold text-amber-800">
                  Compounding status — US
                </p>
                <div className="text-[0.9375rem] leading-relaxed text-[#4a4a4a]">
                  <p>
                    The FDA placed CJC-1295 and ipamorelin in Category 2 in September 2023 and removed both in September 2024 after their nominations were withdrawn. That was not a safety finding, and it was not an authorization either: neither peptide is on the 503A bulks list. You cannot legally purchase these from research chemical vendors for human use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Removal from Category 2 lifts a restriction without granting permission, so the compounding pathway for CJC-1295 and ipamorelin is unsettled. Peptides such as{" "}
            <Link to="/peptides/bpc-157" className={LINK_CLS}>
              BPC-157
            </Link>{" "}
            and TB-500 were removed from Category 2 later, in April 2026, and FDA advisers recommended them for the bulks list in July 2026 (
            <Link to="/blog/fda-peptide-compounding-vote-july-2026" className={LINK_CLS}>
              our coverage of that vote
            </Link>
            ); CJC-1295 and ipamorelin were not part of that review. Regulatory status can change, so verify it with your provider before starting treatment.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Practically, clinics that offer this combination work like this: you find a clinic or telehealth provider who works with peptide therapy, get a consultation, and if appropriate, receive a prescription that goes to a licensed 503A or 503B compounding pharmacy. The pharmacy compounds and ships directly to you. This is the same pathway used for bioidentical{" "}
            <Link to="/treatment/hormone-optimization" className={LINK_CLS}>
              hormone therapy
            </Link>{" "}
            and many other compounded medications.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            If you&#39;re buying CJC-1295 or ipamorelin from an online vendor without a prescription, that&#39;s a different situation legally and carries real quality and safety risks — see the sourcing section below.
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 9: Sourcing & Safety                                 */}
        {/* ============================================================ */}
        <section id="sourcing-safety">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            Sourcing &amp; Safety
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            If you&#39;re accessing these peptides outside the compounding pharmacy pathway — through research chemical vendors, overseas sources, or similar channels — here&#39;s what you need to know to reduce your risk. This market exists, people use it, and the quality variance is significant.
          </p>

          <p className="mb-2 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>What to look for:</strong>
          </p>

          <ul className="mb-4 pl-6 list-disc space-y-2 text-[#1c2522] text-[17px] leading-[30px] marker:text-[#0b7c84]">
            <li>
              <strong>Third-party Certificate of Analysis (COA)</strong> — Should come from an independent analytical lab, not the vendor&#39;s own testing. Look for the lab name and verify it&#39;s a real facility. The COA should show purity by HPLC (high-performance liquid chromatography) and confirm peptide identity by mass spectrometry.
            </li>
            <li>
              <strong>HPLC purity ≥ 98%</strong> — This is the minimum standard for a peptide you&#39;re injecting. Lower purity means unknown impurities.
            </li>
            <li>
              <strong>Correct molecular weight confirmation</strong> — Ipamorelin has a molecular weight of 711.85 g/mol. CJC-1295 with DAC is approximately 3647.3 g/mol — though molecular weight values for Ipamorelin and CJC-1295 with DAC are reported in chemical databases and supplier COAs, but independent verification of these specific values (711.85 g/mol and 3647.3 g/mol respectively) from peer-reviewed sources or FDA-authenticated data is not available. Mass spec data on the COA should confirm these.
            </li>
            <li>
              <strong>Sterile, lyophilized powder</strong> — Injectable peptides should arrive as a white lyophilized (freeze-dried) powder, not pre-dissolved. Pre-dissolved peptides are a red flag for quality and sterility.
            </li>
          </ul>

          <p className="mb-2 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Red flags:</strong>
          </p>

          <ul className="mb-4 pl-6 list-disc space-y-2 text-[#1c2522] text-[17px] leading-[30px] marker:text-[#0b7c84]">
            <li>
              <strong>No COA, or &quot;in-house testing only&quot;</strong> — The most common sign of a low-quality vendor. No independent verification means no accountability.
            </li>
            <li>
              <strong>Price dramatically below market</strong> — Legitimate peptide synthesis and independent testing costs money. Suspiciously cheap products are usually impure, underdosed, or mislabeled.
            </li>
            <li>
              <strong>No bacteriostatic water included or recommended</strong> — Proper reconstitution requires bacteriostatic water (BAC water), not sterile water, for multi-use vials. A vendor who doesn&#39;t address this is not a serious operation.
            </li>
            <li>
              <strong>Claims of FDA approval</strong> — No vendor can legally sell these for human use without a prescription. Any vendor claiming FDA approval for a compounded or research-use peptide is misrepresenting the product.
            </li>
          </ul>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            The compounding pharmacy route exists precisely to solve these quality and safety problems. If you&#39;re using the research chemical pathway, understand that you&#39;re accepting real uncertainty about what&#39;s actually in the vial.
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 10: How to Inject CJC-1295 / Ipamorelin             */}
        {/* ============================================================ */}
        <section id="how-to-inject-cjc-1295-ipamorelin">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            How to Inject CJC-1295 / Ipamorelin
          </h2>
        </section>

        {/* ============================================================ */}
        {/* SECTION 11: Administration Protocol                          */}
        {/* ============================================================ */}
        <section id="administration-protocol">
          <h3 className="scroll-mt-24 font-heading saira-bold text-[21px] leading-[28px] tracking-[-0.21px] font-semibold  text-[#1c2522] mt-8 mb-3">
            Administration Protocol
          </h3>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            Both peptides arrive as lyophilized powder and must be reconstituted with bacteriostatic water before injection. Standard reconstitution uses 1–2 mL of BAC water per vial, depending on the vial size — your pharmacy or provider will give you specific instructions.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Needle and syringe:</strong> Use a 29–31 gauge, 0.5-inch insulin syringe. These are available without a prescription at most pharmacies.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Injection sites:</strong> Subcutaneous injection into the abdomen (2 inches from the navel), outer thigh, or upper arm. Rotate sites with each injection to prevent lipohypertrophy (fatty lumps from repeated injections in the same spot).
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Technique:</strong> Pinch a fold of skin, insert the needle at a 45-degree angle, inject slowly, withdraw, and apply light pressure. No need to aspirate with subcutaneous injections.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Timing:</strong> 30–60 minutes before sleep, on an empty stomach or at least 2 hours after your last meal. GH release is blunted by elevated insulin, so injecting after a carbohydrate-heavy meal reduces effectiveness. Avoid eating for 30–60 minutes after injection as well.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <strong>Storage:</strong> Lyophilized powder is stable at room temperature for short periods but should be refrigerated. Once reconstituted, store in the refrigerator and use within 28–30 days.
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 12: Related Peptides & Comparisons                  */}
        {/* ============================================================ */}
        <section id="related-peptides-comparisons">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            Related Peptides &amp; Comparisons
          </h2>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            If you&#39;re evaluating CJC-1295 / ipamorelin, the closest alternatives worth understanding are{" "}
            <Link to="/peptides/sermorelin" className={LINK_CLS}>
              sermorelin
            </Link>,{" "}
            <Link to="/peptides/tesamorelin" className={LINK_CLS}>
              tesamorelin
            </Link>, and{" "}
            <Link to="/peptides/mk-677" className={LINK_CLS}>
              MK-677 (ibutamoren)
            </Link>.
          </p>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            <Link to="/peptides/sermorelin" className={LINK_CLS}>
              Sermorelin
            </Link>{" "}
            is an older GHRH analog with a shorter half-life and a longer clinical track record — it was FDA approved for pediatric GH deficiency and has more published human data than CJC-1295, but requires daily dosing.{" "}
            <Link to="/peptides/tesamorelin" className={LINK_CLS}>
              Tesamorelin
            </Link>{" "}
            is FDA approved for HIV-associated lipodystrophy and has the strongest evidence base of any GHRH analog, but it&#39;s approved for a narrow indication. MK-677 is an oral ghrelin mimetic (no injection required) that works through the same receptor as ipamorelin — a meaningful practical advantage, though it tends to produce more pronounced hunger and water retention.
          </p>

          {/* Table 3: Growth Hormone Secretagogues: How They Compare */}
          <div className="my-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3.5">
              <h4 className="text-sm font-bold uppercase font-saira tracking-[-0.14px] text-[#6b7280]">
                Growth Hormone Secretagogues: How They Compare
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
                      CJC-1295 / Ipamorelin
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-blue-600 text-white">
                      Sermorelin
                    </th>
                    <th className="px-3 py-2.5 text-center text-xs font-bold sm:px-5 sm:py-3.5 sm:text-sm bg-violet-600 text-white">
                      MK-677
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Mechanism
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      GHRH + Ghrelin receptor
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      GHRH receptor
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Ghrelin receptor (oral)
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      FDA Status
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Not approved
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Compoundable
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Not approved
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Administration
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Subcutaneous injection
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Subcutaneous injection
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Oral capsule/liquid
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Dosing frequency
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      3–5x/week
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Daily
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Daily
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Half-life
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      CJC: ~6–8 days (practitioner-reported, no clinical trial data available); Ipa: ~2 hrs (practitioner-reported, no clinical trial data available)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~10–20 min (practitioner-reported, no clinical trial data available)
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      ~24 hrs (practitioner-reported, no clinical trial data available)
                    </td>
                  </tr>
                  <tr className="bg-[#F7F8F9]/50">
                    <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                      Hunger stimulation
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Minimal
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Minimal
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                      Significant
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mb-4 text-[#1c2522] text-[16px] sm:text-[17px] leading-[1.8]">
            For a deeper look at how these compare in clinical practice, see our{" "}
            <Link to="/blog/growth-hormone-secretagogues-compared" className={LINK_CLS}>
              growth hormone secretagogue comparison guide
            </Link>.
          </p>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 13: FAQ                                              */}
        {/* ============================================================ */}
        <section id="faq">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            FAQ
          </h2>

          <div className="space-y-6 text-[#1c2522] text-[17px]">
            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>How is this different from just taking HGH? </strong>
                Exogenous HGH bypasses your pituitary and delivers a fixed pharmacological dose — your body&#39;s own feedback system doesn&#39;t get a say. CJC-1295 and ipamorelin work upstream, stimulating your pituitary to produce GH through its own machinery. That means somatostatin (your body&#39;s GH brake) stays in the loop, which is thought to produce a more physiologic pattern and a milder side effect profile. It&#39;s also a legally cleaner pathway — compounded HGH is more tightly regulated than these secretagogues.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>Do I need to cycle on and off, or can I use this continuously? </strong>
                Most practitioners recommend cycling — typically 3–6 months on, followed by a 1–2 month break — to prevent desensitization of the GH axis. There&#39;s no published RCT data specifically establishing the optimal cycle length for this combination (practitioner-reported, not confirmed in published clinical trials), so protocols vary by provider. Your IGF-1 levels are the practical guide: if they plateau or your provider sees signs of receptor fatigue, that&#39;s the signal to take a break.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>Will this show up on a drug test? </strong>
                Ipamorelin is detectable in biological matrices by liquid chromatography-mass spectrometry, and doping control laboratories have developed validated detection methods for it.<sup>[4]</sup> Both ipamorelin and CJC-1295 are on the WADA Prohibited List under section S2. If you compete in any tested sport, assume these peptides are prohibited until confirmed otherwise.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>What bloodwork should I get before starting? </strong>
                At minimum: baseline IGF-1, fasting glucose, HbA1c (a 90-day average of blood sugar levels), and a basic metabolic panel. Some providers also check a GH stimulation panel. You&#39;ll want a follow-up IGF-1 at 6–8 weeks to confirm the peptides are working and that your levels aren&#39;t exceeding the upper range of normal for your age.
              </p>
            </div>

            <div>
              <p className="mb-1 leading-[31px] text-[#1c2522]">
                <strong>Can women use CJC-1295 / ipamorelin? </strong>
                Yes — the combination is used in both men and women in clinical practice. Women tend to have naturally higher baseline GH pulse amplitude than men, so some practitioners start women at lower doses (100–200 mcg rather than 200–300 mcg) and adjust based on IGF-1 response. There&#39;s no published data on use during pregnancy or breastfeeding; these peptides should be avoided in those contexts.
              </p>
            </div>
          </div>

          <hr className="my-8 border-[#e5e7eb]" />
        </section>

        {/* ============================================================ */}
        {/* SECTION 14: References                                       */}
        {/* ============================================================ */}
        <section id="references">
          <h2 className="scroll-mt-24 font-heading saira-bold text-[26px] leading-[33px] tracking-[-0.26px] font-bold  text-[#1c2522] mt-10 mb-4">
            References
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-[17px] leading-[30px] text-[#1c2522] mb-8 marker:text-[#0b7c84]">
            <li>
              Teichman SL, et al. &quot;Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults.&quot;{" "}
              <em>J Clin Endocrinol Metab</em>. 2006;91(3):799-805. PMID: 16352683
            </li>
            <li>
              Raun K, et al. &quot;Ipamorelin, the first selective growth hormone secretagogue.&quot;{" "}
              <em>Eur J Endocrinol</em>. 1998;139(5):552-561. PMID: 9849822
            </li>
            <li>
              Lam B, et al. &quot;Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions.&quot;{" "}
              <em>J Am Acad Orthop Surg Glob Res Rev</em>. 2026. PMID: 41490200
            </li>
            <li>
              Kuuranne T, et al. &quot;Doping control analysis of seven bioactive peptides in horse plasma by liquid chromatography-mass spectrometry.&quot;{" "}
              <em>Anal Bioanal Chem</em>. 2013;405(16):5453-5464. PMID: 23318763
            </li>
          </ol>

          <hr className="my-8 border-[#e5e7eb]" />

          <p className="text-sm italic text-[#1c2522] text-[17px] leading-[31px]">
            This content is for informational purposes only and does not constitute medical advice. Consult a licensed healthcare provider before starting any treatment.
          </p>
        </section>
      </div>
    </article>
  );
}
