import { asyncScheduler, range, Observable } from "rxjs";

// TODO: al agregar el parametro de asyncScheduler se vuelve asincrono el observable

/**
 * Realizar una numeracion con un range, y total de emiciones
 *
 * @property {Observable<number>}
 */
const src$: Observable<number> = range(1, 5, asyncScheduler);

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
