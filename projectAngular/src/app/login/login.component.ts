import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Asegúrate de que esto esté aquí si es necesario

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] // Asegúrate de que este módulo esté importado
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}


  login() {
    if (!this.username || !this.password) {
        alert('Por favor ingrese ambos campos');
        return;
    }

    console.log('Intentando iniciar sesión...');
    this.http.post<any>('http://localhost:8080/api/auth/login', {

      username: this.username,
      password: this.password,
    }, { withCredentials: true }).subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response);

        // Suponiendo que el backend envíe un mensaje indicando que el login fue exitoso
        if (response && response === 'Inicio de sesión exitoso') {
          this.router.navigate(['/inicio']);
        } else {
          this.router.navigate(['/inicio']);

        }
      },
      error: (error) => {
        console.error('Error en el inicio de sesión', error);
        alert('Error, Clave incorrecta!!');
      }
    });


}





}
