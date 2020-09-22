import { interval, timer, Observable } from "rxjs";

/**
 * Respuesta de observer
 *
 * @property {any}
 */
const observer: any = {
 next: (val) => console.log("next:", val),
 complete: () => console.log("complete"),
};

/**
 * Intervalo de timepo
 *
 * @property {Observable<number>}
 */
const interval$: Observable<number> = interval(1000);

/**
 * Tiempo para una respuesta
 *
 * @property {Observable<number>}
 */
const timer$: Observable<number> = timer(2000);

console.log("Inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");
