import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const FeatureIcon = ({ variant }: { variant: 'offline' | 'smart' | 'history' | 'secure' | 'admin' | 'theme' }) => {
    const common = 'h-5 w-5';
    switch (variant) {
      case 'offline':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 20h10a3 3 0 0 0 0-6h-.5a4.5 4.5 0 0 0-8.9 1.1A2.8 2.8 0 0 0 7 20Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'smart':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3a7 7 0 0 0-4 12.7V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.3A7 7 0 0 0 12 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path d="M10 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'history':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 12a8 8 0 1 0 3-6.3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M4 4v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 7v6l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'secure':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path d="M9.5 12l1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'admin':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M16 11a4 4 0 1 0-8 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M4 21a8 8 0 0 1 16 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case 'theme':
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 12.2A8.5 8.5 0 0 1 11.8 3a7.5 7.5 0 1 0 9.2 9.2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getFaviconUrl = () => {
    return isDarkMode ? '/icon.png' : '/iconLight.png';
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <img src={getFaviconUrl()} alt="ExpenseGauge Logo" className="h-8 w-10" />
            <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">ExpenseGauge</h1>
          </div>
          <div className='flex gap-5'>
            {
              isDarkMode ?
              <button onClick={() => setIsDarkMode(!isDarkMode)} title='Set Light Theme'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg>
                </button>
                :
                <button onClick={() => setIsDarkMode(!isDarkMode)} title='Set Dark Theme'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
                </button>
            }
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
              <a href="#screenshots" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Screenshots</a>
              <a href="#download" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Download</a>
            </div>
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-black/5 dark:text-slate-200 dark:hover:bg-white/10 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[68px] bg-white/95 dark:bg-slate-900/95 border-b border-black/5 dark:border-white/10 shadow-sm backdrop-blur z-50">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <a href="#features" onClick={toggleMenu} className="block rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10">Features</a>
            <a href="#screenshots" onClick={toggleMenu} className="mt-1 block rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10">Screenshots</a>
            <a href="#download" onClick={toggleMenu} className="mt-1 block rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10">Download</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25] bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-size-[32px_32px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)]" />
          <div className="absolute -top-24 left-1/2 h-80 w-176 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/10" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-176 -translate-x-1/2 rounded-full bg-purple-500/15 blur-3xl dark:bg-purple-500/10" />
        </div>
        <div className="relative mx-auto max-w-6xl items-center gap-10 justify-between flex flex-col-reverse lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-300">
              Offline-first expense tracking
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl leading-tight">
              Track expenses like a ledger - without the effort.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              ExpenseGauge helps you capture expenses quickly, stay organized by category, and review your monthly history - even when you're offline.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Download APK
              </a>
              <a
                href="#screenshots"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors dark:border-white/15 dark:bg-slate-950/40 dark:text-white dark:hover:bg-white/5"
              >
                View screenshots
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-2xl border border-black/5 bg-white/70 p-4 text-left shadow-sm dark:border-white/10 dark:bg-slate-950/40">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Offline-ready</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Local-first</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/70 p-4 text-left shadow-sm dark:border-white/10 dark:bg-slate-950/40">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Categories</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Auto-suggest</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/70 p-4 text-left shadow-sm dark:border-white/10 dark:bg-slate-950/40">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">History</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Monthly view</p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-2xl border border-black/5 bg-white shadow-xl shadow-black/5 dark:border-white/10 dark:bg-slate-900/40 dark:shadow-black/40">
              <img
                src={isDarkMode ? "/expensegauge.jpg" : "/expensegauge-light.jpg"}
                alt="ExpenseGauge App Preview"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 px-4 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Built for everyday tracking</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">A practical set of features that stays fast, focused, and easy to use.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-slate-900/40">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                <FeatureIcon variant="offline" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">Offline-first</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Add and edit expenses without internet. Your data stays available when you need it.</p>
            </div>
            {/* Feature 2 */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-slate-900/40">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                <FeatureIcon variant="smart" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">Smart categories</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Predict and assign categories faster, with less manual cleanup.</p>
            </div>
            {/* Feature 3 */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-slate-900/40">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                <FeatureIcon variant="history" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">Monthly history</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Review transactions and trends by month for quick insights.</p>
            </div>
            {/* Feature 4 */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-slate-900/40">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                <FeatureIcon variant="secure" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">Private by default</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Designed to keep your finance data controlled and protected.</p>
            </div>
            {/* Feature 5 */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-slate-900/40">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">
                <FeatureIcon variant="admin" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">Admin tools</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Manage users and balances with dedicated admin flows.</p>
            </div>
            {/* Feature 6 */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-slate-900/40">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300">
                <FeatureIcon variant="theme" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">Light & dark</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Adapts to your device theme for comfortable viewing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-16 sm:py-24 px-4 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Screenshots</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">A quick look at the core flows and admin views.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40">
              <img src={isDarkMode ? "/expensegauge1.jpg" : "/expensegauge1-light.jpg"} alt="Screenshot 1 - Home Screen" className="w-full" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40">
              <img src={isDarkMode ? "/expensegauge2.jpg" : "/expensegauge2-light.jpg"} alt="Screenshot 2 - Add Expense" className="w-full" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40">
              <img src={isDarkMode ? "/expensegauge3.jpg" : "/expensegauge3-light.jpg"} alt="Screenshot 3 - History" className="w-full" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40">
              <img src={isDarkMode ? "/expensegauge4.jpg" : "/expensegauge4-light.jpg"} alt="Screenshot 4 - Profile" className="w-full" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40">
              <img src={isDarkMode ? '/admin-dark-1.jpg' : '/admin-light-1.jpg'} alt="Screenshot 5 - Admin View 1" className="w-full" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/40">
              <img src={isDarkMode ? '/admin-dark-3.jpg' : '/admin-light-3.jpg'} alt="Screenshot 6 - Admin View 2" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 sm:py-24 px-4 scroll-mt-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-black/5 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-slate-900/40">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Download ExpenseGauge</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Get the latest Android build and start tracking your expenses in minutes.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={import.meta.env.VITE_APP_APK_DOWNLOAD_URL}
                download
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Download APK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10 py-10 px-4">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} ExpenseGauge. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors mx-2">Privacy Policy</a> |
            <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors mx-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
