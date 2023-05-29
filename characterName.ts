
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

enum Gender {
    Male = 'Male',
    Female = 'Female',
}

interface NameData {
  race: Race;
  gender: string;
  nameParts: string[];
}

const nameData: NameData[] = [
  {
    race: Race.Human,
    gender: 'Male',
    nameParts: ['Al', 'Bar', 'Cal', 'Dal', 'El', 'Fal', 'Gal', 'Hal', 'In', 'Ja', 'Kor', 'Lan', 'Mal', 'Nor', 'Ost', 'Per', 'Quin', 'Ror', 'Sul', 'Tar', 'Ul', 'Var', 'Wil', 'Xan', 'Yor', 'Zan'],
  },
  {
    race: Race.Human,
    gender: 'Female',
    nameParts: ['Aly', 'Bel', 'Cass', 'Dan', 'El', 'Fa', 'Gwyn', 'Hel', 'Ivy', 'Jes', 'Kel', 'Lil', 'Mar', 'Nes', 'Ode', 'Per', 'Quin', 'Rae', 'Sar', 'Tal', 'Una', 'Val', 'Wyn', 'Xan', 'Ys', 'Zar'],
  },
  {
    race: Race.Elf,
    gender: 'Male',
    nameParts: ['Ae', 'Bry', 'Cael', 'Dae', 'Ery', 'Fen', 'Gae', 'Hael', 'Ise', 'Jor', 'Keth', 'Lir', 'Mae', 'Ny', 'Ori', 'Pry', 'Qua', 'Rae', 'Syl', 'Tyr', 'Uri', 'Val', 'Wyn', 'Xyr', 'Yn', 'Zyr'],
  },
  {
    race: Race.Elf,
    gender: 'Female',
    nameParts: ['Aela', 'Bryn', 'Ciri', 'Dove', 'Ery', 'Fae', 'Gwyn', 'Hale', 'Ivy', 'Jess', 'Kiri', 'Lia', 'Miri', 'Neri', 'Oli', 'Phy', 'Quel', 'Rael', 'Sari', 'Tia', 'Una', 'Vani', 'Wyn', 'Xyr', 'Yll', 'Zara'],
  },
  {
    race: Race.Dwarf,
    gender: 'Male',
    nameParts: ['Brod', 'Dain', 'Eber', 'Farg', 'Gard', 'Har', 'Kil', 'Lod', 'Mor', 'Nal', 'Orin', 'Rang', 'Skal', 'Thar', 'Un', 'Var', 'Yur', 'Zar'],
  },
    {
    race: Race.Dwarf,
    gender: 'Female',
    nameParts: ['Breen', 'Dagn', 'Edda', 'Frid', 'Gerta', 'Helga', 'Kath', 'Linde', 'Mard', 'Nissa', 'Orla', 'Ragna', 'Sig', 'Thora', 'Una', 'Vera', 'Yrsa', 'Ziva'],
  },
  {
    race: Race.Halfling,
    gender: 'Male',
    nameParts: ['Alton', 'Bilbo', 'Cade', 'Drogo', 'Finn', 'Gavin', 'Harold', 'Ivo', 'Jasper', 'Kenny', 'Lyle', 'Milo', 'Ned', 'Osborn', 'Percy', 'Quinn', 'Reggie', 'Sam', 'Toby', 'Uri', 'Vigo', 'Waldo', 'Xander', 'Yogi', 'Zach'],
  },
  {
    race: Race.Halfling,
    gender: 'Female',
    nameParts: ['Alba', 'Bree', 'Cass', 'Dora', 'Ella', 'Fay', 'Gia', 'Hope', 'Iris', 'Jill', 'Kith', 'Lena', 'Mara', 'Nora', 'Olive', 'Posie', 'Queenie', 'Rosa', 'Sadie', 'Tansy', 'Una', 'Vanna', 'Willa', 'Xara', 'Yara', 'Zinnia'],
  },
  {
    race: Race.Dragonborn,
    gender: 'Male',
    nameParts: ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'],
  },
  {
    race: Race.Dragonborn,
    gender: 'Female',
    nameParts: ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'],
  },
  {
    race: Race.Gnome,
    gender: 'Male',
    nameParts: ['Alston', 'Boddynock', 'Brocc', 'Dimple', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook'],
  },
    {
    race: Race.Gnome,
    gender: 'Female',
    nameParts: ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Salana', 'Shamil', 'Tana', 'Waywocket', 'Zanna'],
  },
  {
    race: Race.HalfElf,
    gender: 'Male',
    nameParts: [
      'Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'
    ],
  },
  {
    race: Race.HalfElf,
    gender: 'Female',
    nameParts: [
      'Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'
    ],
  },
  {
    race: Race.HalfOrc,
    gender: 'Male',
    nameParts: ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk'],
  },
  {
    race: Race.HalfOrc,
    gender: 'Female',
    nameParts: ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda'],
  },
  {
    race: Race.Tiefling,
    gender: 'Male',
    nameParts: ['Akmen', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai'],
  },
  {
    race: Race.Tiefling,
    gender: 'Female',
    nameParts: ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Phelaia', 'Rieta'],
  },
];



export function generateName(race: Race, gender: Gender): string {
  const nameDataFiltered = nameData.filter( (data) => data.race === race && data.gender === gender );
  const nameParts = nameDataFiltered[0].nameParts;
  const randomIndex = Math.floor(Math.random() * nameParts.length);
  const randomName = nameParts[randomIndex];
  return randomName;
}
