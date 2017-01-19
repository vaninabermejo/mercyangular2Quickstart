import {Component, ViewChild } from '@angular/core';
import {Hero} from '../domain/hero';

@Component({
  moduleId: module.id,
  selector: 'add-hero',
  templateUrl: 'add-hero-form.component.html',
  styleUrls:['../styles.css']
})

export class AddHeroComponent {


  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
    po: string=this.powers[0];
  model: Hero =   { id: 18, name: 'Mr. Vanina', power:'Super Hot',alterEgo: 'eg' };

  submitted = false;
  onSubmit(){
    this.submitted=true;
  }
  get diagnostic() { return JSON.stringify(this.model); }
}
