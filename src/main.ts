import "./index.css";

import { setupTimeDisplay } from "./time.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="p-8 grid place-content-center space-y-8 text-center h-full bg-slate-100 text-black dark:bg-black dark:text-white">
    <h1 class="text-4xl font-bold">Copy Time</h1>
    <h2 class="text-2xl font-semibold">Made by <a class="underline" href="https://kevinjero.me" target="_blank" rel="noreferrer noopener">Kevin Jerome</a></h2>
    <div id="clock" class="flex flex-col gap-2 text-xl text-left"></div>
  </div>
`;

setupTimeDisplay(document.getElementById("clock")!);
