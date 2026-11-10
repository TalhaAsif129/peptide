import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoImage from "../../assets/mypeptidematch-logo.jpg";

const SITE_URL = "https://www.mypeptidematch.com";
const SITE_NAME = "MyPeptideMatch";

const pageMetadata = {
  "/": {
    title: "Peptide Therapy Clinics, Peptides & Tools | MyPeptideMatch",
    description:
      "Explore peptide therapy clinics, peptide profiles, comparison resources, and free dosing tools on MyPeptideMatch.",
  },
  "/blog": {
    title: "Peptide Therapy Blog | MyPeptideMatch",
    description:
      "Read the latest MyPeptideMatch articles about peptide therapy, clinic directories, and peptide research.",
  },
  "/login": {
    title: "Sign In | MyPeptideMatch",
    description: "Sign in to your MyPeptideMatch account.",
    noindex: true,
  },
  "/signup": {
    title: "Create an Account | MyPeptideMatch",
    description: "Create an account to use MyPeptideMatch.",
    noindex: true,
  },
  "/weightloss": {
    title: "Peptide Therapy for Weight Loss | MyPeptideMatch",
    description:
      "Explore MyPeptideMatch resources for peptide therapy options related to weight loss, including clinics and protocol guides.",
  },
  "/antiaging": {
    title: "Peptide Therapy for Anti-Aging | MyPeptideMatch",
    description:
      "Explore MyPeptideMatch resources about peptide therapy clinics and protocols related to anti-aging and longevity.",
  },
  "/tissuerepair": {
    title: "Peptide Therapy for Tissue Repair | MyPeptideMatch",
    description:
      "Explore peptide therapy resources for tissue repair and recovery, including related clinics and protocol guides.",
  },
  "/hormoneoptimization": {
    title: "Hormone Optimization Resources | MyPeptideMatch",
    description:
      "Find MyPeptideMatch resources about hormone optimization, peptide therapy clinics, and related protocols.",
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
    title: "Best Telehealth Clinics | MyPeptideMatch",
    description:
      "Browse MyPeptideMatch information about telehealth clinics offering peptide therapy.",
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
    title: "Browse Peptide Clinics by State | MyPeptideMatch",
    description:
      "Explore peptide therapy clinic listings by state with the MyPeptideMatch directory.",
  },
  "/clinics/by-treatment": {
    title: "Browse Peptide Clinics by Treatment | MyPeptideMatch",
    description:
      "Find peptide therapy clinics by treatment category in the MyPeptideMatch directory.",
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
    title: "Clinic Dashboard Login | MyPeptideMatch",
    description: "Sign in to the MyPeptideMatch clinic dashboard.",
    noindex: true,
  },
  "/clinics/telehealth-clinics": {
    title: "Telehealth Peptide Clinics | MyPeptideMatch",
    description:
      "Browse telehealth peptide therapy clinics in the MyPeptideMatch directory.",
  },
  "/protocols": {
    title: "Peptide Therapy Protocol Guides | MyPeptideMatch",
    description:
      "Browse MyPeptideMatch protocol guides covering weight loss, growth hormone, tissue repair, anti-aging, and more.",
  },
  "/protocols/weight-loss-glp1": {
    title: "Weight Loss & GLP-1 Protocols | MyPeptideMatch",
    description:
      "Explore the MyPeptideMatch protocol guide for weight loss and GLP-1 peptides.",
  },
  "/protocols/growth-hormone-ghrh": {
    title: "Growth Hormone & GHRH Protocols | MyPeptideMatch",
    description:
      "Read the MyPeptideMatch protocol guide about growth hormone and GHRH peptides.",
  },
  "/protocols/tissue-repair": {
    title: "Tissue Repair & Recovery Protocols | MyPeptideMatch",
    description:
      "Explore the MyPeptideMatch protocol guide for tissue repair and recovery.",
  },
  "/protocols/anti-aging": {
    title: "Anti-Aging Peptide Protocols | MyPeptideMatch",
    description:
      "Read the MyPeptideMatch protocol guide about anti-aging peptide therapy.",
  },
  "/protocols/cognitive-neuro-sleep": {
    title: "Cognitive, Neuro & Sleep Protocols | MyPeptideMatch",
    description:
      "Explore the MyPeptideMatch protocol guide covering cognitive, neurological, and sleep-related topics.",
  },
  "/protocols/blends-stacks": {
    title: "Peptide Blends & Stacks | MyPeptideMatch",
    description:
      "Review the MyPeptideMatch guide to peptide blends and stacks.",
  },
  "/peptides": {
    title: "Peptide Encyclopedia | MyPeptideMatch",
    description:
      "Explore peptide profiles and educational information in the MyPeptideMatch peptide encyclopedia.",
  },
  "/peptides/popular": {
    title: "Popular Peptides | MyPeptideMatch",
    description:
      "Browse popular peptide profiles and related information from MyPeptideMatch.",
  },
  "/peptides/by-category": {
    title: "Peptides by Category | MyPeptideMatch",
    description:
      "Explore peptide profiles grouped by category in the MyPeptideMatch encyclopedia.",
  },
  "/peptides/compare": {
    title: "Compare Peptides | MyPeptideMatch",
    description:
      "Compare peptide profiles side by side with the MyPeptideMatch peptide comparison tool.",
  },
  "/peptides/vendors": {
    title: "Peptide Vendors | MyPeptideMatch",
    description:
      "Browse vendor information associated with peptide profiles on MyPeptideMatch.",
  },
  "/peptides/best-telehealth": {
    title: "Telehealth Peptide Directory | MyPeptideMatch",
    description:
      "Explore telehealth peptide clinic information from MyPeptideMatch.",
  },
  "/how-to-reconstitute-peptides": {
    title: "How to Reconstitute Peptides | MyPeptideMatch",
    description:
      "Read the MyPeptideMatch guide to peptide reconstitution, with step-by-step information and answers to common questions.",
  },
  "/tools": {
    title: "Peptide Calculators & Tools | MyPeptideMatch",
    description:
      "Use MyPeptideMatch peptide calculators, unit converters, and other dosing tools.",
  },
  "/tools/bac-water-calculator": {
    title: "Bacteriostatic Water Calculator | MyPeptideMatch",
    description:
      "Use the MyPeptideMatch bacteriostatic water calculator to work out peptide reconstitution measurements.",
  },
  "/tools/peptide-calculator": {
    title: "Peptide Reconstitution Calculator | MyPeptideMatch",
    description:
      "Calculate peptide reconstitution measurements with the MyPeptideMatch peptide calculator.",
  },
  "/tools/titration-calculator": {
    title: "Peptide Titration Calculator | MyPeptideMatch",
    description:
      "Explore dose escalation schedules with the MyPeptideMatch peptide titration calculator.",
  },
  "/tools/units-converter": {
    title: "Peptide Units Converter | MyPeptideMatch",
    description:
      "Convert peptide and syringe measurements with the MyPeptideMatch units converter.",
  },
  "/tools/semaglutide-calculator": {
    title: "Semaglutide Reconstitution Calculator | MyPeptideMatch",
    description:
      "Calculate semaglutide reconstitution measurements with the MyPeptideMatch calculator.",
  },
  "/tools/tirzepatide-calculator": {
    title: "Tirzepatide Calculator | MyPeptideMatch",
    description:
      "Use the MyPeptideMatch tirzepatide calculator for peptide measurement calculations.",
  },
  "/tools/semaglutide-units": {
    title: "Semaglutide Units Chart | MyPeptideMatch",
    description:
      "View the MyPeptideMatch semaglutide units chart and measurement information.",
  },
  "/tools/tirzepatide-units": {
    title: "Tirzepatide Units Chart | MyPeptideMatch",
    description:
      "View the MyPeptideMatch tirzepatide units chart and measurement information.",
  },
  "/tools/bpc": {
    title: "BPC-157 Calculator & Guide | MyPeptideMatch",
    description:
      "Explore BPC-157 information and calculator tools on MyPeptideMatch.",
  },
  "/privacy": {
    title: "Privacy Policy | MyPeptideMatch",
    description:
      "Read the MyPeptideMatch privacy policy and learn how information is handled on the site.",
  },
  "/terms": {
    title: "Terms of Service | MyPeptideMatch",
    description:
      "Review the terms and conditions for accessing and using MyPeptideMatch.",
  },
  "/disclaimer": {
    title: "Disclaimer | MyPeptideMatch",
    description:
      "Read the MyPeptideMatch disclaimer about site content, peptide information, and use of the site.",
  },
  "/contact": {
    title: "Contact MyPeptideMatch",
    description:
      "Contact MyPeptideMatch with questions about the directory, a clinic listing, or the site.",
  },
  "/claim-your-listing": {
    title: "Claim a Clinic Listing | MyPeptideMatch",
    description:
      "Find out how to claim or update a clinic listing in the MyPeptideMatch directory.",
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
    title: "Affiliate Disclosure | MyPeptideMatch",
    description:
      "Read how MyPeptideMatch earns revenue through clinic listings, lead generation, and affiliate partnerships.",
  },
  "/about": {
    title: "About MyPeptideMatch",
    description:
      "Learn about the MyPeptideMatch directory, its approach to clinic listings, and its peptide therapy resources.",
  },
  "/peptide-therapy-report": {
    title: "2026 Peptide Therapy Industry Report | MyPeptideMatch",
    description:
      "Explore the MyPeptideMatch 2026 Peptide Therapy Industry Report and its published directory data.",
  },
};

