import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const getImageUrl = (baseName: string) => {
    return isDarkMode ? `/${baseName}.jpg` : `/${baseName}_light.jpg`;
  };

  const getFaviconUrl = () => {
    return isDarkMode ? '/icon.png' : '/iconLight.png';
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center relative z-50">
        <div className="flex items-center">
          <img src={getFaviconUrl()} alt="ExpenseGauge Logo" className="h-8 w-10 mr-2" />
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">ExpenseGauge</h1>
        </div>
        <div className="hidden sm:flex space-x-4">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Features</a>
          <a href="#screenshots" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Screenshots</a>
          <a href="#download" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Download</a>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-16 left-0 w-full py-2 z-40">
          <a href="#features" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Features</a>
          <a href="#screenshots" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Screenshots</a>
          <a href="#download" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Download</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-500 to-purple-600 dark:from-indigo-800 dark:to-purple-900 text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <img src="/expensegauge.jpg" alt="ExpenseGauge App Preview" className="mx-auto mb-8 rounded-lg shadow-2xl w-full max-w-lg" />
          <h2 className="text-5xl font-bold mb-4 leading-tight">Master Your Money, Anytime, Anywhere.</h2>
          <p className="text-xl mb-8 opacity-90">ExpenseGauge: Your intelligent, offline-first expense manager for effortless financial control.</p>
          <a href="#download" className="bg-white text-indigo-600 dark:text-indigo-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out shadow-lg">Download Now</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">Why Choose ExpenseGauge?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-indigo-500 mb-4">💡</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Offline-First Power</h4>
              <p className="text-gray-600 dark:text-gray-300">Never miss a beat! Add and edit expenses even without internet. Your data syncs automatically when you're back online.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-green-500 mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Smart Categorization</h4>
              <p className="text-gray-600 dark:text-gray-300">Our intelligent AI automatically predicts expense categories, making tracking faster and more accurate.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-blue-500 mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Insightful History</h4>
              <p className="text-gray-600 dark:text-gray-300">Visualize your spending with monthly trend charts and easily review transactions grouped by month.</p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-yellow-500 mb-4">🔒</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Secure & Private</h4>
              <p className="text-gray-600 dark:text-gray-300">Your financial data is important. ExpenseGauge ensures secure management of your personal information.</p>
            </div>
            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-red-500 mb-4">👨‍💼</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Admin Capabilities</h4>
              <p className="text-gray-600 dark:text-gray-300">Admins can manage users, assign balances, and oversee expenses with dedicated tools.</p>
            </div>
            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-purple-500 mb-4">🎨</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Personalized Theming</h4>
              <p className="text-gray-600 dark:text-gray-300">Switch between light and dark modes to match your preference and reduce eye strain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">See ExpenseGauge in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="/expensegauge1.jpg" alt="Screenshot 1 - Home Screen" className="rounded-lg shadow-xl" />
            <img src="/expensegauge2.jpg" alt="Screenshot 2 - Add Expense" className="rounded-lg shadow-xl" />
            <img src="/expensegauge3.jpg" alt="Screenshot 3 - History" className="rounded-lg shadow-xl" />
            <img src="/expensegauge4.jpg" alt="Screenshot 4 - Profile" className="rounded-lg shadow-xl" />
            <img src={getImageUrl('admin_preview1')} alt="Screenshot 5 - Admin View 1" className="rounded-lg shadow-xl" />
            <img src={getImageUrl('admin_preview2')} alt="Screenshot 6 - Admin View 2" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-linear-to-r from-purple-600 to-indigo-700 dark:from-purple-900 dark:to-indigo-900 text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-6">Ready to Take Control of Your Finances?</h3>
          <p className="text-xl mb-10 opacity-90">Download ExpenseGauge today and experience a smarter way to manage your money.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="/downloads/ExpenseGauge.apk" download className="bg-white text-purple-700 dark:text-purple-900 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
              Download for Android (APK)
            </a>
            {/* You can add links for other platforms if available */}
            {/*
            <a href="#" className="bg-gray-800 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg">
              Download for iOS (Coming Soon)
            </a>
            */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-8 px-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} ExpenseGauge. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-indigo-400 hover:underline mx-2">Privacy Policy</a> |
            <a href="#" className="text-indigo-400 hover:underline mx-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
