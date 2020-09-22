import { fromEvent, Observable } from "rxjs";

/**
 * Eventos del DOM
 */

/**
 * Obtener cordenadas de DOM
 *
 * @property {Observable<MouseEvent>}
 */
const src1$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, "click");

/**
 * Obtener ctecla presionada en el DOM
 *
 * @property {Observable<KeyboardEvent>}
 */
const src2$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(
 document,
 "keyup"
);

src1$.subscribe(({ x, y }) => {
 console.log("x: ", x);
 console.log("y: ", y);
});

src2$.subscribe((evento) => {
 console.log(evento.key);
});
