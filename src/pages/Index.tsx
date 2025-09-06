import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';
import PalIndex from '@/components/PalIndex';
import BreedingCalculator from '@/components/BreedingCalculator';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'index':
        return <PalIndex />;
      case 'breeding':
        return <BreedingCalculator />;
      case 'map':
        return (
          <div className="pb-20 px-6 pt-6">
            <h1 className="text-2xl font-bold text-foreground mb-4">Interactive Map</h1>
            <div className="gaming-card p-8 text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Map Coming Soon</h3>
              <p className="text-muted-foreground">
                Interactive PalWorld map with chest locations, boss spawns, and more!
              </p>
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="pb-20 px-6 pt-6">
            <h1 className="text-2xl font-bold text-foreground mb-4">Community</h1>
            <div className="gaming-card p-8 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Features Coming Soon</h3>
              <p className="text-muted-foreground">
                Connect with other players, share breeding combinations, and more!
              </p>
            </div>
          </div>
        );
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderActiveComponent()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;