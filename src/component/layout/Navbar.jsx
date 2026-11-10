import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mypeptidematch-logo.jpg"; 

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  
  // Ref for the whole menu to detect outside clicks (optional for mobile, but good for desktop)
  const dropdownRef = useRef(null);

  const navItems = [
    {
      label: "Clinics",
      dropdown: [
        { label: "Search Clinics",        path: "/"                              },
        { label: "Browse by State",        path: "/clinics/browse-by-state"      },
        { label: "Telehealth Clinics",     path: "/clinics/telehealth-clinics"   },
        { label: "Best Telehealth (2026)", path: "/clinics/best-telehealth"      },
        { label: "By Treatment",           path: "/clinics/by-treatment"         },
        { label: "Login to Dashboard",     path: "/clinics/login-to-dashboard"   },
        { label: "Claim Your Listing",     path: "/claim-your-listing"           },
      ],
    },
    {
      label: "Protocols",
      dropdown: [
        { label: "All Protocols",               path: "/protocols"                        },
        { label: "Weight Loss & GLP-1",          path: "/protocols/weight-loss-glp1"      },
        { label: "Growth Hormone & GHRH",        path: "/protocols/growth-hormone-ghrh"   },
        { label: "Tissue Repair & Recovery",     path: "/protocols/tissue-repair"         },
        { label: "Anti-Aging & Longevity",       path: "/protocols/anti-aging"            },
        { label: "Cognitive, Neuro & Sleep",     path: "/protocols/cognitive-neuro-sleep" },
        { label: "Peptide Blends & Stacks",      path: "/protocols/blends-stacks"         },
      ],
    },
    {
      label: "Peptides",
      dropdown: [
        { label: "Peptides Encyclopedia", path: "/peptides"                    },
        { label: "Popular Peptides",       path: "/peptides/popular"           },
        { label: "By Category",            path: "/peptides/by-category"       },
        { label: "Compare Peptides",       path: "/peptides/compare"           },
        { label: "Best Telehealth (2026)", path: "/clinics/best-telehealth"    },
        { label: "Vendors",                path: "/peptides/vendors"           },
      ],
    },
    {
      label: "Tools",
      dropdown: [
        { label: "Tools Home",               path: "/tools"                          },
        { label: "BAC Water Calculator",     path: "/tools/bac-water-calculator"    },
        { label: "Peptide Calculator",       path: "/tools/peptide-calculator"      },
        { label: "Titration Calculator",     path: "/tools/titration-calculator"    },
        { label: "Units Converter",          path: "/tools/units-converter"         },
        { label: "Semaglutide Calculator",   path: "/tools/semaglutide-calculator"  },
        { label: "Tirzepatide Calculator",   path: "/tools/tirzepatide-calculator"  },
        { label: "Semaglutide Units",        path: "/tools/semaglutide-units"       },
        { label: "Tirzepatide Units",        path: "/tools/tirzepatide-units"       },
      ],
    },
    { label: "Blog", dropdown: null, path: "/blog" },
  ];

  const closeMenus = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  const toggleMobileItem = (label) => {
    setExpandedMobileItem((current) => (current === label ? null : label));
  };

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-[#d9d9d9] bg-[#090909]">
        <div className="mx-auto flex min-h-[64px] w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-8">

          {/* Logo */}
          <Link to="/" onClick={closeMenus} className="flex shrink-0 items-center no-underline">
            <img src={logo} alt="MyPeptideMatch" className="h-[40px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden list-none items-center gap-7 m-0 p-0 lg:flex xl:gap-7.5">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap border-0 bg-transparent py-2 text-[15px] leading-6 font-semibold text-white transition-colors"
                  >
                    {item.label}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="whitespace-nowrap py-2 text-[16px] font-semibold text-white no-underline transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop Dropdown Panel */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[210px] overflow-hidden rounded-md py-2 bg-white shadow-lg">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        onClick={closeMenus}
                        className="block px-4 py-2.5 text-sm text-black no-underline transition-colors hover:bg-gray-50 hover:text-[#0d8189]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-3">
            <Link
              to="/login"
              className="whitespace-nowrap text-[14px] font-medium text-white no-underline transition-colors hover:text-[#0e8990]"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-[#0d8189] px-5 text-[14px] font-bold text-white no-underline transition-colors hover:bg-[#096d74]"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-md border border-[#303838] bg-transparent text-white hover:bg-white/10"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== Mobile Drawer ===== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMenus}
      />

      {/* Drawer Panel */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-[70] flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#e5e7eb] p-4">
          <span className="font-bold text-lg text-[#0f2027]">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenus}
            className="rounded-lg p-2 hover:bg-[#F7F8F9] focus:outline-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex flex-col gap-0.5 overflow-y-auto p-3">
          {navItems.map((item) => {
            const isExpanded = expandedMobileItem === item.label;
            
            if (item.dropdown) {
              return (
                <div key={item.label}>
                  <div className="flex items-center rounded-lg overflow-hidden">
                    <Link
                      to={item.path || "#"}
                      className="flex-1 px-4 py-3 font-medium text-[#333333] hover:bg-[#F7F8F9]"
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label}`}
                      onClick={() => toggleMobileItem(item.label)}
                      className="px-3 py-3 text-[#6b7280] hover:bg-[#F7F8F9] focus:outline-none"
                    >
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#e5e7eb] pl-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block rounded px-3 py-2 text-sm text-[#4a4a4a] hover:bg-[#F7F8F9]"
                          onClick={closeMenus}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path}
                className="block rounded-lg px-4 py-3 font-medium text-[#333333] hover:bg-[#F7F8F9]"
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="my-1 border-t border-[#e5e7eb]" />
          <Link
            to="/about"
            className="block rounded-lg px-4 py-2.5 text-sm text-[#6b7280] hover:bg-[#F7F8F9] hover:text-[#333333]"
            onClick={closeMenus}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block rounded-lg px-4 py-2.5 text-sm text-[#6b7280] hover:bg-[#F7F8F9] hover:text-[#333333]"
            onClick={closeMenus}
          >
            Contact
          </Link>
        </nav>

        {/* Drawer Footer (Login / Signup) */}
        <div className="mt-auto border-t border-[#e5e7eb] p-4 space-y-2">
          <Link
            to="/login"
            className="block rounded-full border border-[#d5dedb] px-4 py-3 text-center font-bold text-[#333333] hover:bg-[#F7F8F9]"
            onClick={closeMenus}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="block rounded-full px-4 py-3 text-center font-bold bg-[#0d8189] text-white hover:bg-[#096d74]"
            onClick={closeMenus}
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}