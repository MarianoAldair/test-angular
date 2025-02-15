import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {

  public heroesList: Character[] = [
    {
      id: uuid(),
      name: "Goku",
      power: 10000
    },
    {
      id: uuid(),
      name: "Trunks",
      power: 4000
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 9000
    },
    {
      id: uuid(),
      name: "Krillin",
      power: 4500
    },
  ];

  public lastHeroDeleted: Character | null = null;

  // deleteLastHero(): void {
  //   this.lastHeroDeleted = this.heroesNamesList.pop();
  // }

  constructor() {

  }

  addCharacter(character: Character): void {
    character.id = uuid(),
    this.heroesList.push(character);
  }

  deleteCharacterById(id: string): void {
    debugger
    //TODO: eliminar
    this.heroesList = this.heroesList.filter(character => character.id !== id);
  }



}
