export function setupTimeDisplay(element: HTMLElement) {
  function tick() {
    const now = new Date();

    const iso = now.toISOString();
    const utc = now.toUTCString();
    const date = now.toDateString();
    const time = now.toTimeString();
    const locale = now.toLocaleString();
    const unix = Math.floor(Date.now() / 1000);

    const data = {
      iso,
      utc,
      date,
      time,
      locale,
      unix,
    };

    const innerHTML = Object.entries(data)
      .map(([title, value]) => {
        return `<p><b>${title.toUpperCase()}:</b> <span>${value}</span></p>`;
      })
      .join("");
    return innerHTML;
  }

  element.innerHTML = tick();

  setInterval(() => {
    element.innerHTML = tick();
  }, 1e3 * 60);
}
