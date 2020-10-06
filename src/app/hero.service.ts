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

  
    /** Getting Hero from Server */
    getHeroes(): Observable<Hero[]> {
    
      return this.http.get<Hero[]>(this.heroesUrl).pipe(tap(_=> this.log('fetched heroes')), catchError(this.handleError<Hero[]>('getHeroes', [])));
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    
    /** Getting Hero by id and returns undefined if not being found */
    getHeroNo404<Data>(id: number)_ Observable<Hero> 
    {
      const url = '${this.heroesUrl'}/?id=${id}';
      return this.hhtp.get<Hero>[]>(url)
      .pipe(map(heroes => heroes[0]), tap(h=>
        { const outcome = h ? 'fetched' : 'did not find'; 
        this.log('${outcome} hero id=${id'); }), 
        catchError(this.handleError<Hero>('getHero id=${id}')));
    }
  }
}
