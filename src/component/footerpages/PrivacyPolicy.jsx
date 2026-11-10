import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const headingFont = { fontFamily: "var(--font-heading)" };

  return (
    <main
      id="main-content"
      className="flex-1 w-full bg-white"
      data-content-ads-inserted="true"
    >
      <div className="mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Page Title */}
        <h1
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333]"
          style={headingFont}
        >
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#6b7280]">
          Last updated: October 2026
        </p>

        <section className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
          {/* Introduction */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Introduction
            </h2>
            <p className="mt-2">
              MyPeptideMatch.com ("we," "our," or "us") respects your privacy.
              This policy describes what information we collect when you use our
              website, how we use it, and your choices regarding your data.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Information We Collect
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
              <li>
                <strong>Consultation request forms:</strong> When you submit a
                "Request a Consultation" form, we collect your name, email,
                phone (optional), treatment interest, message, and zip code.
                This information is stored and shared with the clinic you
                selected so they can respond to your inquiry.
              </li>
              <li>
                <strong>Accounts and the dosing tracker:</strong> When you create
                an account, we collect your email address, name (optional), and
                timezone. If you use the tracker, we store the protocols, doses,
                and vials you enter so we can show your schedule and send the
                reminders you request.
              </li>
              <li>
                <strong>Analytics:</strong> We may use analytics services (e.g.,
                Plausible, Google Analytics) to collect anonymized or
                pseudonymized data about how you use our site (pages visited,
                device type, general location). This helps us improve the site
                and does not personally identify you.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> We may use
                cookies, local storage, or similar technologies for essential
                site function, preferences, and analytics. See the Cookie
                section below.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use the information we collect to: (1) fulfill your consultation
              requests by sharing your details with the chosen clinic; (2)
              operate, secure, and improve our website and tracker; (3) comply
              with legal obligations; (4) communicate with you about your
              requests and your account; and (5) if you have an account, send
              you marketing emails as described below.
            </p>
          </div>

          {/* Marketing Emails and Partner Offers */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Marketing Emails and Partner Offers
            </h2>
            <p className="mt-2">
              By creating an account, you agree that we may email you peptide
              guides, product news, discounts, and promotions, including offers
              from vendors and telehealth providers we partner with. Some links
              in these emails are affiliate links, which means we may earn a
              commission if you make a purchase, at no extra cost to you. We send
              these emails ourselves; we do not sell or give your email address
              or tracker data to partners. Every marketing email includes an
              unsubscribe link, and you can turn these emails off at any time in
              your tracker settings. Unsubscribing from marketing emails does not
              stop account or reminder emails you have requested.
            </p>
          </div>

          {/* How We Share Your Information */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              How We Share Your Information
            </h2>
            <p className="mt-2">
              We share consultation request data (name, email, phone, message,
              treatment interest, zip code) with the specific clinic you
              submitted the form to. We do not sell your personal information. We
              may share data with service providers (e.g., hosting, analytics,
              email delivery) who process it on our behalf under agreements that
              limit use to providing services to us. We may disclose information
              if required by law or to protect our rights or safety.
            </p>
          </div>

          {/* Third-Party Services */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Third-Party Services
            </h2>
            <p className="mt-2">
              Our site uses Supabase for database and backend services (e.g.,
              storing clinic data and lead submissions). We may use analytics
              providers (such as Plausible or Google Analytics) that collect
              usage data. These providers have their own privacy policies. We
              encourage you to review them.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Cookies
            </h2>
            <p className="mt-2">
              We may use essential cookies for site operation (e.g., session or
              security). We may use analytics cookies to understand how visitors
              use our site. You can control cookies through your browser
              settings. Disabling certain cookies may affect site functionality.
            </p>
          </div>

          {/* Mediavine Programmatic Advertising */}
          <div>
            <h3
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Mediavine Programmatic Advertising (Ver 1.1)
            </h3>
            <p className="mt-2">
              The Website works with Mediavine to manage third-party
              interest-based advertising appearing on the Website. Mediavine
              serves content and advertisements when you visit the Website, which
              may use first and third-party cookies. A cookie is a small text
              file which is sent to your computer or mobile device (referred to
              in this policy as a “device”) by the web server so that a website
              can remember some information about your browsing activity on the
              Website.
            </p>
            <p className="mt-2">
              First party cookies are created by the website that you are
              visiting. A third-party cookie is frequently used in behavioral
              advertising and analytics and is created by a domain other than the
              website you are visiting. Third-party cookies, tags, pixels,
              beacons and other similar technologies (collectively, “Tags”) may
              be placed on the Website to monitor interaction with advertising
              content and to target and optimize advertising. Each internet
              browser has functionality so that you can block both first and
              third-party cookies and clear your browser’s cache. The "help"
              feature of the menu bar on most browsers will tell you how to stop
              accepting new cookies, how to receive notification of new cookies,
              how to disable existing cookies and how to clear your browser’s
              cache. For more information about cookies and how to disable them,
              you can consult the information at{" "}
              <a
                href="https://www.allaboutcookies.org/manage-cookies/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                All About Cookies
              </a>
              .
            </p>
            <p className="mt-2">
              Without cookies you may not be able to take full advantage of the
              Website content and features. Please note that rejecting cookies
              does not mean that you will no longer see ads when you visit our
              Site. In the event you opt-out, you will still see non-personalized
              advertisements on the Website.
            </p>
            <p className="mt-2">
              The Website collects the following data using a cookie when serving
              personalized ads:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 sm:pl-6">
              <li>IP Address</li>
              <li>Operating System type</li>
              <li>Operating System version</li>
              <li>Device Type</li>
              <li>Language of the website</li>
              <li>Web browser type</li>
              <li>Email (in hashed form)</li>
            </ul>
            <p className="mt-2">
              Mediavine Partners (companies listed below with whom Mediavine
              shares data) may also use this data to link to other end user
              information the partner has independently collected to deliver
              targeted advertisements. Mediavine Partners may also separately
              collect data about end users from other sources, such as advertising
              IDs or pixels, and link that data to data collected from Mediavine
              publishers in order to provide interest-based advertising across
              your online experience, including devices, browsers and apps. This
              data includes usage data, cookie information, device information,
              information about interactions between users and advertisements and
              websites, geolocation data, traffic data, and information about a
              visitor’s referral source to a particular website. Mediavine
              Partners may also create unique IDs to create audience segments,
              which are used to provide targeted advertising.
            </p>
            <p className="mt-2">
              If you would like more information about this practice and to know
              your choices to opt-in or opt-out of this data collection, please
              visit{" "}
              <a
                href="https://thenai.org/opt-out/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                National Advertising Initiative opt out page
              </a>
              . You may also visit{" "}
              <a
                href="http://optout.aboutads.info/#/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Digital Advertising Alliance website
              </a>{" "}
              and{" "}
              <a
                href="http://optout.networkadvertising.org/#"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Network Advertising Initiative website
              </a>{" "}
              to learn more information about interest-based advertising. You may
              download the AppChoices app at{" "}
              <a
                href="https://youradchoices.com/appchoices"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Digital Advertising Alliance’s AppChoices app
              </a>{" "}
              to opt out in connection with mobile apps, or use the platform
              controls on your mobile device to opt out.
            </p>
            <p className="mt-2">
              For specific information about Mediavine Partners, the data each
              collects and their data collection and privacy policies, please
              visit{" "}
              <a
                href="https://www.mediavine.com/ad-partners/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Mediavine Partners
              </a>
              .
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Data Retention
            </h2>
            <p className="mt-2">
              We retain consultation request data as long as needed to fulfill
              the request and for a reasonable period for legal and operational
              purposes. Analytics data is typically retained according to our
              analytics provider's policy. You may request deletion of your
              personal data (see Contact below).
            </p>
          </div>

          {/* Your Rights and Choices */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Your Rights and Choices
            </h2>
            <p className="mt-2">
              Depending on your location, you may have the right to access,
              correct, delete, or port your personal data, or to object to or
              restrict certain processing. To exercise these rights or ask
              questions about your data, contact us (see below).
            </p>
          </div>

          {/* Contact for Data Requests */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Contact for Data Requests
            </h2>
            <p className="mt-2">
              For privacy-related questions, data access or deletion requests, or
              to report a concern, please contact us via our{" "}
              <Link
                to="/contact"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Contact
              </Link>{" "}
              page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;