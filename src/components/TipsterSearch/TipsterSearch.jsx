import { useState } from 'react'
import { Search } from 'lucide-react'
import PropTypes from 'prop-types';

const categories = ['All', 'Football', 'Basketball', 'Tennis', 'Horse Racing']

export function TipsterSearch({ onSearch, onCategoryChange }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search tipsters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-3 py-1 rounded-md text-sm ${
              activeCategory === category
                ? 'bg-white/20 text-white'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

TipsterSearch.propTypes = {
  onSearch: PropTypes.func,
  onCategoryChange: PropTypes.func
};