import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import  {HeroDetailComponent} from './heroDetail/hero-detail.component';
import { HeroComponent} from './hero/hero.component';
import { DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes =[
{path:'', redirectTo: '/dashboard',  pathMatch:'full'},
{path:'dashboard', component: DashboardComponent},
{path:'heroes', component: HeroComponent},
{path:'detail/:id',component:HeroDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
