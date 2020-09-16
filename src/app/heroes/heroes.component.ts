import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', //it is the location of 
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; 



  constructor() {}

  ngOnInit(): void {}

}

