import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './segundaentrega/restaurantes/restaurantes.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ActitudesComponent } from './segundaentrega/actitudes/actitudes.component';
import { ConocimientosComponent } from './segundaentrega/conocimientos/conocimientos.component';
import { ExamenesComponent } from './segundaentrega/examenes/examenes.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PracticasComponent } from './segundaentrega/practicas/practicas.component';
import { PersonalComponent } from './segundaentrega/personal/personal.component';
import { PersonaService } from './services/persona.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RestaurantesComponent,
    FooterComponent,
    HeaderComponent,
    ActitudesComponent,
    ConocimientosComponent,
    ExamenesComponent,
    InicioSesionComponent,
    PracticasComponent,
    PersonalComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }