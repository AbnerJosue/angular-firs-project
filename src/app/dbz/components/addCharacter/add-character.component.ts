import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuidv4(),
    name: '',
    power: 0
  };

  emitCharacter(): void {
    const id = uuidv4()
    if (this.character.name.length === 0) return;
    if (this.character.power < 1) return;
    if (!id){
      console.log('Error el id no se ha creado')
    }

    console.log(id)
    this.onNewCharacter.emit({ id ,...this.character });
    this.character = { name:'', power: 0 };
  }
}