function setMetaTag(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = document.head.querySelector(selector);
  const tag = existing || document.createElement("meta");

  tag.setAttribute(attribute, key);
  tag.setAttribute("content", content);

  if (!existing) {
    document.head.appendChild(tag);
  }
}

function setCanonical(url) {
  const existingTags = document.head.querySelectorAll('link[rel="canonical"]');
  const canonical = existingTags[0] || document.createElement("link");

  for (const duplicate of Array.from(existingTags).slice(1)) {
    duplicate.remove();
  }

  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", url);

  if (!existingTags.length) {
    document.head.appendChild(canonical);
  }
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const page = pageMetadata[normalizedPath];

    if (!page) {
      document.title = `Page Not Found | ${SITE_NAME}`;
      setMetaTag("name", "description", "The requested page could not be found.");
      setMetaTag("name", "robots", "noindex, nofollow");
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector("#page-seo-schema")?.remove();
      return;
    }

    const canonicalUrl = new URL(normalizedPath, SITE_URL).href;
    document.title = page.title;
    setMetaTag("name", "description", page.description);
    setMetaTag("name", "robots", page.noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(canonicalUrl);
    setMetaTag("property", "og:title", page.title);
    setMetaTag("property", "og:description", page.description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", "en_US");
    setMetaTag("property", "og:image", new URL(logoImage, SITE_URL).href);
    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:title", page.title);
    setMetaTag("name", "twitter:description", page.description);
    setMetaTag("name", "twitter:url", canonicalUrl);
    setMetaTag("name", "twitter:image", new URL(logoImage, SITE_URL).href);

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
  }, [pathname]);

  return null;
}
