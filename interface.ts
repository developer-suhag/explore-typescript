interface Player {
  name: string;
  club: string;
  salary: number;
  wife?: string;
  preClubs?: string[];
}

const messi: Player = {
  club: "PSG",
  name: "Leo Messi",
  salary: 760000000000000000000000000,
  wife: "Rocokjo",
  preClubs: ["FCB"],
};

const jamal: Player = {
  name: "Jamal Buiyan",
  club: "Kings",
  salary: 100000000,
};

interface Employee {
  name: string;
  age: number;
  designation: string;
  salary: number;
}

interface Developer extends Employee {
  language: string;
  codeEditor: string;
  typingSpeed: number;
}

const suhag: Developer = {
  name: "Suhag",
  age: 21,
  designation: "MERN Stack developer",
  salary: 30000,
  language: "Js",
  codeEditor: "Vs Code",
  typingSpeed: 50,
};
