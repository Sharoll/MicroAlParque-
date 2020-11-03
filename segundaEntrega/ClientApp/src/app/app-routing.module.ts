import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../app/home/home.component';
import { ConocimientosComponent } from './segundaentrega/conocimientos/conocimientos.component';
import { ActitudesComponent } from './segundaentrega/actitudes/actitudes.component';
import { ExamenesComponent } from './segundaentrega/examenes/examenes.component';
import { PracticasComponent } from './segundaentrega/practicas/practicas.component';
import { PersonalComponent } from './segundaentrega/personal/personal.component';

const routes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'conocimientos', component: ConocimientosComponent},
  {path: 'actitudes', component: ActitudesComponent},
  {path: 'practicas', component: PracticasComponent},
  {path: 'examenes', component: ExamenesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }