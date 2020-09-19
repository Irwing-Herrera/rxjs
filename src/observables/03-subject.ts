import { Observable, Observer, Subject, Subscription } from "rxjs";

/**
 * Interfaz de respuesta de observable
 *
 * @property {Observer<any>}
 */
const observer: Observer<any> = {
 next: (value) => console.log("next:", value),
 error: (error) => console.warn("error:", error),
 complete: () => console.info("Complete"),
};

/**
 * Intervalo
 *
 * @property {Observable<number>}
 */
const intervalo$: Observable<number> = new Observable<number>((subscriber) => {
 const interval = setInterval(() => {
  subscriber.next(Math.random());
 }, 1000);

 return () => {
  clearInterval(interval);
  console.log("Intervalo destruido");
 };
});

/**
 * 1.- Casteo multiple
 * 2.- Tambien es un observer
 * 3.- Next, error y complete
 *
 * @returns {Subject}
 */
const subject$ = new Subject();

/**
 * Subscripcion con Subject
 *
 * @property {Subscription}
 */
const subscriptiontoSubject: Subscription = intervalo$.subscribe(subject$);

subject$.subscribe(observer);
subject$.subscribe(observer);

setTimeout(() => {
 subject$.next(10);
 subject$.complete();
 subscriptiontoSubject.unsubscribe();
}, 3500);
