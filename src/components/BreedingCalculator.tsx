import { useState } from 'react';
import { Calculator, Heart, Shuffle, Star, Info } from 'lucide-react';
import { samplePals, type Pal } from '@/data/pals';
import { Button } from '@/components/ui/button';

interface BreedingResult {
  pal: Pal;
  probability: number;
  eggType: string;
  incubationTime: string;
  inheritedStats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
}

const BreedingCalculator = () => {
  const [parent1, setParent1] = useState<Pal | null>(null);
  const [parent2, setParent2] = useState<Pal | null>(null);
  const [showParentSelector, setShowParentSelector] = useState<1 | 2 | null>(null);
  const [results, setResults] = useState<BreedingResult[]>([]);

  const calculateBreeding = () => {
    if (!parent1 || !parent2) return;

    // Simple breeding simulation - in a real app, this would use actual game logic
    const possibleOffspring = samplePals.filter(pal => 
      pal.breedingLevel <= Math.max(parent1.breedingLevel, parent2.breedingLevel) + 1
    ).slice(0, 3);

    const breedingResults = possibleOffspring.map(offspring => ({
      pal: offspring,
      probability: Math.floor(Math.random() * 30) + 20, // Random probability 20-50%
      eggType: offspring.rarity === 'Legendary' ? 'Huge Dragon Egg' :
               offspring.rarity === 'Epic' ? 'Large Egg' :
               offspring.rarity === 'Rare' ? 'Regular Egg' : 'Common Egg',
      incubationTime: offspring.breedingLevel * 10 + 'min',
      inheritedStats: {
        hp: Math.floor((parent1.stats.hp + parent2.stats.hp) / 2),
        attack: Math.floor((parent1.stats.attack + parent2.stats.attack) / 2),
        defense: Math.floor((parent1.stats.defense + parent2.stats.defense) / 2),
        speed: Math.floor((parent1.stats.speed + parent2.stats.speed) / 2),
      }
    }));

    setResults(breedingResults);
  };

  const selectParent = (pal: Pal, parentNumber: 1 | 2) => {
    if (parentNumber === 1) {
      setParent1(pal);
    } else {
      setParent2(pal);
    }
    setShowParentSelector(null);
  };

  const clearSelection = () => {
    setParent1(null);
    setParent2(null);
    setResults([]);
  };

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

  if (showParentSelector) {
    return (
      <div className="pb-20 px-6 pt-6">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => setShowParentSelector(null)}
            className="mr-4"
          >
            ← Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            Select Parent {showParentSelector}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {samplePals.map(pal => (
            <button
              key={pal.id}
              onClick={() => selectParent(pal, showParentSelector)}
              className="gaming-card p-4 text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground">{pal.name}</h3>
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
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                  {pal.element}
                </span>
                <span className={`text-sm font-medium ${getRarityColor(pal.rarity)}`}>
                  {pal.rarity}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>HP: {pal.stats.hp} | ATK: {pal.stats.attack}</span>
                <span>Breeding Lv.{pal.breedingLevel}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 px-6 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Breeding Calculator</h1>
        <p className="text-muted-foreground">
          Select two parent Pals to calculate possible breeding outcomes
        </p>
      </div>

      {/* Parent Selection */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Parent 1 */}
          <button
            onClick={() => setShowParentSelector(1)}
            className={`gaming-card p-4 min-h-[120px] flex flex-col items-center justify-center ${
              parent1 ? 'border-primary' : 'border-dashed border-border'
            }`}
          >
            {parent1 ? (
              <>
                <h3 className="font-semibold text-foreground mb-1">{parent1.name}</h3>
                <span className="text-xs text-primary mb-2">{parent1.element}</span>
                <span className={`text-xs ${getRarityColor(parent1.rarity)}`}>
                  {parent1.rarity}
                </span>
              </>
            ) : (
              <>
                <div className="text-muted-foreground mb-2">
                  <Calculator size={32} />
                </div>
                <span className="text-sm text-muted-foreground">Select Parent 1</span>
              </>
            )}
          </button>

          {/* Parent 2 */}
          <button
            onClick={() => setShowParentSelector(2)}
            className={`gaming-card p-4 min-h-[120px] flex flex-col items-center justify-center ${
              parent2 ? 'border-primary' : 'border-dashed border-border'
            }`}
          >
            {parent2 ? (
              <>
                <h3 className="font-semibold text-foreground mb-1">{parent2.name}</h3>
                <span className="text-xs text-primary mb-2">{parent2.element}</span>
                <span className={`text-xs ${getRarityColor(parent2.rarity)}`}>
                  {parent2.rarity}
                </span>
              </>
            ) : (
              <>
                <div className="text-muted-foreground mb-2">
                  <Calculator size={32} />
                </div>
                <span className="text-sm text-muted-foreground">Select Parent 2</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={calculateBreeding}
            disabled={!parent1 || !parent2}
            className="flex-1 gaming-gradient"
          >
            <Heart className="mr-2" size={16} />
            Calculate Breeding
          </Button>
          {(parent1 || parent2) && (
            <Button variant="outline" onClick={clearSelection}>
              <Shuffle size={16} />
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Breeding Results</h2>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="gaming-card p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {result.pal.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {result.pal.element}
                      </span>
                      <span className={`text-sm font-medium ${getRarityColor(result.pal.rarity)}`}>
                        {result.pal.rarity}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {result.probability}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Egg Info</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="text-foreground">{result.eggType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Incubation:</span>
                        <span className="text-foreground">{result.incubationTime}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Inherited Stats</h4>
                    <div className="space-y-1 text-xs">
                      {Object.entries(result.inheritedStats).map(([stat, value]) => (
                        <div key={stat} className="flex justify-between">
                          <span className="text-muted-foreground capitalize">{stat}:</span>
                          <span className="text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Info size={12} />
                  <span>Stats are averaged from both parents with random variation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {parent1 && parent2 && results.length === 0 && (
        <div className="text-center py-8">
          <Calculator className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Calculate</h3>
          <p className="text-muted-foreground">
            Click "Calculate Breeding" to see possible outcomes
          </p>
        </div>
      )}
    </div>
  );
};

export default BreedingCalculator;