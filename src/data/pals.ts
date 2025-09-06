export interface Pal {
  id: string;
  name: string;
  element: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  habitat: string;
  skills: string[];
  description: string;
  breedingLevel: number;
}

export const samplePals: Pal[] = [
  {
    id: 'lamball',
    name: 'Lamball',
    element: 'Neutral',
    rarity: 'Common',
    stats: { hp: 70, attack: 70, defense: 70, speed: 70 },
    habitat: 'Grasslands',
    skills: ['Fluffy Shield', 'Roly Poly'],
    description: 'A fluffy Pal that loves to roll around. Its soft wool provides excellent insulation.',
    breedingLevel: 1
  },
  {
    id: 'cattiva',
    name: 'Cattiva',
    element: 'Neutral',
    rarity: 'Common',
    stats: { hp: 60, attack: 75, defense: 65, speed: 80 },
    habitat: 'Forest',
    skills: ['Cat Punch', 'Scratch'],
    description: 'A mischievous cat-like Pal known for its playful nature and quick reflexes.',
    breedingLevel: 2
  },
  {
    id: 'chikipi',
    name: 'Chikipi',
    element: 'Neutral',
    rarity: 'Common',
    stats: { hp: 55, attack: 60, defense: 60, speed: 85 },
    habitat: 'Grasslands',
    skills: ['Chicken Rush', 'Feather Shot'],
    description: 'A small bird-like Pal that moves with surprising speed despite its size.',
    breedingLevel: 1
  },
  {
    id: 'foxparks',
    name: 'Foxparks',
    element: 'Fire',
    rarity: 'Uncommon',
    stats: { hp: 65, attack: 85, defense: 60, speed: 90 },
    habitat: 'Volcanic',
    skills: ['Ember', 'Fire Spin'],
    description: 'A fiery fox Pal that leaves sparks wherever it goes. Its tail burns with intense heat.',
    breedingLevel: 3
  },
  {
    id: 'fuack',
    name: 'Fuack',
    element: 'Water',
    rarity: 'Uncommon',
    stats: { hp: 75, attack: 70, defense: 75, speed: 70 },
    habitat: 'Lakeside',
    skills: ['Water Gun', 'Splash'],
    description: 'A duck-like Pal that loves swimming. It can hold its breath underwater for hours.',
    breedingLevel: 2
  },
  {
    id: 'pengullet',
    name: 'Pengullet',
    element: 'Ice',
    rarity: 'Rare',
    stats: { hp: 80, attack: 95, defense: 85, speed: 75 },
    habitat: 'Tundra',
    skills: ['Ice Shard', 'Slide Attack'],
    description: 'A penguin-like Pal adapted to cold climates. Its belly slides are surprisingly effective in combat.',
    breedingLevel: 4
  }
];

export const elements = [
  'Neutral', 'Fire', 'Water', 'Grass', 'Electric', 
  'Ice', 'Ground', 'Fighting', 'Poison', 'Flying', 
  'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark'
];

export const rarities = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];