import { Photo } from "./api";

function createEl(tagName: string, options: { name: string; value: string }[]) {
  const el = document.createElement(tagName);
  for (const { name, value } of options) {
    el.setAttribute(name, value);
  }
  return el;
}

export function setupPhotoCard(photo: Photo): HTMLElement {
  let flipped = false;
  const card = createEl("figure", [{ name: "class", value: "card-wrapper" }]);

  const img = createEl("img", [
    { name: "src", value: photo.thumbnailUrl },
    { name: "alt", value: photo.title },
  ]);

  const title = createEl("h3", [{ name: "class", value: "title" }]);
  title.innerText = photo.title;

  card.appendChild(img);
  card.appendChild(title);
  card.classList.add("front");
  // TODO: implement card flip
  function handleFlipCard() {
    flipped = !flipped;
    if (flipped) {
      card.classList.remove("front");
      card.classList.add("back");
    } else {
      card.classList.remove("back");
      card.classList.add("front");
    }
  }
  card.addEventListener("click", handleFlipCard);

  return card;
}
