import { Photo } from "./api";

export function setupPhotoCard(photo: Photo): HTMLElement {
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card-container");

  cardContainer.innerHTML = `
    <div class="card-wrapper" ontouchstart="this.classList.toggle('hover');">
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
