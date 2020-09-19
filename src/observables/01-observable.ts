import { Observable, Observer } from "rxjs";

/**
 * Interfaz de respuesta de observable
 * 
 * @property {Observer<any>}
 */
const observer: Observer<any> = {
 next: (value) => console.log("siguiente [next]:", value),
 error: (error) => console.warn("error [obs]:", error),
 complete: () => console.info("Complete [obs]"),
};

/**
 * Observador de strings
 *
 * @property {Observable}
 */
const observable$ = new Observable<string>((subscription) => {
 subscription.next("Hola");
 subscription.next("Hola");
 subscription.next("Hola");
 subscription.next("Hola");

 // Generar error
 // const a = undefined;
 // a.nombre = 'Fernando';

 subscription.complete();

 subscription.next("Hola");
 subscription.next("Hola");
});

observable$.subscribe(observer);

// observable$.subscribe(
//  (valor) => console.log("next: ", valor),
//  (error) => console.error("error: ", error),
//  () => console.info("Complete")
// );
