import "./style.css";
import { photoGrid } from "./photoGrid";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class=""photo-grid-demo-container">
    <div id="photo-grid"/>
  </div>
`;

photoGrid(document.querySelector<HTMLDivElement>("#photo-grid")!);
