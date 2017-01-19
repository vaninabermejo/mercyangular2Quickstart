import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

//import { HEROES} from '../domain/mock-heroes';
import { Hero} from '../domain/hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    //return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    //return this.getHeroes().then(heroes => heroes.find(hero=>hero.id===id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers }).toPromise().then(() => hero).catch(this.handleError);
  }
  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers }).toPromise().then(res => res.json().data).catch(this.handleError);
  }
  delete(heroId: number):Promise<void>{
    const url = `${this.heroesUrl}/${heroId}`;
    return this.http.delete(url,{headers: this.headers}).toPromise().then(()=>null).catch(this.handleError);
  }
}
