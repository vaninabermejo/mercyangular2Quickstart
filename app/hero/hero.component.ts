import 'rxjs/add/operator/switchMap';

import { Component, HostBinding  } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../domain/hero';
import { HeroService} from '../services/hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']

})
export class HeroComponent implements OnInit {

  // hero ='super chica';
  //heroes: Observable<Hero[]>;
  heroes: Hero[];

  private selectedId: number;

  selectedHero: Hero;
  constructor(private heroService: HeroService, private router: Router, private route: ActivatedRoute) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  //  this.heroes= this.route.params.switchMap((params: Params) => {    this.selectedId = +params['id'];     return this.heroService.getHeroes();    });
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero);

      this.selectedHero = null;
    });
  }
  delete(herotoDelete: Hero): void {
    this.heroService.delete(herotoDelete.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== herotoDelete);
      if (this.selectedHero === herotoDelete) { this.selectedHero = null };
    });
  }
  isSelected(hero: Hero) {
    return (hero.id === this.selectedId);
  }
}
