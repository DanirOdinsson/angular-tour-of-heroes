import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService 
{

    private heroesUrl='api/heroes';

    httpOptions={ headers:new HttpHeaders({'Content-Type': 'application/json'}) };

    constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
