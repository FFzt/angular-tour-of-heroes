import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { from } from 'rxjs';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
