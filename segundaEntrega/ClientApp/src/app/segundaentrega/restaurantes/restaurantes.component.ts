import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Restaurantes} from '../models/restaurantes';
import {RestaurantesService} from '../../services/restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
restaurantes: Restaurantes;
  constructor(private restauranteService:RestaurantesService) { }

  ngOnInit(): void {
    this.restaurantes=new Restaurantes;
  }

  add() {
    this.restauranteService.post(this.restaurantes).subscribe(p => {
    if (p != null) {
    alert('Se ha registrado un restaurante!');
    this.restaurantes = p;
    }
    });
    }
    

}
