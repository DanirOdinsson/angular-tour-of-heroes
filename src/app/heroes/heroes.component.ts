import { Component, OnInit } from '@angular/core';
import {Hero} from './../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', //it is the location of 
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {id: 1, name: 'Windstorm'};

  constructor() {}

  ngOnInit(): void {}

}

