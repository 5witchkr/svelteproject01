import { writable } from "svelte/store";

export const count = writable(0);
export let login = writable(true);
export let join = writable(false);
export let mainpage = writable(false);
export let pizza = writable(false);