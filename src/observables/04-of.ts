import { of, Observable } from 'rxjs';

/**
 * Observable de numeros
 * 
 * @property {Observable<number>}
 */
const observable$: Observable<number> = of<number>(...[1, 2, 3, 4, 5, 6], 7, 8, 9);

console.log("Inicio de Observable");

observable$.subscribe(
 (next) => console.log("next", next),
 null,
 () => console.log("Terminamos la secuencia")
);

console.log("Fin del Observable");
