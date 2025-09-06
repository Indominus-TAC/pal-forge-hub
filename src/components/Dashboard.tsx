import { Calculator, Search, Map, Star, TrendingUp, Users } from 'lucide-react';
import heroImage from '@/assets/palworld-hero.jpg';

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const quickActions = [
    {
      title: 'Breeding Calculator',
      description: 'Calculate breeding combinations',
      icon: Calculator,
      color: 'primary',
      action: () => onNavigate('breeding')
    },
    {
      title: 'Pal Index',
      description: 'Explore all Pals',
      icon: Search,
      color: 'secondary',
      action: () => onNavigate('index')
    },
    {
      title: 'Interactive Map',
      description: 'Discover locations',
      icon: Map,
      color: 'accent',
      action: () => onNavigate('map')
    },
    {
      title: 'Community',
      description: 'Connect with players',
      icon: Users,
      color: 'primary',
      action: () => onNavigate('community')
    }
  ];

  const stats = [
    { label: 'Pals Discovered', value: '127', icon: Star, trend: '+12' },
    { label: 'Breeding Combos', value: '45', icon: Calculator, trend: '+8' },
    { label: 'Map Progress', value: '78%', icon: Map, trend: '+5%' },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-48 rounded-b-3xl overflow-hidden mb-6">
        <img 
          src={heroImage} 
          alt="PalWorld Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-2xl font-bold text-white mb-2">
            Welcome to PalWorld Companion
          </h1>
          <p className="text-white/80">
            Your ultimate guide to the world of Pals
          </p>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="gaming-card p-4 text-center">
                <Icon size={20} className="text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-accent font-medium">{stat.trend}</div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="gaming-card p-6 text-left group"
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    action.color === 'primary' ? 'bg-primary/10 text-primary' :
                    action.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: 'Discovered new Pal: Foxparks', time: '2 hours ago', type: 'discovery' },
              { action: 'Completed breeding combo: Lamball + Cattiva', time: '5 hours ago', type: 'breeding' },
              { action: 'Found rare chest at Windswept Hills', time: '1 day ago', type: 'treasure' },
            ].map((activity, index) => (
              <div key={index} className="gaming-card p-4 flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'discovery' ? 'bg-secondary' :
                  activity.type === 'breeding' ? 'bg-primary' :
                  'bg-accent'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;