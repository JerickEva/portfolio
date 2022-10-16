import * as skillsAPI from "./skills";

const skills = [
  {
    _id: "1",
    version: "PEGA Version 8.6",
  },
  {
    _id: "2",
    version: "PEGA Version 8.3",
  },
  {
    _id: "3",
    version: "PEGA Version 8.1",
  },
  {
    _id: "4",
    version: "PEGA Version 7.4",
  },
  {
    _id: "5",
    version: "PEGA Version 7.2",
  }
];

export function getSkills() {
  return skills;
}

export function getSkill(id) {
  return skills.find(m => m._id === id);
}

// export function saveMovie(skill) {
//   let skillInDb = skills.find(m => m._id === skill._id) || {};
//   skillInDb.version = skill.version;

//   if (!skillInDb._id) {
//     skillInDb._id = Date.now();
//     skills.push(skillInDb);
//   }

//   return skillInDb;
// }
