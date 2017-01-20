import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule}  from '@angular/http';


import { DatepickerModule, AlertModule,AccordionModule,ButtonsModule   } from 'ng2-bootstrap';


import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';

import  {HeroDetailComponent} from './heroDetail/hero-detail.component';
import { HeroComponent} from './hero/hero.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {HeroSearchComponent} from './hero/hero-search.component';
import {AddHeroComponent} from './hero/add-hero-form.component';

import {HeroService} from './services/hero.service';




@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  AppRoutingModule,
                  AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot()

                  ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroComponent,
                  DashboardComponent,
                  HeroSearchComponent,
                  AddHeroComponent
                  ],
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
