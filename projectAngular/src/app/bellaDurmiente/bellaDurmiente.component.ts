import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bellaDurmiente',
  templateUrl: './bellaDurmiente.component.html',
  styleUrls: ['./bellaDurmiente.component.css']
})
export class BellaDurmienteComponent {

  title = 'bellaDurmiente';

  constructor(private router: Router) { }

  navegarInicio() {
    this.router.navigate(['/inicio']); // Navega a la página de Inicio
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
