import "./style.css";
import { photoGrid } from "./photoGrid";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="photo-grid-demo-container">
    <h3>Photo Grid Demo</h3>
    <div id="photo-grid"/>
  </div>
`;

photoGrid(document.querySelector<HTMLDivElement>("#photo-grid")!);
