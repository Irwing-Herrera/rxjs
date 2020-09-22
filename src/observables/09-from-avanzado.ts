import { of, from, Observable } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

/**
 * Respuesta de observer
 *
 * @property {any}
 */
const observer = {
 next: (val) => console.log("next:", val),
 complete: () => console.log("complete"),
};

const miGenerador = function* () {
 yield 1;
 yield 2;
 yield 3;
 yield 4;
 yield 5;
};

const miIterable = miGenerador();

// for( let id of miIterable ){
//     console.log(id);
// }
from(miIterable).subscribe(observer);

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('Fernando');

/**
 * Peticion HTTP
 *
 * @property {Observable<Response>}
 */
const source$: Observable<Response> = from<Promise<Response>>(
 fetch("https://api.github.com/users/Irwing-Herrera")
);

source$.subscribe(async (resp) => {
//  console.log(resp);

 const dataResp = await resp.json();
 console.log(dataResp);
});

source$.subscribe(observer);
