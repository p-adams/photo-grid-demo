export function photoGrid(el: HTMLDivElement) {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .then((response) => console.log(response));
}
