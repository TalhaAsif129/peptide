import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function LogintoDashboard() {
  return (
    <>
      <Helmet>
        <title>Find Trusted Peptide Providers & Clinics | MyPeptideMatch.com</title>
        <meta
          name="description"
          content="Find and compare trusted peptide providers, clinics, and research vendors across the United States. Search by location, treatment type, and peptide."
        />
      </Helmet>
      <main id="main-content" className="flex-1">
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-[720px] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-[5px] bg-white p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] transition-all duration-200">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0BB]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#333333]" aria-hidden="true">
                <path d="m10 17 5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-[#6b7280]">Sign in to manage your clinic listing</p>
          </div>

          <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
            <div className="w-full">
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                Email
              </label>
              <input
                id="email"
                className="min-h-[48px] w-full rounded-[5px] border border-[var(--border-strong)] bg-white px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] disabled:cursor-not-allowed disabled:bg-[var(--canvas)]"
                placeholder="you@example.com"
                required
                autoComplete="email"
                type="email"
              />
            </div>

            <div>
              <div className="w-full">
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                  Password
                </label>
                <input
                  id="password"
                  className="min-h-[48px] w-full rounded-[5px] border border-[var(--border-strong)] bg-white px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] disabled:cursor-not-allowed disabled:bg-[var(--canvas)]"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  type="password"
                />
              </div>
              <div className="mt-1 text-right">
                <Link className="text-xs text-[#1F6CD6] hover:underline" to="/auth/forgot-password">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-base font-bold text-[var(--on-accent)] transition-all duration-150 hover:scale-[1.02] hover:bg-[var(--accent-hover)] hover:shadow-[0_4px_14px_rgba(11,124,132,0.28)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e5e7eb]" />
            <span className="text-xs uppercase tracking-wide text-[#6b7280]">or</span>
            <div className="h-px flex-1 bg-[#e5e7eb]" />
          </div>

          <button
            type="button"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-3 text-base font-bold text-[var(--ink)] transition-all duration-150 hover:scale-[1.02] hover:border-[var(--accent)] hover:bg-[var(--canvas)] active:bg-[var(--accent-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-[#6b7280]">
            Don&apos;t have an account?{' '}
            <Link className="font-medium text-[#1F6CD6] hover:underline" to="/auth/signup">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
