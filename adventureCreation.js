"use strict";
exports.__esModule = true;
var characterCreation_1 = require("./characterCreation");
var ItemType;
(function (ItemType) {
    ItemType["WEAPON"] = "weapon";
    ItemType["ARMOR"] = "armor";
    ItemType["POTION"] = "potion";
})(ItemType || (ItemType = {}));
var AdventureGenerator = /** @class */ (function () {
    function AdventureGenerator() {
        this.roomTypes = ["cave", "dungeon", "mansion", "shack", "lair", "mine", "tomb"];
        this.roomSizes = ["small", "medium", "large", "huge"];
        this.adjectives = [
            "dark",
            "creepy",
            "spooky",
            "haunted",
            "forgotten",
            "abandoned",
            "dusty",
            "foggy",
        ];
        this.itemNames = [
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
        this.monsterNames = [
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
        this.minRoomsPerAdventure = 2;
        this.maxRoomsPerAdventure = 2;
        this.minItemsPerRoom = 0;
        this.maxItemsPerRoom = 2;
        this.minMonstersPerRoom = 0;
        this.maxMonstersPerRoom = 2;
        this.minItemValue = 0;
        this.maxItemValue = 100;
        this.minStrength = 1;
        this.maxStrength = 10;
    }
    AdventureGenerator.prototype.generateAdventure = function () {
        var rooms = this.generateRooms();
        return rooms;
    };
    AdventureGenerator.prototype.generateRooms = function () {
        var numRooms = Math.floor(Math.random() * (this.maxRoomsPerAdventure - this.minRoomsPerAdventure + 1) +
            this.minRoomsPerAdventure);
        var rooms = [];
        for (var i = 0; i < numRooms; i++) {
            var description = this.generateDescription();
            var items = this.generateItems();
            var monsters = this.generateMonsters();
            rooms.push({ description: description, items: items, monsters: monsters });
        }
        return rooms;
    };
    AdventureGenerator.prototype.generateItems = function () {
        var numItems = Math.floor(Math.random() * (this.maxItemsPerRoom - this.minItemsPerRoom + 1) + this.minItemsPerRoom);
        var items = [];
        for (var i = 0; i < numItems; i++) {
            var name_1 = this.itemNames[Math.floor(Math.random() * this.itemNames.length)];
            var value = Math.floor(Math.random() * (this.maxItemValue - this.minItemValue + 1) + this.minItemValue);
            var type = ItemType[Object.keys(ItemType)[Math.floor(Math.random() * Object.keys(ItemType).length)]];
            items.push({ name: name_1, value: value, type: type });
        }
        return items;
    };
    AdventureGenerator.prototype.generateMonsters = function () {
        var numMonsters = Math.floor(Math.random() * (this.maxMonstersPerRoom - this.minMonstersPerRoom + 1) +
            this.minMonstersPerRoom);
        var monsters = [];
        for (var i = 0; i < numMonsters; i++) {
            var name_2 = this.monsterNames[Math.floor(Math.random() * this.monsterNames.length)];
            var strength = Math.floor(Math.random() * (this.maxStrength - this.minStrength + 1) + this.minStrength);
            var defense = Math.floor(Math.random() * (this.maxStrength - this.minStrength + 1) + this.minStrength);
            monsters.push({ name: name_2, strength: strength, defense: defense });
        }
        return monsters;
    };
    AdventureGenerator.prototype.generateDescription = function () {
        var roomType = this.roomTypes[Math.floor(Math.random() * this.roomTypes.length)];
        var roomSize = this.roomSizes[Math.floor(Math.random() * this.roomSizes.length)];
        var adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
        return "".concat(adjective, " ").concat(roomSize, " ").concat(roomType);
    };
    return AdventureGenerator;
}());
var generator = new AdventureGenerator();
var adventure = generator.generateAdventure();
var adventurers = (0, characterCreation_1.generateCharacters)(3);
console.log(JSON.stringify(adventure, null, 2));
console.log(adventurers);
