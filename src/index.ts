import App from "./App.svelte";
import { Quantum } from "./Core/Quantum";
import { Threads } from "./Core/Textile/Threads";
import { RemoteThread } from "./Core/Textile/RemoteThread";
import { async } from "rxjs";

declare global {
  interface Window {
    o: Quantum;
  }
}

var app;

async function start() {
  window.o = await Quantum.leap();
  app = new App({
    target: document.body,
  });
}
start();

export default app;

window["restore"] = function (key) {
  return JSON.parse(localStorage.getItem(key) || "{}");
};
window["store"] = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};
