import { Observable, Observer } from "rxjs";

/**
 * Interfaz de respuesta de observable
 *
 * @property {Observer<any>}
 */
const observer: Observer<any> = {
 next: (value) => console.log("Num: : ", value),
 error: (error) => console.warn("error:", error),
 complete: () => console.info("Complete"),
};

/**
 * Contador
 *
 * @property {Observable<number>}
 */
const intervalo$ = new Observable<number>((subscriber) => {
 let contador: number = 0;

 const interval = setInterval(() => {
  contador++;
  subscriber.next(contador);
 }, 1000);

 setTimeout(() => {
  subscriber.complete();
 }, 2500);

 return () => {
  clearInterval(interval);
  console.log("Intervalo destruido");
 };
});

const subscription_1 = intervalo$.subscribe(observer);
const subscription_2 = intervalo$.subscribe(observer);
const subscription_3 = intervalo$.subscribe(observer);

subscription_1.add(subscription_2).add(subscription_3);

setTimeout(() => {
 subscription_1.unsubscribe();

 console.log("Completado timeout");
}, 6000);
