import {generateCharacters} from "./characterCreation";

enum ItemType {
  WEAPON = "weapon",
  ARMOR = "armor",
  POTION = "potion",
}

type Item = {
  name: string;
  value: number;
  type: ItemType;
};

type Monster = {
  name: string;
  strength: number;
  defense: number;
};

type Room = {
  description: string;
  items: Item[];
  monsters: Monster[];
};

class AdventureGenerator {
  private readonly roomTypes = ["cave", "dungeon", "mansion", "shack", "lair", "mine", "tomb"];
  private readonly roomSizes = ["small", "medium", "large", "huge"];
  private readonly adjectives = [
    "dark",
    "creepy",
    "spooky",
    "haunted",
    "forgotten",
    "abandoned",
    "dusty",
    "foggy",
  ];
  private readonly itemNames = [
    "Sword",
    "Axe",
    "Mace",
    "Bow",
    "Dagger",
    "Shield",
    "Helmet",
    "Breastplate",
    "Gauntlets",
    "Boots",
    "Ring",
    "Amulet",
    "Potion",
    "Scroll",
    "Bones",
  ];
  private readonly monsterNames = [
    "Goblin",
    "Orc",
    "Troll",
    "Giant Spider",
    "Skeleton",
    "Zombie",
    "Ghoul",
    "Vampire",
    "Werewolf",
    "Dragon",
    "Rat",
    "Rogue",
  ];
  private readonly minRoomsPerAdventure = 2;
  private readonly maxRoomsPerAdventure = 2;
  private readonly minItemsPerRoom = 0;
  private readonly maxItemsPerRoom = 2;
  private readonly minMonstersPerRoom = 0;
  private readonly maxMonstersPerRoom = 2;
  private readonly minItemValue = 0;
  private readonly maxItemValue = 100;
  private readonly minStrength = 1;
  private readonly maxStrength = 10;

  public generateAdventure(): Room[] {
    const rooms = this.generateRooms();

    return rooms;
  }

  private generateRooms(): Room[] {
    const numRooms = Math.floor(
      Math.random() * (this.maxRoomsPerAdventure - this.minRoomsPerAdventure + 1) +
        this.minRoomsPerAdventure
    );

    const rooms: Room[] = [];

    for (let i = 0; i < numRooms; i++) {
      const description = this.generateDescription();
      const items = this.generateItems();
      const monsters = this.generateMonsters();

      rooms.push({ description, items, monsters });
    }

    return rooms;
  }

  private generateItems(): Item[] {
    const numItems = Math.floor(
      Math.random() * (this.maxItemsPerRoom - this.minItemsPerRoom + 1) + this.minItemsPerRoom
    );

    const items: Item[] = [];

    for (let i = 0; i < numItems; i++) {
      const name = this.itemNames[Math.floor(Math.random() * this.itemNames.length)];
      const value = Math.floor(
        Math.random() * (this.maxItemValue - this.minItemValue + 1) + this.minItemValue
      );
      const type = ItemType[Object.keys(ItemType)[Math.floor(Math.random() * Object.keys(ItemType).length)]];

      items.push({ name, value, type });
    }

    return items;
  }

  private generateMonsters(): Monster[] {
    const numMonsters = Math.floor(
      Math.random() * (this.maxMonstersPerRoom - this.minMonstersPerRoom + 1) +
        this.minMonstersPerRoom
    );

    const monsters: Monster[] = [];

    for (let i = 0; i < numMonsters; i++) {
      const name = this.monsterNames[Math.floor(Math.random() * this.monsterNames.length)];
      const strength = Math.floor(
        Math.random() * (this.maxStrength - this.minStrength + 1) + this.minStrength
      );
      const defense = Math.floor(
        Math.random() * (this.maxStrength - this.minStrength + 1) + this.minStrength
      );

      monsters.push({ name, strength, defense });
    }

    return monsters;
  }

  private generateDescription(): string {
    const roomType =
      this.roomTypes[Math.floor(Math.random() * this.roomTypes.length)];
    const roomSize =
      this.roomSizes[Math.floor(Math.random() * this.roomSizes.length)];
    const adjective =
      this.adjectives[Math.floor(Math.random() * this.adjectives.length)];

    return `${adjective} ${roomSize} ${roomType}`;
  }
}

const generator = new AdventureGenerator();
const adventure = generator.generateAdventure();
const adventurers = generateCharacters(3);

console.log(JSON.stringify(adventure, null, 2));
console.log(adventurers);
