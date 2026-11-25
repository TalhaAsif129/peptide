import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoImage from "../../assets/mypeptidematch-logo.jpg";

const SITE_URL = "https://www.mypeptidematch.com";
const SITE_NAME = "MyPeptideMatch";

const pageMetadata = {
  "/": {
    title: "Peptide Therapy Clinics, Peptides & Dosing Tools | MyPeptideMatch",
    description:
      "Search 4,700+ peptide therapy clinics across 46 states, explore 87 peptides with FDA status and dosing info, and use free dosing calculators.",
  },
  "/blog": {
    title: "Peptide Therapy Blog — Guides, Research & News",
    description:
      "Guides, peptide science, regulatory updates, and patient education on peptide therapy. Learn about costs, safety, and how to choose a clinic.",
  },
  "/login": {
    title: "Find Trusted Peptide Providers & Clinics | MyPeptideMatch.com",
    description:
      "Find and compare trusted peptide providers, clinics, and research vendors across the United States. Search by location, treatment type, and peptide.",
    noindex: true,
  },
  "/signup": {
    title: "Find Trusted Peptide Providers & Clinics | MyPeptideMatch.com",
    description:
      "Find and compare trusted peptide providers, clinics, and research vendors across the United States. Search by location, treatment type, and peptide.",
    noindex: true,
  },
  "/weightloss": {
    title: "Weight Loss Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Weight Loss treatments. Compare providers and request consultations near you.",
  },
  "/antiaging": {
    title: "Anti-Aging & Longevity Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Anti-Aging & Longevity treatments. Compare providers and request consultations near you.",
  },
  "/tissuerepair": {
    title: "Tissue Repair & Recovery Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Tissue Repair & Recovery treatments. Compare providers and request consultations near you.",
  },
  "/hormoneoptimization": {
    title: "Hormone Optimization Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Hormone Optimization treatments. Compare providers and request consultations near you.",
  },
  "/cognitiveenhancement": {
    title: "Cognitive Enhancement Resources | MyPeptideMatch",
    description:
      "Explore resources about cognitive enhancement, peptide therapy clinics, and related protocol guides.",
  },
  "/sexualwellness": {
    title: "Peptide Therapy for Sexual Wellness | MyPeptideMatch",
    description:
      "Explore MyPeptideMatch resources about peptide therapy clinics and protocols related to sexual wellness.",
  },
  "/athleticperformance": {
    title: "Peptide Therapy for Athletic Performance | MyPeptideMatch",
    description:
      "Explore peptide therapy resources related to athletic performance, including clinic and protocol information.",
  },
  "/immunesupport": {
    title: "Peptide Therapy for Immune Support | MyPeptideMatch",
    description:
      "Explore MyPeptideMatch resources about peptide therapy clinics and protocols related to immune support.",
  },
  "/clinics/best-telehealth": {
    title: "Best Telehealth for Peptides, GLP-1, TRT & Longevity (2026)",
    description:
      "Compare the best US telehealth clinics for GLP-1 weight loss, TRT, peptide therapy, recovery (BPC-157, TB-500), and longevity (NAD+, sermorelin) — ranked",
  },
  "/best-telehealth/weight-loss": {
    title: "Best Telehealth for Weight Loss 2026: Ranked & Reviewed",
    description:
      "These are our independent picks for the best telehealth weight-loss clinics in 2026 — providers that prescribe GLP-1 medications (semaglutide and tirzepatide, both compounded and brand-name) through licensed US clinicians and ship from FDA-registered partner pharmacies.",
  },
  "/best-telehealth/anti-aging-longevity": {
    title: "Best Longevity Telehealth 2026: NAD+, Sermorelin, Peptides",
    description:
      "Compare the best longevity-focused telehealth clinics for 2026. Independent rankings of providers offering NAD+, sermorelin, glutathione, rapamycin, and other longevity protocols.",
  },
  "/best-telehealth/tissue-repair-recovery": {
    title: "Best BPC-157 & TB-500 Telehealth Clinics 2026 | MyPeptideMatch.com",
    description:
      "Compare the best telehealth clinics prescribing recovery peptides like BPC-157, TB-500, and GHK-Cu in 2026.",
  },
  "/best-telehealth/hormone-optimization": {
    title: "Best TRT & Hormone Telehealth Clinics 2026 | MyPeptideMatch.com",
    description:
      "Compare the best telehealth clinics for testosterone replacement therapy (TRT), enclomiphene, and growth hormone optimization in 2026.",
  },
  "/best-telehealth/sexual-wellness": {
    title: "Best PT-141 & Sexual Wellness Telehealth 2026 | MyPeptideMatch.com",
    description:
      "Compare the best telehealth clinics for sexual wellness in 2026 — PT-141 (bremelanotide), tadalafil, sildenafil, and combination formulas.",
  },
  "/best-telehealth/cognitive-enhancement": {
    title: "Best Semax & Selank Telehealth Clinics 2026 | MyPeptideMatch.com",
    description:
      "Compare the best telehealth clinics prescribing cognitive and neuro peptides in 2026 — Semax, Selank, and related compounds. Independent rankings with pricing.",
  },
  "/clinics/browse-by-state": {
    title: "Peptide Therapy Near Me: Find Peptide Clinics by State & City",
    description:
      "Find peptide therapy clinics near you. Browse 4,700+ vetted peptide and TRT clinics by state and city, compare providers offering semaglutide, tirzepatide",
  },
  "/clinics/by-treatment": {
    title: "Peptide Therapy Treatments — Browse by Category",
    description:
      "Explore peptide therapy treatment categories including weight loss, anti-aging, tissue repair, hormone optimization, cognitive enhancement, and more.",
  },
  "/treatment/anti-aging-longevity": {
    title: "Anti-Aging & Longevity Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Anti-Aging & Longevity treatments. Compare providers and request consultations near you.",
  },
  "/treatment/athletic-performance": {
    title: "Athletic Performance Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Athletic Performance treatments. Compare providers and request consultations near you.",
  },
  "/treatment/cognitive-enhancement": {
    title: "Cognitive Enhancement Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Cognitive Enhancement treatments. Compare providers and request consultations near you.",
  },
  "/treatment/hormone-optimization": {
    title: "Hormone Optimization Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Hormone Optimization treatments. Compare providers and request consultations near you.",
  },
  "/treatment/immune-support": {
    title: "Immune Support Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Immune Support treatments. Compare providers and request consultations near you.",
  },
  "/treatment/sexual-wellness": {
    title: "Sexual Wellness Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Sexual Wellness treatments. Compare providers and request consultations near you.",
  },
  "/treatment/tissue-repair-recovery": {
    title: "Tissue Repair & Recovery Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Tissue Repair & Recovery treatments. Compare providers and request consultations near you.",
  },
  "/treatment/weight-loss": {
    title: "Weight Loss Peptide Clinics | MyPeptideMatch.com",
    description:
      "Find peptide therapy clinics offering Weight Loss treatments. Compare providers and request consultations near you.",
  },
  "/clinics/claim-your-listing": {
    title: "Clinic Listing Claim | MyPeptideMatch",
    description:
      "Clinic owners can learn how to claim or update a listing in the MyPeptideMatch directory.",
    noindex: true,
  },
  "/clinics/login-to-dashboard": {
    title: "Find Trusted Peptide Providers & Clinics | MyPeptideMatch.com",
    description:
      "Find and compare trusted peptide providers, clinics, and research vendors across the United States. Search by location, treatment type, and peptide.",
    noindex: true,
  },
  "/clinics/telehealth-clinics": {
    title: "Peptide Therapy Near Me: Find Peptide Clinics by State & City",
    description:
      "Find peptide therapy clinics near you. Browse 4,700+ vetted peptide and TRT clinics by state and city, compare providers offering semaglutide, tirzepatide",
  },
  "/telehealth-clinics": {
    title: "Telehealth Peptide Clinics | MyPeptideMatch",
    description:
      "Compare telehealth peptide therapy clinics, locations, services, and consultation options.",
  },
  "/protocols": {
    title: "Peptide Protocol Guides — Dosing, Reconstitution & Supplies",
    description:
      "Clinician-reviewed dosing protocols for 100+ compounded peptides — Semaglutide, Tirzepatide, BPC-157, CJC-1295, Epithalon, and more.",
  },
  "/protocols/weight-loss-glp1": {
    title: "Weight Loss & GLP-1 Protocols — Dosing Guides | MyPeptideMatch.com",
    description:
      "Browse all weight loss & glp-1 peptide protocol guides. GLP-1, GIP, and amylin receptor agonists for medically supervised weight management, appetite suppre",
  },
  "/protocols/growth-hormone-ghrh": {
    title: "Growth Hormone & GHRH Protocols — Dosing Guides",
    description:
      "Browse all growth hormone & ghrh peptide protocol guides. GHRH analogues, GHRPs, and recombinant HGH protocols for body composition, recovery, and GH axis opt",
  },
  "/protocols/tissue-repair": {
    title: "Tissue Repair & Recovery Protocols — Dosing Guides",
    description:
      "Browse all tissue repair & recovery peptide protocol guides. Cytoprotective and regenerative peptides for musculoskeletal injuries, gut healing, and systemic",
  },
  "/protocols/anti-aging": {
    title: "Anti-Aging & Longevity Protocols — Dosing Guides",
    description:
      "Browse all anti-aging & longevity peptide protocol guides. Telomerase activators, senolytics, mitochondrial peptides, and NAD+ protocols targeting the hallmark",
  },
  "/protocols/cognitive-neuro-sleep": {
    title: "Cognitive, Neuro & Sleep Protocols — Dosing Guides",
    description:
      "Browse all cognitive, neuro & sleep peptide protocol guides. Nootropic and anxiolytic neuropeptides for cognitive enhancement, anxiety reduction, and sleep",
  },
  "/protocols/blends-stacks": {
    title: "Peptide Blends & Stacks Protocols — Dosing Guides",
    description:
      "Browse all peptide blends & stacks peptide protocol guides. Pre-mixed blends and strategic co-administration stacks targeting multiple pathways simultaneously f",
  },
  "/peptides": {
    title: "The Peptide Encyclopedia — Comprehensive Guide to Therapeutic",
    description:
      "Comprehensive guide to therapeutic peptides: uses, FDA status, mechanisms, and where to find clinics. Filter by category, FDA status, or search by name.",
  },
  "/peptides/popular": {
    title: "The Peptide Encyclopedia — Comprehensive Guide to Therapeutic",
    description:
      "Comprehensive guide to therapeutic peptides: uses, FDA status, mechanisms, and where to find clinics. Filter by category, FDA status, or search by name.",
  },
  "/peptides/by-category": {
    title: "The Peptide Encyclopedia — Comprehensive Guide to Therapeutic",
    description:
      "Comprehensive guide to therapeutic peptides: uses, FDA status, mechanisms, and where to find clinics. Filter by category, FDA status, or search by name.",
  },
  "/peptides/compare": {
    title: "Peptide Comparisons — Side-by-Side Breakdowns | MyPeptideMatch.com",
    description:
      "Compare popular peptides side by side. Mechanism, effectiveness, cost, FDA status, and side effects — all in one place to help you ask better questions at your",
  },
  "/peptides/vendors": {
    title: "Research Peptide Vendors — Compare Trusted Suppliers",
    description:
      "Browse and compare 80+ research peptide vendors. See trust signals, pricing, purity testing, and available peptides for each supplier.",
  },
  "/peptides/best-telehealth": {
    title: "Telehealth Peptide Directory | MyPeptideMatch",
    description:
      "Explore telehealth peptide clinic information from MyPeptideMatch.",
  },
  "/peptides/bpc-157": {
    title: "BPC-157: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "BPC-157 FDA status: Research Only. Research peptide for tissue repair and gut health. FDA advisers backed compounding in July 2026.",
    canonical: "https://www.mypeptidematch.com/peptides/bpc-157",
  },
  "/popularbpc": {
    title: "BPC-157: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "BPC-157 FDA status: Research Only. Research peptide for tissue repair and gut health. FDA advisers backed compounding in July 2026.",
    canonical: "https://www.mypeptidematch.com/peptides/bpc-157",
  },
  "/peptides/retatrutide": {
    title: "Retatrutide: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Retatrutide FDA status: Investigational. Retatrutide (LY3437943) is an investigational triple GLP-1/GIP/glucagon receptor agonist from Eli Lilly.",
    canonical: "https://www.mypeptidematch.com/peptides/retatrutide",
  },
  "/retatrutide": {
    title: "Retatrutide: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Retatrutide FDA status: Investigational. Retatrutide (LY3437943) is an investigational triple GLP-1/GIP/glucagon receptor agonist from Eli Lilly.",
    canonical: "https://www.mypeptidematch.com/peptides/retatrutide",
  },
  "/peptides/sermorelin": {
    title: "Sermorelin: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Sermorelin FDA status: Compoundable. GHRH analog for growth hormone deficiency, formerly FDA-approved as Geref and now compounded by prescription.",
    canonical: "https://www.mypeptidematch.com/peptides/sermorelin",
  },
  "/sermorelin": {
    title: "Sermorelin: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Sermorelin FDA status: Compoundable. GHRH analog for growth hormone deficiency, formerly FDA-approved as Geref and now compounded by prescription.",
    canonical: "https://www.mypeptidematch.com/peptides/sermorelin",
  },
  "/peptides/cjc-1295-ipamorelin": {
    title: "CJC-1295 / Ipamorelin: Dosage, Benefits, FDA Status & Clinics",
    description:
      "CJC-1295 / Ipamorelin FDA status: Research Only. Combination growth hormone secretagogue therapy.",
    canonical: "https://www.mypeptidematch.com/peptides/cjc-1295-ipamorelin",
  },
  "/ipamorelin": {
    title: "CJC-1295 / Ipamorelin: Dosage, Benefits, FDA Status & Clinics",
    description:
      "CJC-1295 / Ipamorelin FDA status: Research Only. Combination growth hormone secretagogue therapy.",
    canonical: "https://www.mypeptidematch.com/peptides/cjc-1295-ipamorelin",
  },
  "/how-to-reconstitute-peptides": {
    title: "How to Reconstitute Peptides | MyPeptideMatch",
    description:
      "Read the MyPeptideMatch guide to peptide reconstitution, with step-by-step information and answers to common questions.",
  },
  "/tools": {
    title: "Free Peptide Tools & Calculators | MyPeptideMatch.com",
    description:
      "Free peptide therapy tools including our reconstitution and dosage calculator. Calculate exact syringe units for BPC-157, semaglutide, tirzepatide, and all",
  },
  "/tools/bac-water-calculator": {
    title: "BAC Water Calculator for Peptides — How Much to Add",
    description:
      "How much bacteriostatic water to add to a peptide vial: enter vial size and dose to get mg/mL and syringe units. E.g. 10 mg + 2 mL = 5 mg/mL; 1 mg = 20 units.",
  },
  "/tools/peptide-calculator": {
    title: "Peptide Reconstitution Calculator — Free Dosage & Mixing Tool",
    description:
      "Free peptide reconstitution calculator for BPC-157, TB-500, GHK-Cu, CJC-1295, and all injectable peptides.",
  },
  "/tools/titration-calculator": {
    title: "Peptide Titration Calculator — Free Dose Ramp Schedule",
    description:
      "Free peptide titration calculator. Select your peptide, enter your start date, and get a personalized week-by-week dose escalation schedule with exact dates.",
  },
  "/tools/units-converter": {
    title: "mg to Units Converter — How Many Units Is 1 mg?",
    description:
      "On a U-100 syringe, 1 mg = 100 ÷ concentration units: at 5 mg/mL that's 20 units, at 10 mg/mL 10 units. Convert mg, mcg and mL to units for any peptide.",
  },
  "/tools/semaglutide-calculator": {
    title: "Semaglutide Reconstitution Calculator — mg to Syringe Units",
    description:
      "Free semaglutide reconstitution calculator. Enter your vial size (mg), bacteriostatic water (mL), and weekly dose to get the exact insulin syringe units",
  },
  "/tools/tirzepatide-calculator": {
    title: "Tirzepatide Reconstitution Calculator — mg to Syringe Units",
    description:
      "Free tirzepatide reconstitution calculator: enter vial size, BAC water and weekly dose to get the exact syringe units to draw. Works for 10, 30 and 60 mg vials.",
  },
  "/tools/semaglutide-units": {
    title: "Semaglutide Units Converter — mg to Syringe Units Chart",
    description:
      "Free semaglutide units converter. Convert semaglutide doses from mg to insulin syringe units instantly.",
  },
  "/tools/tirzepatide-units": {
    title: "Tirzepatide Units Converter — mg to Syringe Units Chart",
    description:
      "Free tirzepatide units converter. Convert tirzepatide doses from mg to insulin syringe units instantly.",
  },
  "/tools/bpc": {
    title: "BPC-157 Calculator & Guide | MyPeptideMatch",
    description:
      "Explore BPC-157 information and calculator tools on MyPeptideMatch.",
  },
  "/privacy": {
    title: "Privacy Policy | MyPeptideMatch.com",
    description:
      "How MyPeptideMatch.com and the MyPeptideMatch iOS app collect, use, and protect your information. Cookie policy and data requests.",
  },
  "/terms": {
    title: "Terms of Service | MyPeptideMatch.com",
    description:
      "Terms of service governing use of MyPeptideMatch.com and the MyPeptideMatch iOS app, including subscriptions, clinic listing submissions, user conduct",
  },
  "/disclaimer": {
    title: "Disclaimer | MyPeptideMatch",
    description:
      "Read the MyPeptideMatch disclaimer about site content, peptide information, and use of the site.",
  },
  "/contact": {
    title: "Contact MyPeptideMatch.com — Clinic Listings & General",
    description:
      "Contact MyPeptideMatch.com for general inquiries, clinic listing updates, or to suggest a new clinic for our directory.",
  },
  "/claim-your-listing": {
    title: "Claim Your Listing — Free Clinic Profile on MyPeptideMatch.com",
    description:
      "Clinic owners: claim your free profile on MyPeptideMatch.com to control your information, reach more patients, and receive consultation requests.",
    noindex: true,
  },
  "/claim/search": {
    title: "Find Your Clinic Listing | MyPeptideMatch",
    description:
      "Search the MyPeptideMatch clinic directory for an existing clinic listing.",
    noindex: true,
  },
  "/claim/add": {
    title: "Add a Clinic Listing | MyPeptideMatch",
    description:
      "Submit clinic information for consideration in the MyPeptideMatch directory.",
    noindex: true,
  },
  "/affiliate-disclosure": {
    title: "Affiliate Disclosure — MyPeptideMatch.com | MyPeptideMatch.com",
    description:
      "Learn how MyPeptideMatch.com earns revenue through affiliate partnerships with research peptide suppliers and how it affects (or doesn't affect) our content.",
  },
  "/about": {
    title: "About MyPeptideMatch.com — Independent Peptide Clinic",
    description:
      "Learn about MyPeptideMatch.com — an independent directory helping you find peptide therapy clinics and research peptide suppliers.",
  },
  "/peptide-therapy-report": {
    title: "State of Peptide Therapy in the US — 2026 Data Report",
    description:
      "Data from 4,700+ US peptide therapy clinics: most-prescribed peptides, top states by clinic density, GLP-1 adoption trends, and what's actually being",
  },
  "/semaglutide": {
    title: "Semaglutide: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Semaglutide FDA status: FDA-Approved. FDA-approved GLP-1 agonist for weight loss and type 2 diabetes.",
    canonical: "https://www.mypeptidematch.com/semaglutide",
  },
  "/peptides/semaglutide": {
    title: "Semaglutide: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Semaglutide FDA status: FDA-Approved. FDA-approved GLP-1 agonist for weight loss and type 2 diabetes.",
    canonical: "https://www.mypeptidematch.com/peptides/semaglutide",
  },
  "/tirzepatide": {
    title: "Tirzepatide: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Tirzepatide FDA status: FDA-Approved. Dual GIP/GLP-1 agonist for weight loss and type 2 diabetes.",
    canonical: "https://www.mypeptidematch.com/tirzepatide",
  },
  "/peptides/tirzepatide": {
    title: "Tirzepatide: Dosage, Benefits, FDA Status & Clinics (2026)",
    description:
      "Tirzepatide FDA status: FDA-Approved. Dual GIP/GLP-1 agonist for weight loss and type 2 diabetes.",
    canonical: "https://www.mypeptidematch.com/peptides/tirzepatide",
  },
  "/report": {
    title: "State of Peptide Therapy in the US — 2026 Data Report",
    description:
      "Data from 4,700+ US peptide therapy clinics: most-prescribed peptides, top states by clinic density, GLP-1 adoption trends, and what's actually being",
  },
};

