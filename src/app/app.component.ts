import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    nombre: string = 'Capitan America';
    arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    PI: number = Math.PI;
    porcentaje: number = 0.234;
    salario: number = 12345;
    fecha: Date = new Date();

    idioma : string = 'fr';

    videoUrl : string = 'https://www.youtube.com/embed/_tniWgtqj_M';

    valorPromesa = new Promise<string>((resolve) => {
        setTimeout(() => { resolve('Llego la data') }, 4500)
    });

    heroe = {
        nombre: 'Logan',
        clave: 'Wolverine',
        edad: 500,
        direccion: {
            calle: 'Primera',
            casa: 20,
        },
    };

    isActivated : boolean = true;

    changeLanguage(idioma: string) {
        this.idioma = idioma;
    };
};
