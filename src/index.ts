import "./css/tailwind.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

const links: NodeList = document.querySelectorAll("a[data-link]");

links.forEach(addListeners);

function addListeners(value: Node, key: number, parent: NodeList): void {
  const eventType: string | null = (value as HTMLElement).getAttribute(
    "data-link"
  );

  if (eventType !== typeof null) {
    switch (eventType) {
      case "mobile":
        value.addEventListener("click", mobileEvent, false);
        break;
      case "high-contrast":
        value.addEventListener("click", contrastEvent, false);
        break;
      case "large-text":
        value.addEventListener("click", largeEvent, false);
        break;
    }
  }
}

function mobileEvent(): void {
  const nav: HTMLElement = document.querySelector("nav")!;

  if (nav !== undefined) {
    const classes: DOMTokenList = nav.classList;
    if (classes.length === 1) {
      nav.className = "";
    } else {
      nav.className = "nav-mobile";
    }
  }
}

function contrastEvent(): void {}

function largeEvent(): void {}
