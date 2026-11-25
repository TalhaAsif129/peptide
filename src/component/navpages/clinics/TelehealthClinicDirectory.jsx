import { Helmet } from "react-helmet-async";

const CLINICS = [
  {
    id: "slim-weight-loss-clinic-eugene-or",
    name: "Slim Weight Loss Clinic",
    location: "Eugene, OR",
    description:
      "Slim Weight Loss Clinic offers personalized weight loss plans and medications including GLP-1 therapies.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/slim-weight-loss-clinic-eugene-or.png",
    badges: ["Telehealth", "telehealth", "Ships Meds", "Lab Work", "New Patients"],
    offers: ["obesity", "overweight", "type 2 diabetes"],
  },
  {
    id: "low-t-center-chicago-il",
    name: "Low T Center",
    location: "Chicago, IL",
    description:
      "Low T Center offers customized healthcare plans for men with low testosterone, including peptide therapy and telehealth options.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/low-t-center-chicago-il.jpg",
    badges: ["Telehealth", "hybrid"],
    offers: [],
  },
  {
    id: "body-focus-clinic-chicago-il",
    name: "Body Focus Clinic",
    location: "Chicago, IL",
    description:
      "Body Focus Clinic offers integrative services including weight management and peptide therapies for various health needs.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/body-focus-clinic-chicago-il.jpg",
    badges: ["Telehealth", "telehealth"],
    offers: ["chronic pain", "depression", "obesity"],
  },
  {
    id: "vital-health-clt-charlotte-nc",
    name: "VITAL Health CLT",
    location: "Charlotte, NC",
    description:
      "VITAL Health CLT is Charlotte’s premier weight loss and peptide therapy center, offering customized plans for weight loss and anti-aging therapies.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/vital-health-clt-charlotte-nc.jpg",
    badges: ["Telehealth", "telehealth", "Ships Meds", "Lab Work", "New Patients"],
    offers: ["weight loss", "low testosterone", "anti-aging"],
  },
  {
    id: "global-life-rejuvenation-hormone-replacement-clinic-miami-beach-fl",
    name: "Global Life Rejuvenation - Hormone Replacement Clinic",
    location: "Miami Beach, FL",
    description:
      "Global Life Rejuvenation specializes in hormone replacement therapy and peptide therapy to enhance health and vitality.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/global-life-rejuvenation-hormone-replacement-clinic-miami-beach-fl.jpg",
    badges: ["Telehealth", "telehealth"],
    offers: ["low testosterone", "erectile dysfunction", "menopause symptoms"],
  },
  {
    id: "the-virtual-np-weight-loss-and-urgent-care-new-york-ny",
    name: "The Virtual NP Weight Loss and Urgent Care",
    location: "New York, NY",
    description:
      "The Virtual NP is a men’s health, weight loss, and urgent care clinic offering virtual care across several states.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/the-virtual-np-weight-loss-and-urgent-care-new-york-ny.jpg",
    badges: ["Telehealth", "telehealth", "Ships Meds", "New Patients"],
    offers: ["weight loss", "erectile dysfunction", "male pattern hair loss"],
  },
  {
    id: "renown-weight-loss-mcallen-mcallen-tx",
    name: "Renown Weight Loss McAllen",
    location: "Mcallen, TX",
    description:
      "Regal Weight Loss McAllen offers medically-supervised weight loss programs, including GLP-1 injections, with options for online and in-person consultations.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/renown-weight-loss-mcallen-mcallen-tx.jpg",
    badges: ["Telehealth", "Free Consult", "hybrid", "New Patients"],
    offers: ["obesity", "overweight"],
  },
  {
    id: "global-life-rejuvenation-chicago-il",
    name: "Global Life Rejuvenation",
    location: "Chicago, IL",
    description:
      "Global Life Rejuvenation offers peptide therapy and hormone replacement therapy to help patients achieve a more youthful and balanced life.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/global-life-rejuvenation-chicago-il.jpg",
    badges: ["Telehealth", "telehealth"],
    offers: ["erectile dysfunction", "menopause symptoms", "hormonal imbalances"],
  },
  {
    id: "slim-weight-loss-clinic-jacksonville-fl",
    name: "Slim Weight Loss Clinic",
    location: "Jacksonville, FL",
    description:
      "Slim Weight Loss Clinic offers personalized weight loss plans and medications including GLP-1 therapies.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/slim-weight-loss-clinic-jacksonville-fl.png",
    badges: ["Telehealth", "telehealth", "Ships Meds", "Lab Work", "New Patients"],
    offers: ["obesity", "overweight", "chronic weight management"],
  },
  {
    id: "verve-health-weight-loss-clinic-portland-or",
    name: "Verve Health Weight Loss Clinic",
    location: "Portland, OR",
    description:
      "Verve Health specializes in weight loss and hormone optimization, offering services like semaglutide for optimal results.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/verve-health-weight-loss-clinic-portland-or.jpg",
    badges: ["Telehealth", "telehealth", "Ships Meds", "New Patients"],
    offers: ["obesity", "insulin resistance", "appetite regulation"],
  },
  {
    id: "magnus-medical-health-and-wellness-las-vegas-nv",
    name: "Magnus Medical Health and Wellness",
    location: "Las Vegas, NV",
    description:
      "Young 4 Life Wellness offers personalized wellness solutions including hormone optimization, weight management, and peptide therapy.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/magnus-medical-health-and-wellness-las-vegas-nv.jpg",
    badges: ["Telehealth", "telehealth"],
    offers: [],
  },
  {
    id: "peptide-therapy-orlando-concierge-medicine-orlando-fl",
    name: "Peptide Therapy - Orlando Concierge Medicine",
    location: "Orlando, FL",
    description:
      "Orlando Concierge Medicine offers personalized healthcare with a focus on peptide therapy and anti-aging solutions.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/peptide-therapy-orlando-concierge-medicine-orlando-fl.jpg",
    badges: ["Telehealth", "hybrid"],
    offers: [],
  },
  {
    id: "hormone-replacement-therapy-healthoptimal-west-palm-beach-fl",
    name: "Hormone Replacement Therapy - HealthOptimal",
    location: "West Palm Beach, FL",
    description:
      "HealthOptimal offers hormone replacement and peptide therapy for men and women, focusing on anti-aging and wellness.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/hormone-replacement-therapy-healthoptimal-west-palm-beach-fl.jpg",
    badges: ["Telehealth", "Free Consult", "telehealth", "Ships Meds", "New Patients"],
    offers: ["erectile dysfunction", "weight gain", "low energy"],
  },
  {
    id: "prime-health-hrt-solutions-trt-weight-loss-clinic-fort-lauderdale-fort-lauderdale-fl",
    name: "Prime Health HRT Solutions - TRT & Weight Loss Clinic Fort Lauderdale",
    location: "Fort Lauderdale, FL",
    description:
      "Prime Health HRT Solutions offers personalized hormone replacement therapy and weight loss solutions, including peptide treatments.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/prime-health-hrt-solutions-trt-weight-loss-clinic-fort-lauderdale-fort-lauderdale-fl.jpg",
    badges: ["Telehealth"],
    offers: ["fatigue", "decreased libido", "muscle loss"],
  },
  {
    id: "gem-medical-weight-care-riverside-ca",
    name: "GEM Medical Weight Care",
    location: "Riverside, CA",
    description:
      "GEM Medical Weight Care offers personalized weight loss programs led by Dr. Cydney Osano, focusing on holistic care and telehealth accessibility.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/gem-medical-weight-care-riverside-ca.jpg",
    badges: ["Telehealth", "HSA/FSA", "Free Consult", "telehealth", "New Patients"],
    offers: ["obesity", "overweight", "diabetes"],
  },
  {
    id: "vital-men-s-health-san-francisco-ca",
    name: "Vital Men's Health",
    location: "San Francisco, CA",
    description:
      "Vital Men's Health offers testosterone replacement therapy and peptide treatments through telehealth across California.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/vital-men-s-health-san-francisco-ca.jpg",
    badges: ["Telehealth", "telehealth", "Ships Meds", "New Patients"],
    offers: ["low libido", "erectile dysfunction", "infertility"],
  },
  {
    id: "peakform-wellness-clinic-sioux-falls-sd",
    name: "Peakform Wellness Clinic",
    location: "Sioux Falls, SD",
    description:
      "Peakform Wellness Clinic offers personalized concierge medicine focusing on preventive care, weight management, and hormone replacement, including peptide therapy.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/peakform-wellness-clinic-sioux-falls-sd.png",
    badges: ["Telehealth", "hybrid"],
    offers: [],
  },
  {
    id: "doc-valdez-weight-loss-clinic-chicago-il",
    name: "Doc Valdez Weight Loss Clinic",
    location: "Chicago, IL",
    description:
      "Doctor-led weight management clinic offering virtual appointments across Illinois, focusing on evidence-based obesity care.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/doc-valdez-weight-loss-clinic-chicago-il.jpg",
    badges: ["Telehealth", "Free Consult", "telehealth", "New Patients"],
    offers: ["obesity", "weight management", "high blood pressure"],
  },
  {
    id: "innova-health-wellness-bakersfield-bakersfield-ca",
    name: "Innova Health & Wellness - Bakersfield",
    location: "Bakersfield, CA",
    description:
      "Innova Health & Wellness offers a range of medical and wellness services, including weight loss programs and telemedicine consultations.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/innova-health-wellness-bakersfield-bakersfield-ca.jpg",
    badges: ["Telehealth", "in-person|telehealth"],
    offers: ["erectile dysfunction", "low testosterone", "obesity"],
  },
  {
    id: "pittsburgh-peptide-pittsburgh-pa",
    name: "Pittsburgh Peptide",
    location: "Pittsburgh, PA",
    description:
      "Pittsburgh Peptide offers personalized hormone replacement therapy, including peptide therapy, to help clients achieve hormonal balance and well-being.",
    image: null,
    initials: "PP",
    bgColor: "#ea580c",
    badges: ["Telehealth", "Free Consult", "telehealth"],
    offers: ["low testosterone", "hormonal imbalance"],
  },
  {
    id: "hrt-doctor-tallahassee-tallahassee-fl",
    name: "HRT Doctor Tallahassee",
    location: "Tallahassee, FL",
    description:
      "HRT Doctor Tallahassee provides professional and confidential Testosterone Replacement Therapy (TRT) services to men experiencing Low-T symptoms.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/hrt-doctor-tallahassee-tallahassee-fl.jpg",
    badges: ["Telehealth", "Free Consult", "telehealth"],
    offers: ["low testosterone", "erectile dysfunction", "fatigue"],
  },
  {
    id: "azani-medical-spa-pittsburgh-pa",
    name: "Azani Medical Spa",
    location: "Pittsburgh, PA",
    description:
      "Azani Medical Spa offers a range of services including hormone replacement therapy and weight loss solutions, led by Dr. Monica Gavin.",
    image:
      "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/azani-medical-spa-pittsburgh-pa.jpg",
    badges: ["Telehealth", "virtual"],
    offers: [],
  },
];

