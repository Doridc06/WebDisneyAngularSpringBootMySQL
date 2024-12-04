import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sirenita',
  templateUrl: './sirenita.component.html',
  styleUrls: ['./sirenita.component.css']
})
export class SirenitaComponent {


  title = 'sirenita';


  constructor(private router: Router) { }

  navegarInicio() {
    this.router.navigate(['/inicio']);
  }

  navegarCenicienta() {
    this.router.navigate(['/cenicienta']); // Navega a la página de Cenicienta
  }

  navegarSirenita() {
    this.router.navigate(['/sirenita']);
  }

  navegarBellaBestia() {
    this.router.navigate(['/bellaBestia']);
  }

  navegarBellaDurmiente() {
    this.router.navigate(['/bellaDurmiente']);
  }

  navegarEnredados() {
    this.router.navigate(['/enredados']);
  }
}
