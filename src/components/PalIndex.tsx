import { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { samplePals, elements, rarities, type Pal } from '@/data/pals';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const PalIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [selectedPal, setSelectedPal] = useState<Pal | null>(null);

  const filteredPals = samplePals.filter(pal => {
    const matchesSearch = pal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesElement = !selectedElement || pal.element === selectedElement;
    const matchesRarity = !selectedRarity || pal.rarity === selectedRarity;
    
    return matchesSearch && matchesElement && matchesRarity;
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-muted-foreground';
      case 'Uncommon': return 'text-green-400';
      case 'Rare': return 'text-primary';
      case 'Epic': return 'text-secondary';
      case 'Legendary': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const getElementColor = (element: string) => {
    const colors: Record<string, string> = {
      'Fire': 'bg-red-500/20 text-red-400',
      'Water': 'bg-blue-500/20 text-blue-400',
      'Grass': 'bg-green-500/20 text-green-400',
      'Electric': 'bg-yellow-500/20 text-yellow-400',
      'Ice': 'bg-cyan-500/20 text-cyan-400',
      'Neutral': 'bg-gray-500/20 text-gray-400',
    };
    return colors[element] || 'bg-gray-500/20 text-gray-400';
  };

  if (selectedPal) {
    return (
      <div className="pb-20 px-6 pt-6">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedPal(null)}
            className="mr-4"
          >
            ← Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Pal Details</h1>
        </div>

        <div className="gaming-card p-6 mb-6">
          <div className="flex items-start gap-6 mb-4">
            <div className="flex-shrink-0">
              <img 
                src={selectedPal.imageUrl} 
                alt={selectedPal.name}
                className="w-24 h-24 rounded-lg object-cover bg-muted"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{selectedPal.name}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">#{selectedPal.number}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getElementColor(selectedPal.element)}`}>
                      {selectedPal.element}
                    </span>
                    <span className={`font-medium ${getRarityColor(selectedPal.rarity)}`}>
                      {selectedPal.rarity}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < selectedPal.breedingLevel ? 'text-accent fill-accent' : 'text-muted-foreground'} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">{selectedPal.description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Stats</h3>
              <div className="space-y-2">
                {Object.entries(selectedPal.stats).map(([stat, value]) => (
                  <div key={stat} className="flex justify-between items-center">
                    <span className="capitalize text-muted-foreground">{stat}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${(value / 150) * 100}%` }}
                        />
                      </div>
                      <span className="text-foreground font-medium w-8 text-right">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Info</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Paldeck #</span>
                  <span className="text-foreground">{selectedPal.number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Habitat</span>
                  <span className="text-foreground">{selectedPal.habitat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Breeding Level</span>
                  <span className="text-foreground">{selectedPal.breedingLevel}</span>
                </div>
                {selectedPal.partner && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Partner Skill</span>
                    <span className="text-accent">Available</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {selectedPal.workSuitability && Object.keys(selectedPal.workSuitability).length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3">Work Suitability</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(selectedPal.workSuitability).map(([work, level]) => (
                  <div key={work} className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-lg">
                    <span className="capitalize text-sm text-muted-foreground">{work}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${i < level ? 'bg-primary' : 'bg-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-foreground mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {selectedPal.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 px-6 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-4">Pal Index</h1>
        
        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Pals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button
              variant={selectedElement === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedElement('')}
              className="whitespace-nowrap"
            >
              All Elements
            </Button>
            {elements.map(element => (
              <Button
                key={element}
                variant={selectedElement === element ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedElement(element)}
                className="whitespace-nowrap"
              >
                {element}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button
              variant={selectedRarity === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedRarity('')}
              className="whitespace-nowrap"
            >
              All Rarities
            </Button>
            {rarities.map(rarity => (
              <Button
                key={rarity}
                variant={selectedRarity === rarity ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedRarity(rarity)}
                className="whitespace-nowrap"
              >
                {rarity}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Pal Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPals.map(pal => (
          <button
            key={pal.id}
            onClick={() => setSelectedPal(pal)}
            className="gaming-card p-4 text-left hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start gap-3 mb-3">
              <img 
                src={pal.imageUrl} 
                alt={pal.name}
                className="w-12 h-12 rounded-lg object-cover bg-muted flex-shrink-0"
              />
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {pal.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">#{pal.number}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={i < pal.breedingLevel ? 'text-accent fill-accent' : 'text-muted-foreground'} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getElementColor(pal.element)}`}>
                    {pal.element}
                  </span>
                  <span className={`text-sm font-medium ${getRarityColor(pal.rarity)}`}>
                    {pal.rarity}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {pal.description}
            </p>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Habitat: {pal.habitat}</span>
              <span className="text-primary font-medium">Lv.{pal.breedingLevel}</span>
            </div>
          </button>
        ))}
      </div>

      {filteredPals.length === 0 && (
        <div className="text-center py-12">
          <Filter className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No Pals Found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default PalIndex;