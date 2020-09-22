import { asyncScheduler, Subscription } from 'rxjs';

// TODO: setTimeout

/**
 * Funcion que escribe en la consola
 *
 * @property {() => void}
 */
const saludar: () => void = () => console.log("Hola Mundo");

/**
 * Funcion que escribe en la consola
 *
 * @property {(nombre:string) => void}
 */
const saludar2: (nombre: string) => void = (nombre) =>
 console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar, 1000);
asyncScheduler.schedule(saludar2, 1500, "Irwing");

// TODO: setInterval

/**
 * Crera intervalo
 *
 * @property {Subscription}
 */
const subs: Subscription = asyncScheduler.schedule(
 function (state) {
  console.log("state", state);
  this.schedule(state + 1, 1000);
 },
 3000,
 0
);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