export default function TelehealthClinics() {
  return (
    <>
      <Helmet>
        <title>Telehealth Peptide Clinics | MyPeptideMatch</title>
        <meta
          name="description"
          content={`Browse ${CLINICS.length} clinics offering peptide therapy through telehealth. Compare provider locations, services, and consultation options.`}
        />
        <link
          rel="canonical"
          href="https://www.mypeptidematch.com/clinics/telehealth-clinics"
        />
      </Helmet>

      <section className="min-h-screen bg-[#f7f8f9] py-12">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading text-3xl font-bold text-[#333333]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Telehealth Peptide Clinics
          </h1>
          <p className="mt-4 max-w-2xl text-[#6b7280]">
            Compare clinics offering peptide therapy and other services through
            telehealth. Contact providers directly to ask about online visits
            and eligibility.
            <span className="ml-1 font-medium text-[#333333]">
              {CLINICS.length} clinics found.
            </span>
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CLINICS.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ClinicCard({ clinic }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[5px] border border-transparent bg-white shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
      <div className="relative h-56 w-full shrink-0 bg-gray-100">
        {clinic.image ? (
          <img
            alt={`${clinic.name} clinic`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={clinic.image}
          />
        ) : (
          <div
            className="flex h-full min-h-36 w-full items-center justify-center text-3xl font-bold text-white"
            style={{ backgroundColor: clinic.bgColor || "#3b82f6" }}
            aria-hidden="true"
          >
            {clinic.initials || clinic.name.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-5">
        <h2 className="text-base font-bold leading-snug text-[#333333] sm:text-xl">
          {clinic.name}
        </h2>
        <p className="mt-1 text-sm text-[#6b7280]">{clinic.location}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-[#6b7280]">
          {clinic.description}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1.5 text-xs">
          {clinic.badges.map((badge, index) => (
            <span
              key={`${badge}-${index}`}
              className={
                index === 0 || badge === "Free Consult" || badge === "HSA/FSA"
                  ? "rounded-[4px] bg-[#FFF0BB] px-2.5 py-1 font-medium text-[#333333]"
                  : "rounded-[4px] bg-[#F7F8F9] px-2.5 py-1 text-[#6b7280]"
              }
            >
              {badge}
            </span>
          ))}
        </div>

        {clinic.offers.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-[#6b7280]">Offers:</span>
            {clinic.offers.map((offer) => (
              <span
                key={offer}
                className="rounded-[4px] bg-[#DCE9FD] px-2.5 py-0.5 text-xs font-medium text-[#1565C0]"
              >
                {offer}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
