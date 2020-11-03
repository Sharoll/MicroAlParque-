import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService} from '../../services/persona.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona = new Persona();
  }

  add(){
    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {
      alert('Persona creada!');
      this.persona = p;
      }
      });
    }    
}
