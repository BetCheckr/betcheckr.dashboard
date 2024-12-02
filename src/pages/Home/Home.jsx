import React, { useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { MenuIcon, Trophy, Users, AlertTriangle, ChevronRight, BarChart3, X } from 'lucide-react'
import PerformanceChart from '@components/PerformanceChart/PerformanceChart.jsx'
import { TipsterSearch } from '@components/TipsterSearch/TipsterSearch.jsx'
import { Sidebar } from '@components/Sidebar/Sidebar.jsx'
import { cn } from "@utils/utils"
import { useSelector, useDispatch } from 'react-redux';
import { updateIsMobileMenuOpen } from '@store/components/sidebar.store'

const allTipsters = [
  { name: 'John Doe', winRate: 68, profit: 1250, category: 'Football' },
  { name: 'Jane Smith', winRate: 62, profit: 980, category: 'Basketball' },
  { name: 'Mike Johnson', winRate: 59, profit: 750, category: 'Tennis' },
  { name: 'Sarah Williams', winRate: 71, profit: 1500, category: 'Horse Racing' },
  { name: 'Tom Brown', winRate: 65, profit: 1100, category: 'Football' },
]

const recentPredictions = [
  { tipster: 'John Doe', match: 'Lakers vs Warriors', prediction: 'Lakers -5.5', result: 'Win' },
  { tipster: 'Jane Smith', match: 'Man City vs Liverpool', prediction: 'Over 2.5 Goals', result: 'Loss' },
  { tipster: 'Mike Johnson', match: 'Nadal vs Djokovic', prediction: 'Nadal to win', result: 'Win' },
]

function HomePage() {
  const [tipsters, setTipsters] = useState(allTipsters)
  const activeMenuItem = useSelector(state => state.sidebar.activeMenuItem);
  const isMobileMenuOpen = useSelector(state => state.sidebar.isMobileMenuOpen);

  const dispatch = useDispatch();

  const handleSearch = (query) => {
    const filtered = allTipsters.filter(tipster =>
      tipster.name.toLowerCase().includes(query.toLowerCase())
    )
    setTipsters(filtered)
  }

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setTipsters(allTipsters)
    } else {
      const filtered = allTipsters.filter(tipster => tipster.category === category)
      setTipsters(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1C1E] text-white">
      <div className="flex">
        {/* Sidebar for desktop */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-black/30 p-4 flex justify-between items-center">
            <button
              className="lg:hidden text-white/70 hover:text-white"
              onClick={() => dispatch(updateIsMobileMenuOpen(true))}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold">
              {activeMenuItem.charAt(0).toUpperCase() + activeMenuItem.slice(1)}
            </h1>
          </header>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 lg:hidden">
              <div className="h-full w-64 bg-[#1A1C1E]">
                <Sidebar isMobile />
              </div>
            </div>
          )}

          <main className="p-6">
            {activeMenuItem === 'dashboard' && (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                  <div className="bg-black/30 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-500/20 p-3 rounded-lg">
                        <Trophy className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Win Rate</p>
                        <p className="text-2xl font-bold">62%</p>
                        <div className="flex items-center text-emerald-500 text-sm">
                          <ArrowUpIcon className="h-4 w-4" />
                          <span>3%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-500/20 p-3 rounded-lg">
                        <Trophy className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Total Profit</p>
                        <p className="text-2xl font-bold">$15,430</p>
                        <div className="flex items-center text-emerald-500 text-sm">
                          <ArrowUpIcon className="h-4 w-4" />
                          <span>8.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Verified Tipsters</p>
                        <p className="text-2xl font-bold">1,254</p>
                        <div className="flex items-center text-emerald-500 text-sm">
                          <ArrowUpIcon className="h-4 w-4" />
                          <span>12%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-red-500/20 p-3 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Flagged Tipsters</p>
                        <p className="text-2xl font-bold">23</p>
                        <div className="flex items-center text-red-500 text-sm">
                          <ArrowDownIcon className="h-4 w-4" />
                          <span>5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Tipster Search and List */}
                  <div className="bg-black/30 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-4">Find Tipsters</h3>
                    <TipsterSearch onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
                    <div className="mt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="text-white/60 text-sm">
                              <th className="text-left pb-4">Name</th>
                              <th className="text-left pb-4">Win Rate</th>
                              <th className="text-left pb-4">Profit</th>
                              <th className="text-left pb-4">Category</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {tipsters.map((tipster) => (
                              <tr key={tipster.name} className="hover:bg-white/5">
                                <td className="py-3">{tipster.name}</td>
                                <td className="py-3">{tipster.winRate}%</td>
                                <td className="py-3">${tipster.profit}</td>
                                <td className="py-3">{tipster.category}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Recent Predictions */}
                  <div className="bg-black/30 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-4">Recent Predictions</h3>
                    <div className="space-y-4">
                      {recentPredictions.map((prediction, idx) => (
                        <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0">
                          <div className={cn(
                            "p-2 rounded-full",
                            prediction.result === 'Win' ? 'bg-emerald-500/20' : 'bg-red-500/20'
                          )}>
                            {prediction.result === 'Win' ? (
                              <CheckCircleIcon className={cn(
                                "h-5 w-5",
                                prediction.result === 'Win' ? 'text-emerald-500' : 'text-red-500'
                              )} />
                            ) : (
                              <XCircleIcon className="h-5 w-5 text-red-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-white/60">
                              {prediction.tipster} predicted <span className="text-white">{prediction.prediction}</span>
                            </p>
                            <p className="text-sm text-white/40">{prediction.match}</p>
                          </div>
                          <div className="text-sm text-white/40">1h ago</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="mt-6 bg-black/30 rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Performance Over Time</h3>
                  <div className="h-[300px]">
                    <PerformanceChart />
                  </div>
                </div>
              </>
            )}

            {activeMenuItem === 'tipsters' && (
              <div className="bg-black/30 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">All Tipsters</h3>
                <TipsterSearch onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
                <div className="mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-white/60 text-sm">
                          <th className="text-left pb-4">Name</th>
                          <th className="text-left pb-4">Win Rate</th>
                          <th className="text-left pb-4">Profit</th>
                          <th className="text-left pb-4">Category</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {tipsters.map((tipster) => (
                          <tr key={tipster.name} className="hover:bg-white/5">
                            <td className="py-3">{tipster.name}</td>
                            <td className="py-3">{tipster.winRate}%</td>
                            <td className="py-3">${tipster.profit}</td>
                            <td className="py-3">{tipster.category}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeMenuItem === 'statistics' && (
              <div className="bg-black/30 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Overall Statistics</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <p className="text-sm text-white/60">Total Bets</p>
                    <p className="text-2xl font-bold">15,234</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <p className="text-sm text-white/60">Average Win Rate</p>
                    <p className="text-2xl font-bold">62.5%</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <p className="text-sm text-white/60">Total Profit</p>
                    <p className="text-2xl font-bold">$45,678</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-4">Performance Trend</h4>
                  <div className="h-[300px]">
                    <PerformanceChart />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className="p-4">
  //     <h1 className="text-2xl">Welcome to BetCheckr HomePage</h1>
  //     <Link to="/bet/1" className="text-blue-500">Go to Example Page</Link>
  //   </div>
  // );
}

export default HomePage;
