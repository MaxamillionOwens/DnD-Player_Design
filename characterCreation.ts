import {generateName} from './characterName';

type Character = {
  name: string;
  race: Race;
  gender: Gender;
  class: string;
  level: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  skills: string[];
  feats: string[];
};

enum Race {
  Human = "Human",
  Elf = "Elf",
  Dwarf = "Dwarf",
  Halfling = "Halfling",
  Dragonborn = "Dragonborn",
  Gnome = "Gnome",
  HalfElf = "Half-Elf",
  HalfOrc = "Half-Orc",
  Tiefling = "Tiefling",
}
const raceArray = Object.values(Race);
const randomIndex = Math.floor(Math.random() * raceArray.length);

enum Gender {
    Male = 'Male',
    Female = 'Female',
}

const classes = ["Fighter", "Wizard", "Rogue", "Cleric", "Paladin", "Bard"];
const attributes = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
const skillsByClass = {
  Fighter: ["Athletics", "Intimidation", "Survival"],
  Wizard: ["Arcana", "History", "Investigation"],
  Rogue: ["Acrobatics", "Deception", "Stealth"],
  Cleric: ["Medicine", "Persuasion", "Religion"],
  Paladin: ["Insight", "Intimidation", "Religion"],
  Bard: ["Deception", "Performance", "Persuasion"],
};
const featsByRace = {
  [Race.Human]: ["Lucky", "Skilled", "Variant"],
  [Race.Elf]: ["Elven Accuracy", "Fey Teleportation", "Trance"],
  [Race.Dwarf]: ["Dwarven Toughness", "Stonecunning", "Tool Proficiency"],
  [Race.Halfling]: ["Lucky", "Brave", "Halfling Nimbleness"],
  [Race.HalfElf]: ["Skill Versatility", "Fey Ancestry", "Extra Language"],
  [Race.HalfOrc]: ["Menacing", "Relentless Endurance", "Savage Attacks"],
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateCharacters(numberOfCharacters: number): Character[] {
  const characters: Character[] = [];

  for (let i = 0; i < numberOfCharacters; i++) {
    const character: Character = {
      name: "",
      race: Race.Human,
      gender: Gender.Male,
      class: "",
      level: 1,
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
      skills: [],
      feats: [],
    };

    const raceArray = Object.values(Race);
    const raceRandomIndex = Math.floor(Math.random() * raceArray.length);
    const randomRace = raceArray[raceRandomIndex];
    character.race = randomRace;
    const genderArray = Object.values(Gender);
    const genderRandomIndex = Math.floor(Math.random() * genderArray.length);
    const randomGender = genderArray[genderRandomIndex];
    character.gender = randomGender;
    character.class = classes[getRandomInt(0, classes.length - 1)];
    character.level = getRandomInt(1, 20);
    character.name = generateName(character.race, character.gender);

    for (let j = 0; j < attributes.length; j++) {
      character[attributes[j]] = getRandomInt(2, 20);
    }

    character.skills = skillsByClass[character.class];

    character.feats = featsByRace[character.race];

    characters.push(character);
  }

  return characters;
}


console.log(generateCharacters(1));
