// Pal images
import lambballImg from '@/assets/pals/lamball.jpg';
import cattivaImg from '@/assets/pals/cattiva.jpg';
import chikipiImg from '@/assets/pals/chikipi.jpg';
import foxparksImg from '@/assets/pals/foxparks.jpg';
import fuackImg from '@/assets/pals/fuack.jpg';
import pengulletImg from '@/assets/pals/pengullet.jpg';
import lifmunkImg from '@/assets/pals/lifmunk.jpg';
import tanzeeImg from '@/assets/pals/tanzee.jpg';
import depressoImg from '@/assets/pals/depresso.jpg';
import blazehowlImg from '@/assets/pals/blazehowl.jpg';
import grizzboltImg from '@/assets/pals/grizzbolt.jpg';
import anubisImg from '@/assets/pals/anubis.jpg';
import astegonImg from '@/assets/pals/astegon.jpg';
import jormuntideImg from '@/assets/pals/jormuntide.jpg';
import frostallionImg from '@/assets/pals/frostallion.jpg';
import jetragonImg from '@/assets/pals/jetragon.jpg';
import orserkImg from '@/assets/pals/orserk.jpg';
import suzakuImg from '@/assets/pals/suzaku.jpg';
import wumpoImg from '@/assets/pals/wumpo.jpg';
import broncherryImg from '@/assets/pals/broncherry.jpg';
import palafinImg from '@/assets/pals/palafin.jpg';
import bellanoirImg from '@/assets/pals/bellanoir.jpg';

export interface WorkSuitability {
  kindling?: number;
  watering?: number;
  planting?: number;
  electricity?: number;
  handiwork?: number;
  gathering?: number;
  deforesting?: number;
  mining?: number;
  medicine?: number;
  cooling?: number;
  transporting?: number;
  farming?: number;
}

export interface Pal {
  id: string;
  name: string;
  number: number;
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
  workSuitability: WorkSuitability;
  imageUrl: string;
  partner?: boolean;
}

export const comprehensivePals: Pal[] = [
  // Common Pals (1-4)
  {
    id: 'lamball',
    name: 'Lamball',
    number: 1,
    element: 'Neutral',
    rarity: 'Common',
    stats: { hp: 70, attack: 70, defense: 70, speed: 70 },
    habitat: 'Grasslands',
    skills: ['Roly Poly', 'Power Shot', 'Implode'],
    description: 'A fluffy Pal that loves to roll around. Its soft wool provides excellent insulation and can be used for crafting.',
    breedingLevel: 1,
    workSuitability: { },
    imageUrl: lambballImg,
    partner: true
  },
  {
    id: 'cattiva',
    name: 'Cattiva',
    number: 2,
    element: 'Neutral',
    rarity: 'Common',
    stats: { hp: 60, attack: 75, defense: 65, speed: 80 },
    habitat: 'Forest',
    skills: ['Cat Press', 'Punch Flurry', 'Power Shot'],
    description: 'A mischievous cat-like Pal known for its playful nature and quick reflexes. Excellent for basic handiwork.',
    breedingLevel: 1,
    workSuitability: { handiwork: 1 },
    imageUrl: cattivaImg,
    partner: true
  },
  {
    id: 'chikipi',
    name: 'Chikipi',
    number: 3,
    element: 'Neutral',
    rarity: 'Common',
    stats: { hp: 55, attack: 60, defense: 60, speed: 85 },
    habitat: 'Grasslands',
    skills: ['Chicken Rush', 'Power Shot', 'Implode'],
    description: 'A small bird-like Pal that moves with surprising speed despite its size. Produces eggs regularly.',
    breedingLevel: 1,
    workSuitability: { gathering: 1 },
    imageUrl: chikipiImg,
    partner: true
  },
  {
    id: 'lifmunk',
    name: 'Lifmunk',
    number: 4,
    element: 'Grass',
    rarity: 'Common',
    stats: { hp: 70, attack: 70, defense: 70, speed: 70 },
    habitat: 'Forest',
    skills: ['Forest Smash', 'Wind Cutter', 'Seed Machine Gun'],
    description: 'A small primate Pal with a love for forest environments. Its keen eyes make it excellent at gathering items.',
    breedingLevel: 2,
    workSuitability: { handiwork: 1, planting: 1, medicine: 1, gathering: 1 },
    imageUrl: lifmunkImg,
    partner: true
  },

  // Uncommon Pals (5-15)
  {
    id: 'foxparks',
    name: 'Foxparks',
    number: 5,
    element: 'Fire',
    rarity: 'Uncommon',
    stats: { hp: 65, attack: 85, defense: 60, speed: 90 },
    habitat: 'Volcanic',
    skills: ['Ember', 'Fire Spin', 'Flamethrower'],
    description: 'A fiery fox Pal that leaves sparks wherever it goes. Its tail burns with intense heat, perfect for kindling work.',
    breedingLevel: 3,
    workSuitability: { kindling: 2 },
    imageUrl: foxparksImg,
    partner: true
  },
  {
    id: 'fuack',
    name: 'Fuack',
    number: 6,
    element: 'Water',
    rarity: 'Uncommon',
    stats: { hp: 75, attack: 70, defense: 75, speed: 70 },
    habitat: 'Lakeside',
    skills: ['Hydro Jet', 'Bubble Blast', 'Aqua Gun'],
    description: 'A duck-like Pal that loves swimming. It can hold its breath underwater for hours and excels at watering tasks.',
    breedingLevel: 2,
    workSuitability: { watering: 2, transporting: 1 },
    imageUrl: fuackImg,
    partner: true
  },
  {
    id: 'tanzee',
    name: 'Tanzee',
    number: 7,
    element: 'Grass',
    rarity: 'Uncommon',
    stats: { hp: 70, attack: 80, defense: 65, speed: 85 },
    habitat: 'Forest',
    skills: ['Seed Machinegun', 'Wind Cutter', 'Grass Tornado'],
    description: 'An energetic monkey Pal that loves to dance among the trees. Excellent at planting and gathering forest resources.',
    breedingLevel: 2,
    workSuitability: { planting: 1, handiwork: 1, transporting: 1, gathering: 1 },
    imageUrl: tanzeeImg,
    partner: true
  },
  {
    id: 'depresso',
    name: 'Depresso',
    number: 17,
    element: 'Dark',
    rarity: 'Uncommon',
    stats: { hp: 70, attack: 70, defense: 85, speed: 60 },
    habitat: 'Caves',
    skills: ['Dark Pulse', 'Shadow Ball', 'Nightmare'],
    description: 'A melancholic Pal that always seems tired. Despite its gloomy appearance, it works diligently at handiwork tasks.',
    breedingLevel: 2,
    workSuitability: { handiwork: 2, transporting: 1, mining: 1 },
    imageUrl: depressoImg,
    partner: true
  },

  // Rare Pals (20-50)
  {
    id: 'pengullet',
    name: 'Pengullet',
    number: 10,
    element: 'Ice',
    rarity: 'Rare',
    stats: { hp: 80, attack: 95, defense: 85, speed: 75 },
    habitat: 'Tundra',
    skills: ['Ice Shard', 'Slide Attack', 'Blizzard Spike'],
    description: 'A penguin-like Pal adapted to cold climates. Its belly slides are surprisingly effective in combat and cooling work.',
    breedingLevel: 4,
    workSuitability: { cooling: 2, handiwork: 2, transporting: 2, mining: 1 },
    imageUrl: pengulletImg,
    partner: true
  },
  {
    id: 'blazehowl',
    name: 'Blazehowl',
    number: 84,
    element: 'Fire',
    rarity: 'Rare',
    stats: { hp: 110, attack: 115, defense: 90, speed: 100 },
    habitat: 'Volcanic Slopes',
    skills: ['Flamethrower', 'Fire Fang', 'Blazing Horn'],
    description: 'A fierce wolf-like Pal with a mane of flames. Its howl can ignite the battlefield and boost fire-type allies.',
    breedingLevel: 7,
    workSuitability: { kindling: 3, deforesting: 2 },
    imageUrl: blazehowlImg,
    partner: true
  },
  {
    id: 'grizzbolt',
    name: 'Grizzbolt',
    number: 103,
    element: 'Electric',
    rarity: 'Rare',
    stats: { hp: 120, attack: 110, defense: 100, speed: 90 },
    habitat: 'Thunder Ridge',
    skills: ['Lightning Claw', 'Thunder Punch', 'Spark Storm'],
    description: 'A powerful bear Pal infused with electrical energy. Its fur crackles with electricity, making it perfect for power generation.',
    breedingLevel: 6,
    workSuitability: { electricity: 3, handiwork: 2, deforesting: 2, transporting: 3 },
    imageUrl: grizzboltImg,
    partner: true
  },
  {
    id: 'wumpo',
    name: 'Wumpo',
    number: 91,
    element: 'Ice',
    rarity: 'Rare',
    stats: { hp: 130, attack: 70, defense: 120, speed: 50 },
    habitat: 'Frozen Wasteland',
    skills: ['Ice Punch', 'Blizzard', 'Ice Wall'],
    description: 'A gentle giant Pal covered in thick white fur. Despite its imposing size, it has a kind heart and loves helping with construction.',
    breedingLevel: 5,
    workSuitability: { cooling: 2, handiwork: 3, deforesting: 3, transporting: 4, mining: 2 },
    imageUrl: wumpoImg,
    partner: true
  },
  {
    id: 'broncherry',
    name: 'Broncherry',
    number: 86,
    element: 'Grass',
    rarity: 'Rare',
    stats: { hp: 125, attack: 90, defense: 115, speed: 65 },
    habitat: 'Cherry Blossom Grove',
    skills: ['Petal Blizzard', 'Solar Beam', 'Grass Tornado'],
    description: 'A peaceful plant-dinosaur Pal that brings spring wherever it goes. Its body produces beautiful cherry blossoms year-round.',
    breedingLevel: 7,
    workSuitability: { planting: 4 },
    imageUrl: broncherryImg,
    partner: true
  },
  {
    id: 'palafin',
    name: 'Palafin',
    number: 104,
    element: 'Water',
    rarity: 'Rare',
    stats: { hp: 100, attack: 105, defense: 95, speed: 110 },
    habitat: 'Ocean Depths',
    skills: ['Aqua Jet', 'Hydro Pump', 'Tidal Wave'],
    description: 'An intelligent dolphin Pal with incredible swimming abilities. It can leap great distances and rescue drowning swimmers.',
    breedingLevel: 6,
    workSuitability: { watering: 4, transporting: 2 },
    imageUrl: palafinImg,
    partner: true
  },

  // Epic Pals (51-99)
  {
    id: 'anubis',
    name: 'Anubis',
    number: 100,
    element: 'Ground',
    rarity: 'Epic',
    stats: { hp: 95, attack: 150, defense: 130, speed: 125 },
    habitat: 'Ancient Ruins',
    skills: ['Ground Pound', 'Sand Tomb', 'Pharaoh\'s Wrath'],
    description: 'A majestic guardian Pal resembling an ancient deity. Its knowledge of construction and mining is unmatched.',
    breedingLevel: 10,
    workSuitability: { handiwork: 4, mining: 3, transporting: 2 },
    imageUrl: anubisImg,
    partner: true
  },
  {
    id: 'astegon',
    name: 'Astegon',
    number: 98,
    element: 'Dragon',
    rarity: 'Epic',
    stats: { hp: 140, attack: 135, defense: 110, speed: 115 },
    habitat: 'Dragon Valley',
    skills: ['Dragon Breath', 'Steel Wing', 'Meteor Strike'],
    description: 'A fearsome metallic dragon Pal with armor-like scales. Its breath can melt even the hardest ores, making mining effortless.',
    breedingLevel: 9,
    workSuitability: { handiwork: 1, mining: 4 },
    imageUrl: astegonImg,
    partner: true
  },
  {
    id: 'jormuntide',
    name: 'Jormuntide',
    number: 101,
    element: 'Dragon',
    rarity: 'Epic',
    stats: { hp: 160, attack: 120, defense: 100, speed: 90 },
    habitat: 'Abyssal Ocean',
    skills: ['Tidal Surge', 'Dragon Dive', 'Oceanic Roar'],
    description: 'A colossal sea serpent Pal that rules the deepest oceans. Its presence can control the tides and weather patterns.',
    breedingLevel: 9,
    workSuitability: { watering: 4 },
    imageUrl: jormuntideImg,
    partner: true
  },

  // Legendary Pals (100+)
  {
    id: 'frostallion',
    name: 'Frostallion',
    number: 110,
    element: 'Ice',
    rarity: 'Legendary',
    stats: { hp: 140, attack: 130, defense: 120, speed: 135 },
    habitat: 'Eternal Glacier',
    skills: ['Blizzard Lance', 'Absolute Zero', 'Crystal Storm'],
    description: 'A legendary ice horse Pal of incredible beauty and power. Its gallop can freeze entire landscapes in pristine ice.',
    breedingLevel: 10,
    workSuitability: { cooling: 4 },
    imageUrl: frostallionImg,
    partner: true
  },
  {
    id: 'jetragon',
    name: 'Jetragon',
    number: 111,
    element: 'Dragon',
    rarity: 'Legendary',
    stats: { hp: 120, attack: 140, defense: 100, speed: 150 },
    habitat: 'Sky Sanctum',
    skills: ['Jet Stream', 'Sonic Boom', 'Dragon Meteor'],
    description: 'The fastest Pal in existence, capable of breaking the sound barrier. Its sleek design allows for unmatched aerial maneuverability.',
    breedingLevel: 10,
    workSuitability: { gathering: 3 },
    imageUrl: jetragonImg,
    partner: true
  },
  {
    id: 'orserk',
    name: 'Orserk',
    number: 106,
    element: 'Electric',
    rarity: 'Legendary',
    stats: { hp: 130, attack: 145, defense: 105, speed: 130 },
    habitat: 'Storm Peak',
    skills: ['Thunder God Strike', 'Lightning Storm', 'Divine Bolt'],
    description: 'A divine dragon Pal that commands lightning itself. Legends say it created the first thunderstorm to bring rain to parched lands.',
    breedingLevel: 10,
    workSuitability: { electricity: 4 },
    imageUrl: orserkImg,
    partner: true
  },
  {
    id: 'suzaku',
    name: 'Suzaku',
    number: 102,
    element: 'Fire',
    rarity: 'Legendary',
    stats: { hp: 125, attack: 150, defense: 95, speed: 140 },
    habitat: 'Inferno Peak',
    skills: ['Phoenix Rising', 'Solar Flare', 'Eternal Flame'],
    description: 'A majestic phoenix Pal reborn from flames. Its fire burns so pure that it can purify corrupted lands and heal the sick.',
    breedingLevel: 10,
    workSuitability: { kindling: 4 },
    imageUrl: suzakuImg,
    partner: true
  },
  {
    id: 'bellanoir',
    name: 'Bellanoir',
    number: 112,
    element: 'Dark',
    rarity: 'Legendary',
    stats: { hp: 110, attack: 140, defense: 110, speed: 125 },
    habitat: 'Moonlit Sanctum',
    skills: ['Shadow Storm', 'Dark Pulse', 'Nightmare Realm'],
    description: 'An elegant fairy Pal that embodies the beauty of night. Despite its dark element, it uses its power to heal and protect.',
    breedingLevel: 20,
    workSuitability: { handiwork: 2, medicine: 4, transporting: 2 },
    imageUrl: bellanoirImg,
    partner: true
  }
];

export const samplePals = comprehensivePals;

export const elements = [
  'Neutral', 'Fire', 'Water', 'Grass', 'Electric', 
  'Ice', 'Ground', 'Fighting', 'Poison', 'Flying', 
  'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark'
];

export const rarities = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];

export const workTypes = [
  'Kindling', 'Watering', 'Planting', 'Electricity', 'Handiwork',
  'Gathering', 'Deforesting', 'Mining', 'Medicine', 'Cooling',
  'Transporting', 'Farming'
];