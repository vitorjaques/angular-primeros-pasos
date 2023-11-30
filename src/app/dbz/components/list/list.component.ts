import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [{
    id:"",
    name:"",
    power:0
  }]

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();



   deleteCharacterById(id:string){
     this.onDelete.emit(id);
   }

}
