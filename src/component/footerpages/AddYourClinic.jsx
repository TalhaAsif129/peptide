import React, { useState } from "react";

const HEADING_FONT = { fontFamily: "var(--font-heading)" };

// Shared input classes (Tailwind only — no CSS variables)
const INPUT_CLASS =
  "w-full rounded-[5px] border border-gray-300 bg-white px-4 py-3 text-base text-[#333333] min-h-[48px] placeholder:text-gray-400 focus:border-[#0B7C84] focus:outline-none focus:ring-2 focus:ring-[#0B7C84]/25 disabled:bg-[#F7F8F9] disabled:cursor-not-allowed disabled:text-[#6b7280]";

const SELECT_CLASS =
  "w-full rounded-[5px] border border-gray-300 bg-white px-4 py-2.5 text-base text-[#333333] focus:border-[#0B7C84] focus:outline-none focus:ring-2 focus:ring-[#0B7C84]/25 disabled:bg-[#F7F8F9] disabled:cursor-not-allowed";

const TEXTAREA_CLASS =
  "w-full rounded-[5px] border border-gray-300 bg-white px-4 py-2.5 text-base text-[#333333] min-h-[100px] placeholder:text-gray-400 focus:border-[#0B7C84] focus:outline-none focus:ring-2 focus:ring-[#0B7C84]/25 disabled:bg-[#F7F8F9] disabled:cursor-not-allowed";

const LABEL_CLASS = "mb-1.5 block text-sm font-medium text-[#333333]";

const US_STATES = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["DC", "District of Columbia"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"],
];

const AddYourClinic = () => {
  const [form, setForm] = useState({
    // Clinic
    clinicName: "",
    websiteUrl: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    clinicPhone: "",
    clinicEmail: "",
    description: "",
    consultationType: "",
    // Your info (prefilled from authenticated user in the original)
    fullName: "umer khalil",
    email: "elegantumer@gmail.com",
    phone: "",
    role: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      // TODO: replace with your real API endpoint
      // await fetch("/api/clinics/submit", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 800));

      setStatus({
        type: "success",
        message:
          "Thanks! Your clinic has been submitted for review. We'll add it within 2 business days.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const isSubmitting = status.type === "loading";

  return (
    <main id="main-content" className="flex-1 w-full">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[720px] py-8 sm:py-12">
        <div className="mx-auto max-w-lg">
          {/* Heading */}
          <h1
            className="text-xl sm:text-2xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Add Your Clinic
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#6b7280]">
            Not in our directory yet? Submit your clinic for review and we'll
            add it within 2 business days.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-6">
            {/* ===== CLINIC INFO ===== */}
            <fieldset className="space-y-4">
              <legend
                className="text-base sm:text-lg font-semibold text-[#333333]"
                style={HEADING_FONT}
              >
                Clinic Information
              </legend>

              {/* Clinic Name */}
              <div className="w-full">
                <label htmlFor="clinic-name" className={LABEL_CLASS}>
                  Clinic Name
                </label>
                <input
                  id="clinic-name"
                  name="clinicName"
                  type="text"
                  required
                  value={form.clinicName}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Website */}
              <div className="w-full">
                <label htmlFor="website-url" className={LABEL_CLASS}>
                  Website URL
                </label>
                <input
                  id="website-url"
                  name="websiteUrl"
                  type="url"
                  required
                  placeholder="https://yourclinic.com"
                  value={form.websiteUrl}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Street */}
              <div className="w-full">
                <label htmlFor="street-address" className={LABEL_CLASS}>
                  Street Address
                </label>
                <input
                  id="street-address"
                  name="streetAddress"
                  type="text"
                  required
                  value={form.streetAddress}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* City + State — stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <label htmlFor="city" className={LABEL_CLASS}>
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="state" className={LABEL_CLASS}>
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    required
                    value={form.state}
                    onChange={handleChange}
                    className={SELECT_CLASS}
                  >
                    <option value="">Select state</option>
                    {US_STATES.map(([code, name]) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Zip */}
              <div className="w-full">
                <label htmlFor="zip-code" className={LABEL_CLASS}>
                  Zip Code
                </label>
                <input
                  id="zip-code"
                  name="zipCode"
                  type="text"
                  required
                  value={form.zipCode}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Phone */}
              <div className="w-full">
                <label htmlFor="clinic-phone" className={LABEL_CLASS}>
                  Clinic Phone
                </label>
                <input
                  id="clinic-phone"
                  name="clinicPhone"
                  type="tel"
                  required
                  value={form.clinicPhone}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Clinic Email (optional) */}
              <div className="w-full">
                <label htmlFor="clinic-email" className={LABEL_CLASS}>
                  Clinic Email (optional)
                </label>
                <input
                  id="clinic-email"
                  name="clinicEmail"
                  type="email"
                  value={form.clinicEmail}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Description */}
              <div className="w-full">
                <label htmlFor="description" className={LABEL_CLASS}>
                  Description (optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Brief description of your clinic..."
                  value={form.description}
                  onChange={handleChange}
                  className={TEXTAREA_CLASS}
                />
              </div>

              {/* Consultation Type */}
              <div className="w-full">
                <label htmlFor="consultation-type" className={LABEL_CLASS}>
                  Consultation Type
                </label>
                <select
                  id="consultation-type"
                  name="consultationType"
                  value={form.consultationType}
                  onChange={handleChange}
                  className={SELECT_CLASS}
                >
                  <option value="">Select type</option>
                  <option value="in-person">In-person</option>
                  <option value="telehealth">Telehealth</option>
                  <option value="hybrid">Hybrid (both)</option>
                </select>
              </div>
            </fieldset>

            {/* ===== YOUR INFO ===== */}
            <fieldset className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <legend
                className="text-base sm:text-lg font-semibold text-[#333333]"
                style={HEADING_FONT}
              >
                Your Information
              </legend>

              {/* Full Name */}
              <div className="w-full">
                <label htmlFor="full-name" className={LABEL_CLASS}>
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Email (disabled — from logged-in user) */}
              <div className="w-full">
                <label htmlFor="email" className={LABEL_CLASS}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  disabled
                  value={form.email}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Phone (optional) */}
              <div className="w-full">
                <label htmlFor="phone" className={LABEL_CLASS}>
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Role */}
              <div className="w-full">
                <label htmlFor="your-role" className={LABEL_CLASS}>
                  Your Role
                </label>
                <select
                  id="your-role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className={SELECT_CLASS}
                >
                  <option value="">Select your role</option>
                  <option value="owner">Owner</option>
                  <option value="provider">Provider / Practitioner</option>
                  <option value="office_manager">Office Manager</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
            </fieldset>

            {/* Status */}
            {status.type === "success" && (
              <div className="rounded-[5px] border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                {status.message}
              </div>
            )}
            {status.type === "error" && (
              <div className="rounded-[5px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {status.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0B7C84] px-7 py-3 text-base font-bold text-white min-h-[48px] transition-all duration-150 hover:scale-[1.02] hover:bg-[#0a6b72] hover:shadow-[0_4px_14px_rgba(11,124,132,0.28)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0B7C84] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? "Submitting…" : "Submit Clinic for Review"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddYourClinic;