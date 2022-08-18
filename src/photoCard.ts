import { Photo } from "./api";

function createEl(tagName: string, options: { name: string; value: string }[]) {
  const el = document.createElement(tagName);
  for (const { name, value } of options) {
    el.setAttribute(name, value);
  }
  return el;
}

export function setupPhotoCard(photo: Photo): HTMLElement {
  const card = createEl("figure", [{ name: "class", value: "card-wrapper" }]);

  const img = createEl("img", [
    { name: "src", value: photo.url },
    { name: "alt", value: photo.title },
  ]);

  card.appendChild(img);
  // TODO: implement card flip
  function handleFlipCard() {}
  card.addEventListener("click", handleFlipCard);

  return card;
}
