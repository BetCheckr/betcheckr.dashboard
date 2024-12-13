import { cn } from "@utils/utils"
import { useSelector, useDispatch } from 'react-redux';
import { updateActiveMenuItem, updateIsMobileMenuOpen } from '@store/components/sidebar.store'
import { Trophy, Users, BarChart3, X } from 'lucide-react'
import PropTypes from 'prop-types';

export function Sidebar({ isMobile = false }) {
  const activeMenuItem = useSelector(state => state.sidebar.activeMenuItem);

  const dispatch = useDispatch();

  const handleMenuItemClick = (menuItem) => {
    dispatch(updateActiveMenuItem(menuItem));
    dispatch(updateIsMobileMenuOpen(false));
  }

  return (
    <nav className={cn(
      "bg-black/30 p-4",
      isMobile ? "w-full" : "w-64 min-h-screen hidden lg:block"
    )}>
      {isMobile && (
        <button
          onClick={() => dispatch(updateIsMobileMenuOpen(false))}
          className="mb-4 text-white/70 hover:text-white"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      )}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xl font-bold">BetCheckr</span>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-white/50 uppercase mb-2">Main Menu</div>
        {['dashboard', 'tipsters', 'statistics'].map((menuItem) => (
          <button
            key={menuItem}
            className={cn(
              "w-full text-left px-4 py-2 rounded-lg flex items-center gap-2",
              activeMenuItem === menuItem ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
            )}
            onClick={() => handleMenuItemClick(menuItem)}
          >
            {menuItem === 'dashboard' && <Trophy size={20} />}
            {menuItem === 'tipsters' && <Users size={20} />}
            {menuItem === 'statistics' && <BarChart3 size={20} />}
            {menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  )
}

Sidebar.propTypes = {
  isMobile: PropTypes.bool,
};
