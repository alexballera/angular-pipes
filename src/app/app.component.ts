import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'Alexander';

  nombre2 = 'aleXander balLEra';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Alex',
    poder: 'Reir',
    trabaja: 'Mucho',
    adicional: {
      edad: 'mucha',
      ciudad: 'aqui'
    }
  };

  fecha = new Date();

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llegó la data'), 3500);
  });

  video = '7eITVbH9OVY';
}
