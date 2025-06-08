import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              🦦 BlockyOtters
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Global AI Conference - Hackathon Tokyo 2025
            </p>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              Cryptocurrency Market Data MCP Service
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              BlockyOtters provides a standardized Model Context Protocol (MCP) interface,
              enabling AI assistants like Claude to directly access real-time cryptocurrency market data.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Real-time Data</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Get the latest cryptocurrency prices, market cap, and trading volume data
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">MCP Protocol</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Standardized interface for easy integration into various AI assistants
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Easy to Use</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Simple configuration to start using powerful cryptocurrency data features
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-6 items-center justify-center flex-col sm:flex-row">
            <Link
              href="/blockyotters"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🦦 Enter BlockyOtters
            </Link>
            <a
              href="https://github.com/BlockyOtters-GlobalAIConference-HackathonTokyo2025"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              📚 View Documentation
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Price Inquiry</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get real-time price information for major cryptocurrencies like Bitcoin and Ethereum
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Market Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access global cryptocurrency market data including market cap, trading volume and other key metrics
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Trending Topics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track the most popular cryptocurrencies and market trends
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Multi-Currency Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Support for multiple fiat currencies to meet global user needs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Fast Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
                High-performance API interface ensuring speed and stability of data retrieval
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Easy Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Follows MCP standards for easy integration into various AI applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 BlockyOtters - Global AI Conference Hackathon Tokyo 2025
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              API
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
