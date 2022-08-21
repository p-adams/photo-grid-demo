import { Photo } from "./api";

function createEl(tagName: string, options: { name: string; value: string }[]) {
  const el = document.createElement(tagName);
  for (const { name, value } of options) {
    el.setAttribute(name, value);
  }
  return el;
}

export function setupPhotoCard(photo: Photo): HTMLElement {
  const cardContainer = createEl("div", [
    { name: "class", value: "card-container" },
  ]);
  cardContainer.innerHTML = `<div class="card-wrapper" ontouchstart="this.classList.toggle('hover');">
    <div class="front">
       <img src=${photo.thumbnailUrl}/>
       <h3>${photo.title}</h3>
    </div>
    <div class="back">
        <img src=${photo.url}/>
    </div>
  </div>`;

  return cardContainer;
}
