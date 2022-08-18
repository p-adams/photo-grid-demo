import { Photo } from "./api";

export function setupPhotoCard(photo: Photo): HTMLElement {
  const card = document.createElement("figure");
  card.setAttribute("class", "card-wrapper");
  const img = document.createElement("img");
  img.setAttribute("src", photo.url);
  img.setAttribute("alt", photo.title);
  card.appendChild(img);
  return card;
}
