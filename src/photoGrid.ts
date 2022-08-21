import { getPhotos } from "./api";
import { setupPhotoCard } from "./photoCard";

export async function setupPhotoGrid(el: HTMLDivElement) {
  for (const photo of await getPhotos()) {
    const photoCard = setupPhotoCard(photo);
    el!.appendChild(photoCard);
  }
}
