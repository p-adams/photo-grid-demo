import { getPhotos } from "./api";

export async function setupPhotoGrid(el: HTMLDivElement) {
  for (const photo of await getPhotos()) {
    // TODO: use photo card element
    const imgWrapper = document.createElement("figure");
    imgWrapper.setAttribute("class", "img-wrapper");
    const img = document.createElement("img");
    img.setAttribute("src", photo.url);
    img.setAttribute("alt", photo.title);
    imgWrapper.appendChild(img);
    el!.appendChild(imgWrapper);
  }
}
