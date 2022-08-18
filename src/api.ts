export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export async function getPhotos(): Promise<Photo[]> {
  return await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
