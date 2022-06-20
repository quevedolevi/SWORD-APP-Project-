import React from "react";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import "./CharacterList.css";
const characters = [
  {
    name: "Goku",
    health: 800,
    fraction: "Saiyan",
    weapon: "Ki",
    damagePerHit: 10,
  },
  {
    name: "Vegeta",
    health: 900,
    fraction: "Saiyan",
    weapon: "Galick Gun",
    damagePerHit: 6,
  },
  {
    name: "Majin Buu",
    health: 500,
    fraction: "Saiyan",
    weapon: "Body Manipulation",
    damagePerHit: 15,
  },
];

// Props are passed to the component via attributes
export const CharacterList = () => {
  //returns true if Math.random() is more than 0.5  
  return (
    <ul>
      {characters.map((character) => (
        <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
      ))}
    </ul>
  );
};