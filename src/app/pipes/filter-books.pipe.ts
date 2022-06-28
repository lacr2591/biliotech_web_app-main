import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultLibros = [];
    // const resultRutasDestino = [];
    for (const libro of value) {

        // if (estudiante.nombres.indexOf(arg1[0].toUpperCase()) > -1) {
        if (libro.title.indexOf(arg) > -1) {
          resultLibros.push(libro);
        }
    }

    return resultLibros;
}

}
