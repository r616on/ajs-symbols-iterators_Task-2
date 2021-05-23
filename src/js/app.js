import Team from "./Team";
import Bowerman from "./person/Bowerman";
import Swordsman from "./person/Swordsman";
import Magician from "./person/Magician";
import Undead from "./person/classUndead";

const bowerman = new Bowerman("Bower");
const swordsman = new Swordsman("Sword");
const magician = new Magician("Magic");
const undead = new Undead("Unded");

const team = new Team();
team.addAll(bowerman, swordsman, magician, undead);
console.log(team.next());
console.log(team.next());
