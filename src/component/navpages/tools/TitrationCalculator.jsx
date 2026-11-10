// src/component/pages/TitrationCalculator/TitrationCalculator.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TitrationCalculator() {
  const [startingDose, setStartingDose] = useState("");
  const [targetDose, setTargetDose] = useState("");
  const [doseUnit, setDoseUnit] = useState("mg");
  const [escalationMode, setEscalationMode] = useState("steps");
  const [numberOfLevels, setNumberOfLevels] = useState("5");
  const [weeksPerStep, setWeeksPerStep] = useState("4");
  const [frequency, setFrequency] = useState("Weekly");
  const [startDate, setStartDate] = useState("2026-10-19");

  const handleGenerate = () => {
    console.log("Generating schedule with:", {
      startingDose,
      targetDose,
      doseUnit,
      escalationMode,
      numberOfLevels,
      weeksPerStep,
      frequency,
      startDate,
    });
  };

  // ===== FAQ Data =====
  const faqs = [
    {
      q: "What is peptide titration?",
      a: "Peptide titration is the process of starting at a low dose and gradually increasing it over time until reaching the target therapeutic dose. This gives your body time to adapt and minimizes side effects like nausea and GI discomfort.",
    },
    {
      q: "How long does semaglutide titration take?",
      a: "The standard semaglutide titration takes 16–20 weeks across 5 dose levels (0.25 mg → 0.5 mg → 1.0 mg → 1.7 mg → 2.4 mg), with each level typically maintained for 4 weeks before escalating.",
    },
    {
      q: "Can I skip semaglutide titration steps?",
      a: "No, skipping titration steps is not recommended. It dramatically increases the risk of severe gastrointestinal side effects and may lead to treatment discontinuation. Always follow your provider's protocol.",
    },
    {
      q: "What happens if I increase my tirzepatide dose too fast?",
      a: "Increasing too quickly can cause severe nausea, vomiting, diarrhea, and abdominal pain. In rare cases, it may trigger pancreatitis. Always follow the prescribed titration schedule and consult your provider before making changes.",
    },
    {
      q: "How do I know when to increase my peptide dose?",
      a: "Typically, you increase your dose after completing the recommended duration at each level (usually 4 weeks) and if side effects are manageable. Your provider may extend a level if you're still experiencing significant side effects.",
    },
    {
      q: "What is the maximum dose of semaglutide for weight loss?",
      a: "The maximum approved dose of semaglutide for weight management (Wegovy) is 2.4 mg injected once weekly. Some compounded protocols may go slightly higher under medical supervision, but 2.4 mg is the standard target.",
    },
    {
      q: "Can I titrate down (reduce) my peptide dose?",
      a: "Yes. If you're experiencing significant side effects or have reached your weight loss goal, your provider may recommend reducing your dose gradually. Never stop abruptly without consulting your provider.",
    },
    {
      q: "Do all peptides require titration?",
      a: "Not all. GLP-1 agonists (semaglutide, tirzepatide, liraglutide) typically require titration. Some peptides like BPC-157 or TB-500 may use fixed dosing without escalation. Always follow your specific protocol.",
    },
    {
      q: "What should I do if I experience nausea during titration?",
      a: "Stay hydrated, eat smaller and more frequent meals, avoid high-fat foods, and time your injections in the evening. If nausea persists, talk to your provider — they may extend your current dose level before escalating.",
    },
    {
      q: "How does this titration calculator work?",
      a: "This calculator uses published clinical protocols to generate personalized week-by-week dose escalation schedules. Enter your starting dose, target dose, and parameters, then click 'Generate Schedule' to see your timeline with exact dates.",
    },
    {
      q: "Is the retatrutide titration schedule the same as semaglutide?",
      a: "No, retatrutide uses a different titration: 1 mg → 2 mg → 4 mg → 8 mg → 12 mg weekly, with larger dose jumps than semaglutide. It's an investigational triple agonist and requires medical supervision.",
    },
    {
      q: "Can I use this calculator for compounded semaglutide?",
      a: "Yes. The titration schedule is identical whether you use brand-name (Wegovy) or compounded semaglutide. Only the concentration and delivery mechanism differ — use our reconstitution calculator to determine exact syringe units.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* ===== Hero Section ===== */}
      <section className="bg-[#f0f4f3] pt-6 md:pt-10 pb-10">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <nav className="flex flex-wrap items-center gap-2 text-[13px] text-[#6a7a75] mb-6">
            <Link to="/" className="text-[#4a5a55] no-underline hover:text-[#0d7d85]">
              Home
            </Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <Link to="/tools" className="text-[#4a5a55] no-underline hover:text-[#0d7d85]">
              Tools
            </Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <span className="text-[#4a5a55] font-medium">
              Peptide Titration Calculator
            </span>
          </nav>

          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 bg-white text-[#0d5b60] text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full border border-[#d5e5e2]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M14 14l-4-4" />
              </svg>
              Free Titration Tool
            </span>
          </div>

          <h1 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
            Peptide Titration Calculator — Dose Escalation Schedule
          </h1>

          <p className="text-[#4a5a55] text-[15px] leading-relaxed mb-4 max-w-[900px]">
            Generate a personalized week-by-week dose escalation schedule for
            any peptide that requires titration. Enter your starting and target
            doses, choose your escalation steps and start date, and get exact
            dates for every dose increase — from semaglutide and tirzepatide to
            CJC-1295/Ipamorelin and beyond.
          </p>
          <p className="text-[#4a5a55] text-[15px] leading-relaxed mb-7 max-w-[900px]">
            Free to use, no signup required. Print your schedule or share it
            with your healthcare provider via a shareable link.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link to="#" className="inline-flex items-center justify-center bg-[#0d5b60] text-white text-[14px] font-semibold px-4 py-2 rounded-lg no-underline hover:bg-[#0a4a4e] transition-colors">
              Jump to calculator
            </Link>
            <Link to="#" className="inline-flex items-center justify-center bg-[#e8efee] text-[#0f2027] text-[14px] font-semibold px-4 py-2 rounded-lg border border-[#d5dedb] no-underline hover:border-[#0d7d85] hover:text-[#0d7d85] transition-colors">
              Reconstitution calculator
            </Link>
            <Link to="#" className="inline-flex items-center justify-center bg-[#e8efee] text-[#0f2027] text-[14px] font-semibold px-4 py-2 rounded-lg border border-[#d5dedb] no-underline hover:border-[#0d7d85] hover:text-[#0d7d85] transition-colors">
              Units converter
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#6a7a75]">
            <span>Last updated: February 2026</span>
            <span className="text-[#c5d0cc]">|</span>
            <span>Medically reviewed by the MyPeptideMatch Editorial team</span>
          </div>
        </div>
      </section>

      {/* ===== Calculator Form Section ===== */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="bg-white border border-[#d5d5d5] rounded-lg p-6 md:p-7">
            {/* Row 1: Starting + Target + Unit */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-5 mb-6">
              <div>
                <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
                  Starting Dose
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={startingDose}
                    onChange={(e) => setStartingDose(e.target.value)}
                    className="w-full px-3.5 py-3 pr-12 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d7d85] transition-colors"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                    mg
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
                  Target Dose
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={targetDose}
                    onChange={(e) => setTargetDose(e.target.value)}
                    className="w-full px-3.5 py-3 pr-12 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d7d85] transition-colors"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                    mg
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
                  Unit
                </label>
                <div className="inline-flex items-stretch bg-white border border-[#d5d5d5] rounded-md overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setDoseUnit("mg")}
                    className={`px-5 py-3 text-[13px] font-semibold transition-colors border border-t border-b ${
                      doseUnit === "mg"
                        ? "bg-[#0d5b60] text-white border-[#0d5b60]"
                        : "bg-transparent text-[#4a5a55] border-transparent hover:text-[#0d5b60]"
                    }`}
                  >
                    mg
                  </button>
                  <button
                    type="button"
                    onClick={() => setDoseUnit("mcg")}
                    className={`px-5 py-3 text-[13px] font-semibold transition-colors border border-t border-b border-r-0 ${
                      doseUnit === "mcg"
                        ? "bg-[#0d5b60] text-white border-[#0d5b60]"
                        : "bg-transparent text-[#4a5a55] border-transparent hover:text-[#0d5b60]"
                    }`}
                  >
                    mcg
                  </button>
                </div>
              </div>
            </div>

            {/* Escalation Mode */}
            <div className="mb-6">
              <label className="block text-[14px] font-semibold text-[#0f2027] mb-3">
                Escalation Mode
              </label>
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="escalationMode"
                    value="steps"
                    checked={escalationMode === "steps"}
                    onChange={(e) => setEscalationMode(e.target.value)}
                    className="w-4 h-4 accent-[#0d5b60]"
                  />
                  <span className="text-[14px] text-[#0f2027]">Number of steps</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="escalationMode"
                    value="fixed"
                    checked={escalationMode === "fixed"}
                    onChange={(e) => setEscalationMode(e.target.value)}
                    className="w-4 h-4 accent-[#0d5b60]"
                  />
                  <span className="text-[14px] text-[#0f2027]">Fixed increment per step</span>
                </label>
              </div>
            </div>

            {/* Number of dose levels */}
            <div className="mb-6">
              <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
                Number of dose levels
              </label>
              <div className="relative w-full max-w-[240px]">
                <input
                  type="text"
                  value={numberOfLevels}
                  onChange={(e) => setNumberOfLevels(e.target.value)}
                  className="w-full px-3.5 py-3 pr-14 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d7d85] transition-colors"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                  steps
                </span>
              </div>
            </div>

            {/* Row 2: Weeks + Frequency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
                  Weeks per step
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={weeksPerStep}
                    onChange={(e) => setWeeksPerStep(e.target.value)}
                    className="w-full px-3.5 py-3 pr-14 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d7d85] transition-colors"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                    weeks
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
                  Injection Frequency
                </label>
                <div className="relative">
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3.5 py-3 pr-10 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d7d85] transition-colors appearance-none cursor-pointer bg-white"
                  >
                    <option value="Daily">Daily</option>
                    <option value="Every other Day">Every other Day</option>
                    <option value="3x / week">3x / week</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Every two weeks">Every two weeks</option>
                  </select>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f2027" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Start Date + Generate */}
            <div className="mb-6">
              <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
                Start Date
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full max-w-[200px] px-3.5 py-3 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d7d85] transition-colors cursor-pointer"
                />
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="inline-flex items-center justify-center gap-2 bg-[#e2e8e6] text-[#4a5a55] text-[14px] font-semibold px-5 py-3 rounded-md border border-[#d5d5d5] hover:bg-[#d5dedb] hover:text-[#0f2027] transition-colors whitespace-nowrap"
                >
                  Generate Schedule
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Info Message */}
            <div className="mt-8 pt-6 border-t border-[#e8eeec]">
              <p className="text-[14px] text-[#6a7a75] text-center leading-relaxed">
                Enter your starting dose, target dose, and escalation parameters, then click{" "}
                <span className="font-semibold text-[#4a5a55]">&quot;Generate Schedule&quot;</span>{" "}
                to see your personalized titration timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-1 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              What Is Peptide Titration?
            </h2>
            <p className="mb-5">
              Peptide titration is the process of starting a medication at a low dose and gradually increasing it over a defined period until the target therapeutic dose is reached. This approach is standard medical practice for many peptide therapies, particularly GLP-1 receptor agonists like semaglutide, tirzepatide, and liraglutide. The primary purpose is to give your body time to adapt to the medication, significantly reducing the incidence and severity of side effects — especially the gastrointestinal symptoms (nausea, vomiting, diarrhea) that are most common during the early weeks of treatment.
            </p>
            <p className="mb-5">
              Without proper titration, jumping directly to a full therapeutic dose dramatically increases the risk of adverse effects that could lead to treatment discontinuation. Clinical trials for both semaglutide and tirzepatide demonstrated that patients who followed structured titration protocols had significantly better adherence rates and reported milder side effects compared to those who escalated too quickly.
            </p>
            <p className="mb-5">
              Titration is not unique to peptide therapies — it is used across many classes of medications including antidepressants, blood pressure medications, and insulin. For peptides specifically, the escalation timeline varies by compound: weekly GLP-1 agonists typically titrate over 16–24 weeks with 4-week intervals at each dose, while growth hormone secretagogues may follow shorter 2–4 week ramp-up periods. Your healthcare provider may also personalize the schedule based on your tolerance, body weight, and treatment goals.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-2 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              Semaglutide Titration Schedule — Complete Guide
            </h2>
            <p className="mb-5">
              The standard semaglutide titration schedule for weight management (Wegovy) follows a 5-step dose escalation over 16–20 weeks: 0.25 mg → 0.5 mg → 1.0 mg → 1.7 mg → 2.4 mg, injected once weekly. Each dose level is maintained for 4 weeks before increasing, giving your GLP-1 receptors time to down-regulate and your gut to adapt to slowed gastric emptying.
            </p>
            <p className="mb-5">
              During the first phase (0.25 mg), most patients notice mild nausea and subtle appetite changes. By the 0.5 mg phase, appetite suppression becomes more pronounced, and early weight loss typically begins. The 1.0 mg dose is where many patients report the most significant shift in food noise and cravings. At 1.7 mg and 2.4 mg, the full therapeutic effect is achieved, with clinical trials showing average weight loss of 15–17% of body weight over 68 weeks.
            </p>
            <p className="mb-5">
              If GI side effects are significant at any dose level, it is common and safe to extend the time at that dose for an additional 2–4 weeks before escalating. Compounded semaglutide follows the same titration principle — the dose amounts and timing are identical, only the vial concentration and delivery mechanism differ. Use our reconstitution calculator to determine exact syringe units for compounded vials. Learn more about semaglutide in our complete semaglutide guide.
            </p>
            <p className="mb-5">
              Looking for a provider? Find a clinic that prescribes semaglutide →
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-3 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              Tirzepatide Dose Escalation — Week-by-Week Breakdown
            </h2>
            <p className="mb-5">
              Tirzepatide (Mounjaro/Zepbound) is a dual GIP/GLP-1 receptor agonist with a 6-step titration: 2.5 mg → 5 mg → 7.5 mg → 10 mg → 12.5 mg → 15 mg, injected once weekly. This longer ramp-up over 24+ weeks reflects tirzepatide's higher maximum dose and dual-agonist mechanism compared to semaglutide's single GLP-1 pathway.
            </p>
            <p className="mb-5">
              Clinical trial data (SURMOUNT program) showed average weight loss of 20–26% of body weight at the highest doses — the most of any approved weight loss medication. The side effect profile is similar to semaglutide, with nausea, diarrhea, and decreased appetite being most common during dose escalation phases. Many patients find their optimal dose below the maximum (10 mg is a common stopping point), balancing efficacy against side effects.
            </p>
            <p className="mb-5">
              Read our full tirzepatide guide for clinical evidence, cost comparisons, and provider options.
            </p>
            <p className="mb-5">
              Find a clinic that prescribes tirzepatide →
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-4 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              Retatrutide Titration Protocol
            </h2>
            <p className="mb-5">
              Retatrutide is a novel triple agonist targeting GIP, GLP-1, and glucagon receptors simultaneously — a first-in-class mechanism generating significant excitement in the obesity treatment space. Its titration schedule follows a 5-step escalation: 1 mg → 2 mg → 4 mg → 8 mg → 12 mg weekly, with notably larger dose jumps than semaglutide or tirzepatide.
            </p>
            <p className="mb-5">
              Phase 2 trial data showed up to 24% body weight reduction at the highest doses over 48 weeks. The glucagon receptor activation adds metabolic benefits beyond appetite suppression, including increased energy expenditure and improved lipid metabolism. The side effect profile is comparable to other GLP-1 agonists, with GI symptoms manageable through proper titration.
            </p>
            <p className="mb-5">Learn more in our retatrutide guide.</p>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-5 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              Liraglutide Titration Schedule
            </h2>
            <p className="mb-5">
              Liraglutide (Saxenda) is a daily GLP-1 receptor agonist with a faster 5-week titration to target dose: 0.6 mg → 1.2 mg → 1.8 mg → 2.4 mg → 3.0 mg per day. Unlike weekly injectables, liraglutide requires daily subcutaneous injection, typically at the same time each day.
            </p>
            <p className="mb-5">
              The daily dosing means faster onset of action but also more consistent GI side effect exposure. Compared to semaglutide, liraglutide shows somewhat lower average weight loss (about 8% of body weight) but has a longer track record of safety data. It remains a viable option for patients who prefer a gradual daily approach or who don't tolerate weekly GLP-1 medications.
            </p>
            <p className="mb-5">See our liraglutide guide for dosing details and clinical evidence.</p>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-6 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              CJC-1295/Ipamorelin Dosing Schedule
            </h2>
            <p className="mb-5">
              CJC-1295 combined with Ipamorelin is one of the most popular growth hormone secretagogue protocols. Unlike GLP-1 agonists, this combination uses a daily injection protocol — typically 5 days on, 2 days off — with bedtime administration to align with the body's natural GH pulse pattern.
            </p>
            <p className="mb-5">
              The titration is simpler: start at 100 mcg of each peptide (200 mcg total) for the first month, increase to 150 mcg each (300 mcg total) for weeks 5–8, and reach the target dose of 200 mcg each (400 mcg total) for weeks 9–12. Benefits include improved sleep quality, faster recovery, enhanced body composition, and anti-aging effects. Side effects are generally mild — water retention, tingling, and occasional headaches.
            </p>
            <p className="mb-5">Learn more in our CJC-1295/Ipamorelin guide.</p>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-7 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              Tips for Managing Side Effects During Dose Escalation
            </h2>
            <p className="mb-5">
              Most side effects from peptide titration are temporary and improve as your body adjusts to each new dose level. The following strategies can help minimize discomfort during dose escalation:
            </p>
            <ul className="list-disc space-y-4 pl-6 text-base leading-7 text-gray-700">
              <li className="pl-1">
                <strong className="font-bold text-gray-900">Stay hydrated.</strong>{" "}
                Drink at least 64 oz of water daily. Dehydration worsens nausea and constipation, the two most common GLP-1 side effects.
              </li>
              <li className="pl-1">
                <strong className="font-bold text-gray-900">Eat smaller, more frequent meals.</strong>{" "}
                GLP-1 agonists slow gastric emptying. Eating large meals can overwhelm a slower digestive system and trigger nausea.
              </li>
              <li className="pl-1">
                <strong className="font-bold text-gray-900">Avoid high-fat and fried foods.</strong>{" "}
                These take longer to digest and are more likely to cause nausea during titration.
              </li>
              <li className="pl-1">
                <strong className="font-bold text-gray-900">Time your injections.</strong>{" "}
                Many patients find that evening injections reduce daytime nausea, as the peak side effects occur during sleep.
              </li>
              <li className="pl-1">
                <strong className="font-bold text-gray-900">Rotate injection sites.</strong>{" "}
                Alternate between abdomen, thigh, and upper arm to reduce injection site reactions.
              </li>
              <li className="pl-1">
                <strong className="font-bold text-gray-900">When to contact your provider:</strong>{" "}
                Persistent vomiting lasting more than 3 days, severe abdominal pain (possible pancreatitis sign), inability to keep fluids down, or signs of allergic reaction. If symptoms are manageable but persistent, consider staying at your current dose for an extra 1–2 weeks before escalating.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Footer Section-8 ===== */}
      <section className="bg-[#F6F8F7] py-10">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5">
              How This Calculator Works
            </h2>
            <p className="mb-5">
              This titration calculator uses published clinical protocols and manufacturer guidelines to generate personalized dose escalation schedules. When you select a peptide and start date, the tool maps each protocol phase to specific calendar weeks, giving you exact date ranges for every dose change. The protocols include standard titration schedules (gradual dose increases), flat-dose protocols (no escalation), cycled protocols (periodic on/off phases), and as-needed dosing patterns.
            </p>
            <p className="mb-5">
              This tool is for educational purposes only. While the protocols reflect accepted clinical practice, your healthcare provider may recommend modifications based on your individual health status, body weight, medical history, concurrent medications, and treatment response. Always work with a qualified provider when starting or adjusting peptide therapy.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Related Content Section ===== */}
      <section className="bg-[#F6F8F7] py-10 md:py-12">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          {/* Related Tools */}
          <div className="mb-12">
            <h2 className="text-[#0f2027] font-extrabold text-[26px] md:text-[30px] tracking-tight mb-5">
              Related Tools
            </h2>

            <div className="space-y-3">
              <div className="bg-white border border-[#e2e8e6] rounded-lg p-5 flex gap-4 hover:shadow-sm transition-shadow">
                <div className="w-11 h-11 rounded-md bg-[#e8f1ef] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d5b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="11" x2="8" y2="11" />
                    <line x1="12" y1="11" x2="12" y2="11" />
                    <line x1="16" y1="11" x2="16" y2="11" />
                    <line x1="8" y1="15" x2="8" y2="15" />
                    <line x1="12" y1="15" x2="12" y2="15" />
                    <line x1="16" y1="15" x2="16" y2="15" />
                    <line x1="8" y1="19" x2="16" y2="19" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#0f2027] font-bold text-[15px] mb-1.5 leading-snug">
                    Peptide Reconstitution Calculator
                  </h3>
                  <p className="text-[#4a5a55] text-[14px] leading-relaxed mb-3">
                    Calculate exact insulin syringe units from vial size, bacteriostatic water volume, and desired dose. Includes peptide presets, cost-per-dose calculator, and shareable results.
                  </p>
                  <Link to="#" className="inline-flex items-center gap-1.5 text-[#0d5b60] font-bold text-[14px] no-underline hover:gap-2.5 transition-all">
                    Open tool
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-[#e2e8e6] rounded-lg p-5 flex gap-4 hover:shadow-sm transition-shadow">
                <div className="w-11 h-11 rounded-md bg-[#e8f1ef] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d5b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h14l-4-4" />
                    <path d="M21 16H7l4 4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#0f2027] font-bold text-[15px] mb-1.5 leading-snug">
                    Peptide Units Converter
                  </h3>
                  <p className="text-[#4a5a55] text-[14px] leading-relaxed mb-3">
                    Convert peptide doses between mg, mcg, mL, and insulin syringe units. Includes semaglutide and tirzepatide presets and a units → mg reverse calculator.
                  </p>
                  <Link to="#" className="inline-flex items-center gap-1.5 text-[#0d5b60] font-bold text-[14px] no-underline hover:gap-2.5 transition-all">
                    Open tool
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-[26px] md:text-[30px] tracking-tight mb-5">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="#" className="block bg-white border border-[#e2e8e6] rounded-lg p-5 no-underline hover:shadow-sm hover:border-[#c5d5d1] transition-all">
                <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug mb-2.5">
                  Semaglutide vs. Tirzepatide Side Effects: Complete Head-to-Head Comparison (2026)
                </h3>
                <p className="text-[#4a5a55] text-[14px] leading-relaxed">
                  Comprehensive comparison of semaglutide (Wegovy) and tirzepatide (Zepbound) side effects, including...
                </p>
              </Link>

              <Link to="#" className="block bg-white border border-[#e2e8e6] rounded-lg p-5 no-underline hover:shadow-sm hover:border-[#c5d5d1] transition-all">
                <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug mb-2.5">
                  Semaglutide Dosing: What Clinics Prescribe and What to Expect
                </h3>
                <p className="text-[#4a5a55] text-[14px] leading-relaxed">
                  Explore the dosing protocols, titration schedules, and administration methods for semaglutide. Understan...
                </p>
              </Link>

              <Link to="#" className="block bg-white border border-[#e2e8e6] rounded-lg p-5 no-underline hover:shadow-sm hover:border-[#c5d5d1] transition-all">
                <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug mb-2.5">
                  Tirzepatide Results: What to Realistically Expect
                </h3>
                <p className="text-[#4a5a55] text-[14px] leading-relaxed">
                  Explore realistic expectations and clinical outcomes for tirzepatide therapy, focusing on weight loss and...
                </p>
              </Link>

              <Link to="#" className="block bg-white border border-[#e2e8e6] rounded-lg p-5 no-underline hover:shadow-sm hover:border-[#c5d5d1] transition-all">
                <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug mb-2.5">
                  Semaglutide Results: What to Realistically Expect
                </h3>
                <p className="text-[#4a5a55] text-[14px] leading-relaxed">
                  Discover realistic outcomes and expectations for semaglutide therapy, a GLP-1 receptor agonist, in...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="bg-[#F6F8F7] py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div className="mb-7">
            <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4a5a55] text-[15px] leading-relaxed">
              Common questions about peptide titration, dose escalation schedules, and using this calculator.
            </p>
          </div>

          <div className="border border-[#e2e8e6] rounded-lg overflow-hidden">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group border-b border-[#e2e8e6] last:border-b-0 bg-white"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 hover:bg-[#f8faf9] transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="text-[#0f2027] font-semibold text-[15px] leading-snug">
                    {item.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0f2027"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-[#4a5a55] text-[14px] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
            {/* ===== CTA Section ===== */}
      <section className="bg-[#F6F8F7] py-10 md:py-12 font-sans">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div className="bg-[#0d5b60] rounded-2xl px-8 md:px-12 py-10 md:py-14">
            <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              Need Guidance?
            </p>

            <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5 max-w-[600px]">
              Get a personalized titration plan from a clinic
            </h2>

            <p className="text-white/85 text-[15px] leading-relaxed mb-8 max-w-[520px]">
              Our directory can help you find peptide therapy clinics near you
              with experienced providers who can create a personalized
              titration plan.
            </p>

            <Link
              to="/clinics"
              className="inline-flex items-center gap-2 bg-white text-[#0d5b60] font-bold text-[15px] px-6 py-3 rounded-full no-underline hover:bg-[#e8f1ef] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Find a Clinic
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Medical & Legal Disclaimer ===== */}
      <section className="bg-[#F6F8F7] pb-16 font-sans">
        <div className="mx-auto max-w-[850px] px-6 md:px-10">
          <div className="bg-[#fdf8f0] border border-[#e8d5b7] rounded-xl px-6 md:px-8 py-7">

            {/* Header */}
            <div className="flex items-center gap-2.5 mb-6">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c97a1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <h3 className="text-[#0f2027] font-bold text-[15px] tracking-tight">
                Important Medical & Legal Disclaimer
              </h3>
            </div>

            {/* Disclaimer Items */}
            <div className="space-y-4 text-[14px] text-[#3a4a52] leading-relaxed">

              <p>
                <strong className="font-bold text-[#0f2027]">Not Medical Advice.</strong>{" "}
                The information and tools provided on MyPeptideMatch.com, including this Peptide
                Titration Calculator, are for educational and informational purposes only. Nothing on this website constitutes
                medical advice, diagnosis, or treatment recommendations.
              </p>

              <p>
                <strong className="font-bold text-[#0f2027]">Consult a Healthcare Provider.</strong>{" "}
                Always seek the advice of a qualified healthcare professional before starting,
                stopping, or modifying any peptide therapy, medication, or supplement regimen. Never disregard professional
                medical advice or delay seeking it because of information obtained from this tool.
              </p>

              <p>
                <strong className="font-bold text-[#0f2027]">No Doctor-Patient Relationship.</strong>{" "}
                Use of this calculator does not create a doctor-patient or provider-patient
                relationship between you and MyPeptideMatch.com or any of its contributors.
              </p>

              <p>
                <strong className="font-bold text-[#0f2027]">Protocol Variability.</strong>{" "}
                The titration schedules generated by this tool are based on commonly published clinical
                protocols and manufacturer guidelines. Your healthcare provider may recommend a different dosing schedule
                based on your individual health status, body weight, medical history, concurrent medications, and treatment
                response. Individual dosing should always be determined by your prescribing physician.
              </p>

              <p>
                <strong className="font-bold text-[#0f2027]">Research-Use Peptides.</strong>{" "}
                Some peptides referenced on this site may only be legally available for research
                purposes and may not be approved by the FDA for human use. MyPeptideMatch.com does not encourage or
                endorse the use of any substance in violation of applicable laws or regulations.
              </p>

              <p>
                <strong className="font-bold text-[#0f2027]">No Liability.</strong>{" "}
                MyPeptideMatch.com, its owners, contributors, and affiliates assume no responsibility or liability for
                any errors, omissions, or outcomes resulting from the use of this tool. Use at your own risk.
              </p>

              <p>
                <strong className="font-bold text-[#0f2027]">Emergency.</strong>{" "}
                If you are experiencing a medical emergency, call 911 or your local emergency number immediately.
              </p>

            </div>
          </div>
        </div>
      </section>

            {/* ===== Dosing & Reconstitution Guides ===== */}
      <section className="bg-white  mt-5 pb-16 md:pb-20 font-sans">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">

          {/* Heading */}
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-7">
            Dosing & reconstitution guides
          </h2>

          {/* Cards Grid — 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Card 1 — How to Reconstitute Peptides */}
            <Link
              to="#"
              className="group bg-white border border-[#e2e8e6] rounded-xl p-5 flex items-start gap-4 no-underline hover:border-[#0d5b60] hover:shadow-sm transition-all"
            >
              {/* Icon Box */}
              <div className="w-11 h-11 rounded-lg bg-[#e8f1ef] flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d5b60"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3h8v3l-1 1v2H9V7L8 6V3z" />
                  <path d="M9 9v9a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V9" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug group-hover:text-[#0d5b60] transition-colors">
                    How to Reconstitute Peptides
                  </h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0f2027"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <p className="text-[#4a5a55] text-[13.5px] leading-relaxed">
                  Step-by-step guide to mixing lyophilized peptides with bacteriostatic water, sterile technique, and common mistakes.
                </p>
              </div>
            </Link>

            {/* Card 2 — Peptide Dosage Guide */}
            <Link
              to="#"
              className="group bg-white border border-[#e2e8e6] rounded-xl p-5 flex items-start gap-4 no-underline hover:border-[#0d5b60] hover:shadow-sm transition-all"
            >
              {/* Icon Box */}
              <div className="w-11 h-11 rounded-lg bg-[#e8f1ef] flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d5b60"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug group-hover:text-[#0d5b60] transition-colors">
                    Peptide Dosage Guide
                  </h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0f2027"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <p className="text-[#4a5a55] text-[13.5px] leading-relaxed">
                  Dosing charts for popular peptides with FDA-approved, clinical-trial, and practitioner-reported ranges clearly labeled.
                </p>
              </div>
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}