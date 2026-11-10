import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const headingFont = { fontFamily: "var(--font-heading)" };

  const [form, setForm] = useState({
    website: "", // honeypot
    name: "",
    email: "",
    reason: "general",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    // 🛑 Honeypot check (bots fill hidden fields)
    if (form.website) {
      setStatus({ type: "success", message: "Thank you! We'll be in touch." });
      return;
    }

    try {
      // TODO: replace with your real API endpoint
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Request failed");

      await new Promise((r) => setTimeout(r, 800)); // demo delay

      setStatus({
        type: "success",
        message: "Thanks — your message has been sent. We'll reply by email.",
      });
      setForm({ website: "", name: "", email: "", reason: "general", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const isSubmitting = status.type === "loading";

  return (
    <main
      id="main-content"
      className="flex-1 w-full bg-[#F6F8F7]"
      data-content-ads-inserted="true"
    >
      <div className="mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Page Title */}
        <h1
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--ink)]"
          style={headingFont}
        >
          Contact us
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
          Have a question about our directory, your clinic's listing, or the
          site in general? Send us a message below and we'll reply by email.
          Clinic owners looking to claim or update a listing can also head to
          our{" "}
          <Link
            to="/claim-your-listing"
            className="text-[var(--accent-ink)] underline hover:no-underline break-words"
          >
            Claim Your Listing
          </Link>{" "}
          page.
        </p>

        {/* Form */}
        <div className="mt-6 sm:mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot (hidden from users) */}
            <input
              className="absolute -left-[9999px]"
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
            />

            {/* Name */}
            <div className="w-full">
              <label
                htmlFor="your-name"
                className="mb-1.5 block text-sm font-medium text-[var(--ink)]"
              >
                Your name
              </label>
              <input
                id="your-name"
                name="name"
                type="text"
                required
                maxLength={200}
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-[5px] border border-[var(--border-strong)] bg-white px-4 py-3 text-base text-[var(--ink)] min-h-[48px] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] disabled:bg-[var(--canvas)] disabled:cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[var(--ink)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                required
                maxLength={320}
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-[5px] border border-[var(--border-strong)] bg-white px-4 py-3 text-base text-[var(--ink)] min-h-[48px] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] disabled:bg-[var(--canvas)] disabled:cursor-not-allowed"
              />
            </div>

            {/* Reason for contacting */}
            <div className="w-full">
              <label
                htmlFor="reason-for-contacting"
                className="mb-1.5 block text-sm font-medium text-[var(--ink)]"
              >
                Reason for contacting
              </label>
              <select
                id="reason-for-contacting"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="w-full rounded-[5px] border border-[var(--border-strong)] bg-white px-4 py-2.5 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] disabled:bg-[var(--canvas)] disabled:cursor-not-allowed"
              >
                <option value="general">General inquiry</option>
                <option value="listing">Clinic listing (owner/provider)</option>
                <option value="press">Press / media</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="w-full">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-[var(--ink)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                placeholder="How can we help?"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-[5px] border border-[var(--border-strong)] bg-white px-4 py-2.5 text-[var(--ink)] min-h-[100px] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] disabled:bg-[var(--canvas)] disabled:cursor-not-allowed"
              />
            </div>

            {/* Status message */}
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
              className="inline-flex bg-[#0B7C84] text-white hover:bg-[#0A6B72] items-center justify-center font-bold  px-7 py-3 text-base rounded-full min-h-[48px] w-full"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;