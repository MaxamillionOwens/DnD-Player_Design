"use strict";
var _a;
exports.__esModule = true;
exports.generateCharacters = void 0;
var characterName_1 = require("./characterName");
var Race;
(function (Race) {
    Race["Human"] = "Human";
    Race["Elf"] = "Elf";
    Race["Dwarf"] = "Dwarf";
    Race["Halfling"] = "Halfling";
    Race["Dragonborn"] = "Dragonborn";
    Race["Gnome"] = "Gnome";
    Race["HalfElf"] = "Half-Elf";
    Race["HalfOrc"] = "Half-Orc";
    Race["Tiefling"] = "Tiefling";
})(Race || (Race = {}));
var raceArray = Object.values(Race);
var randomIndex = Math.floor(Math.random() * raceArray.length);
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (Gender = {}));
var classes = ["Fighter", "Wizard", "Rogue", "Cleric", "Paladin", "Bard"];
var attributes = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
var skillsByClass = {
    Fighter: ["Athletics", "Intimidation", "Survival"],
    Wizard: ["Arcana", "History", "Investigation"],
    Rogue: ["Acrobatics", "Deception", "Stealth"],
    Cleric: ["Medicine", "Persuasion", "Religion"],
    Paladin: ["Insight", "Intimidation", "Religion"],
    Bard: ["Deception", "Performance", "Persuasion"]
};
var featsByRace = (_a = {},
    _a[Race.Human] = ["Lucky", "Skilled", "Variant"],
    _a[Race.Elf] = ["Elven Accuracy", "Fey Teleportation", "Trance"],
    _a[Race.Dwarf] = ["Dwarven Toughness", "Stonecunning", "Tool Proficiency"],
    _a[Race.Halfling] = ["Lucky", "Brave", "Halfling Nimbleness"],
    _a[Race.HalfElf] = ["Skill Versatility", "Fey Ancestry", "Extra Language"],
    _a[Race.HalfOrc] = ["Menacing", "Relentless Endurance", "Savage Attacks"],
    _a);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateCharacters(numberOfCharacters) {
    var characters = [];
    for (var i = 0; i < numberOfCharacters; i++) {
        var character = {
            name: "",
            race: Race.Human,
            gender: Gender.Male,
            "class": "",
            level: 1,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            skills: [],
            feats: []
        };
        var raceArray_1 = Object.values(Race);
        var raceRandomIndex = Math.floor(Math.random() * raceArray_1.length);
        var randomRace = raceArray_1[raceRandomIndex];
        character.race = randomRace;
        var genderArray = Object.values(Gender);
        var genderRandomIndex = Math.floor(Math.random() * genderArray.length);
        var randomGender = genderArray[genderRandomIndex];
        character.gender = randomGender;
        character["class"] = classes[getRandomInt(0, classes.length - 1)];
        character.level = getRandomInt(1, 20);
        character.name = (0, characterName_1.generateName)(character.race, character.gender);
        for (var j = 0; j < attributes.length; j++) {
            character[attributes[j]] = getRandomInt(2, 20);
        }
        character.skills = skillsByClass[character["class"]];
        character.feats = featsByRace[character.race];
        characters.push(character);
    }
    return characters;
}
exports.generateCharacters = generateCharacters;
console.log(generateCharacters(1));
