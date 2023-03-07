"use strict";
exports.__esModule = true;
exports.generateName = void 0;
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
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (Gender = {}));
var nameData = [
    {
        race: Race.Human,
        gender: 'Male',
        nameParts: ['Al', 'Bar', 'Cal', 'Dal', 'El', 'Fal', 'Gal', 'Hal', 'In', 'Ja', 'Kor', 'Lan', 'Mal', 'Nor', 'Ost', 'Per', 'Quin', 'Ror', 'Sul', 'Tar', 'Ul', 'Var', 'Wil', 'Xan', 'Yor', 'Zan']
    },
    {
        race: Race.Human,
        gender: 'Female',
        nameParts: ['Aly', 'Bel', 'Cass', 'Dan', 'El', 'Fa', 'Gwyn', 'Hel', 'Ivy', 'Jes', 'Kel', 'Lil', 'Mar', 'Nes', 'Ode', 'Per', 'Quin', 'Rae', 'Sar', 'Tal', 'Una', 'Val', 'Wyn', 'Xan', 'Ys', 'Zar']
    },
    {
        race: Race.Elf,
        gender: 'Male',
        nameParts: ['Ae', 'Bry', 'Cael', 'Dae', 'Ery', 'Fen', 'Gae', 'Hael', 'Ise', 'Jor', 'Keth', 'Lir', 'Mae', 'Ny', 'Ori', 'Pry', 'Qua', 'Rae', 'Syl', 'Tyr', 'Uri', 'Val', 'Wyn', 'Xyr', 'Yn', 'Zyr']
    },
    {
        race: Race.Elf,
        gender: 'Female',
        nameParts: ['Aela', 'Bryn', 'Ciri', 'Dove', 'Ery', 'Fae', 'Gwyn', 'Hale', 'Ivy', 'Jess', 'Kiri', 'Lia', 'Miri', 'Neri', 'Oli', 'Phy', 'Quel', 'Rael', 'Sari', 'Tia', 'Una', 'Vani', 'Wyn', 'Xyr', 'Yll', 'Zara']
    },
    {
        race: Race.Dwarf,
        gender: 'Male',
        nameParts: ['Brod', 'Dain', 'Eber', 'Farg', 'Gard', 'Har', 'Kil', 'Lod', 'Mor', 'Nal', 'Orin', 'Rang', 'Skal', 'Thar', 'Un', 'Var', 'Yur', 'Zar']
    },
    {
        race: Race.Dwarf,
        gender: 'Female',
        nameParts: ['Breen', 'Dagn', 'Edda', 'Frid', 'Gerta', 'Helga', 'Kath', 'Linde', 'Mard', 'Nissa', 'Orla', 'Ragna', 'Sig', 'Thora', 'Una', 'Vera', 'Yrsa', 'Ziva']
    },
    {
        race: Race.Halfling,
        gender: 'Male',
        nameParts: ['Alton', 'Bilbo', 'Cade', 'Drogo', 'Finn', 'Gavin', 'Harold', 'Ivo', 'Jasper', 'Kenny', 'Lyle', 'Milo', 'Ned', 'Osborn', 'Percy', 'Quinn', 'Reggie', 'Sam', 'Toby', 'Uri', 'Vigo', 'Waldo', 'Xander', 'Yogi', 'Zach']
    },
    {
        race: Race.Halfling,
        gender: 'Female',
        nameParts: ['Alba', 'Bree', 'Cass', 'Dora', 'Ella', 'Fay', 'Gia', 'Hope', 'Iris', 'Jill', 'Kith', 'Lena', 'Mara', 'Nora', 'Olive', 'Posie', 'Queenie', 'Rosa', 'Sadie', 'Tansy', 'Una', 'Vanna', 'Willa', 'Xara', 'Yara', 'Zinnia']
    },
    {
        race: Race.Dragonborn,
        gender: 'Male',
        nameParts: ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn']
    },
    {
        race: Race.Dragonborn,
        gender: 'Female',
        nameParts: ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit']
    },
    {
        race: Race.Gnome,
        gender: 'Male',
        nameParts: ['Alston', 'Boddynock', 'Brocc', 'Dimple', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook']
    },
    {
        race: Race.Gnome,
        gender: 'Female',
        nameParts: ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Salana', 'Shamil', 'Tana', 'Waywocket', 'Zanna']
    },
    {
        race: Race.HalfElf,
        gender: 'Male',
        nameParts: [
            'Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'
        ]
    },
    {
        race: Race.HalfElf,
        gender: 'Female',
        nameParts: [
            'Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'
        ]
    },
    {
        race: Race.HalfOrc,
        gender: 'Male',
        nameParts: ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk']
    },
    {
        race: Race.HalfOrc,
        gender: 'Female',
        nameParts: ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda']
    },
    {
        race: Race.Tiefling,
        gender: 'Male',
        nameParts: ['Akmen', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai']
    },
    {
        race: Race.Tiefling,
        gender: 'Female',
        nameParts: ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Phelaia', 'Rieta']
    },
];
function generateName(race, gender) {
    var entries = nameData.filter(function (e) { return e.race === race && e.gender === gender; });
    var entry = entries[Math.floor(Math.random() * entries.length)];
    var name = entry.nameParts.map(function (part) {
        return part[Math.floor(Math.random() * part.length)];
    }).join('');
    var maxLength = 8;
    var truncatedName = name.substring(0, maxLength).toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    return truncatedName;
}
exports.generateName = generateName;
