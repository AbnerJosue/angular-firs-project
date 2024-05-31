

import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public characters: Character[] = [
        {   
            id: uuidv4(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuidv4(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuidv4(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    addCharacter(character: Character): void {
        this.characters.push(character);
    }

    deleteCharacterById( index: string ): void {
        let indexRemove = this.characters.findIndex((val) => val.id === index);
        this.characters.splice(indexRemove, 1);
    }

}