import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultEstudiantes = [];
    // const resultRutasDestino = [];
    for (const estudiante of value) {

        // if (estudiante.nombres.indexOf(arg1[0].toUpperCase()) > -1) {
        if (estudiante.nombres.indexOf(arg) > -1) {
            resultEstudiantes.push(estudiante);
        }
    }

    return resultEstudiantes;
}

}
