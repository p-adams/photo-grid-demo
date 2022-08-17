interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export async function photoGrid(el: HTMLDivElement) {
  const photos: Photo[] = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  for (const photo of photos) {
    const imgWrapper = document.createElement("div");
    imgWrapper.setAttribute("class", "img-wrapper");
    const img = document.createElement("img");
    img.setAttribute("src", photo.url);
    img.setAttribute("alt", photo.title);
    imgWrapper.appendChild(img);
    el!.appendChild(imgWrapper);
  }
}
