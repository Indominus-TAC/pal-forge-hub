import { useState } from 'react';
import { Home, Search, Calculator, Map, Users, Settings } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'index', label: 'Pal Index', icon: Search },
    { id: 'breeding', label: 'Breeding', icon: Calculator },
    { id: 'map', label: 'Map', icon: Map },
    { id: 'community', label: 'Community', icon: Users },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-primary bg-primary/10 gaming-glow' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon size={20} className={isActive ? 'animate-pulse' : ''} />
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;