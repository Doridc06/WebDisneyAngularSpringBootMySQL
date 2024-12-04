import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  title = 'inicio'; // Título de la página de inicio

  constructor(private router: Router) { }

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
