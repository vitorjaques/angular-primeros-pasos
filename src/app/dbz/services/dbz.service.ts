import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[] = [{
    id: uuid(),
    name:"Goku",
    power: 5000
  },
  {
    id: uuid(),
    name:"Krillin",
    power: 1000
  },
  {
    id: uuid(),
    name:"Vegeta",
    power:3000
  }
];


onNewCharacter(character:Character):void{
 this.characters.push(character);
}


 deleteCharacterByid(id:string){
   this.characters = this.characters.filter(character => character.id !== id);
 }

}