function setMetaTag(attribute, name, content) {
  let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
}

export default function SEO() {
  const { pathname } = useLocation();
  const normalizedPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const page = pageMetadata[normalizedPath];

  useEffect(() => {
    if (!page) {
      return;
    }

    const canonicalTarget = page.canonical || normalizedPath;
    const canonicalUrl = canonicalTarget.startsWith("http")
      ? canonicalTarget
      : new URL(canonicalTarget, SITE_URL).href;
    const ogImage = page.image || "https://www.mypeptidematch.com/og-default.png";
    const twitterCard = page.twitterCard || "summary_large_image";

    document.title = page.title;
    setMetaTag("name", "description", page.description);
    setMetaTag("name", "robots", page.noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(canonicalUrl);
    setMetaTag("property", "og:title", page.title);
    setMetaTag("property", "og:description", page.description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", "MyPeptideMatch.com");
    setMetaTag("property", "og:locale", "en_US");
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", page.title);
    setMetaTag("name", "twitter:card", twitterCard);
    setMetaTag("name", "twitter:site", "@MyPeptideMatch");
    setMetaTag("name", "twitter:title", page.title);
    setMetaTag("name", "twitter:description", page.description);
    setMetaTag("name", "twitter:url", canonicalUrl);
    setMetaTag("name", "twitter:image", ogImage);

    const siteSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "MyPeptideMatch.com",
          url: `${SITE_URL}/`,
          logo: new URL(logoImage, SITE_URL).href,
          description:
            "Independent directory helping consumers find, compare, and evaluate peptide therapy clinics and research vendors across the United States.",
          sameAs: [
            "https://www.facebook.com/mypeptidematch",
            "https://www.linkedin.com/company/mypeptidematch/",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: `${SITE_URL}/contact`,
          },
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
          inLanguage: "en-US",
        },
      ],
    };
    const siteSchemaElement = document.head.querySelector("#site-seo-schema");

    if (siteSchemaElement) {
      siteSchemaElement.textContent = JSON.stringify(siteSchema);
    }

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: canonicalUrl,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
    };
    let schema = document.head.querySelector("#page-seo-schema");

    if (!schema) {
      schema = document.createElement("script");
      schema.id = "page-seo-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(webPageSchema);
  }, [page, normalizedPath]);

  if (!page) {
    return (
      <Helmet>
        <title>Page Not Found | {SITE_NAME}</title>
        <meta name="description" content="The requested page could not be found." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    );
  }

  return null;
}
