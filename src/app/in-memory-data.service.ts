import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 11,img:"https://i.pinimg.com/564x/0d/6c/3f/0d6c3f77f778c2ed376c167b2ad16023.jpg", name: 'Dr Nice'},
  { id: 12,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0aubJ5AMCegsoiSXHPQHi2-q5KTMxHIpzw&usqp=CAU", name: 'SuperMan'},
  { id: 13,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zQeRy8n8WnnNZE_mR2D_Ww4bfctAqs5C4w&usqp=CAU", name: 'Avengers'},
  { id: 14,img:"https://wallpaperaccess.com/full/35386.jpg", name: 'SpiderMan' },
  { id: 15,img:"https://wallpaperaccess.com/full/35386.jpg", name: 'SpiderMan' },
  { id: 16,img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png", name: 'RubberMan' },
  { id: 17,img:"https://wallpaperaccess.com/full/51724.jpghttps://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png", name: 'Dynama' },
  { id: 18,img:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png", name: 'Dr IQ' },
  { id: 19,img:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png", name: 'Magma' },
  { id: 20,img:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png", name: 'Tornado' },
  { id: 21,img:"https://wallpaperaccess.com/full/35386.jpg", name: 'Dr Nice'},
  { id: 22,img:"https://wallpaperaccess.com/full/35386.jpg", name: 'Dr Nice'},
  { id: 23,img:"https://wallpaperaccess.com/full/35386.jpg", name: 'Dr Nice'},
  // { id: 24,img:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png", name: 'Dr Nice'},
  // { id: 25,img:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png", name: 'Dr Nice'},
  // { id: 26,img:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png", name: 'Dr Nice'}  
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
