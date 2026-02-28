import "./style.css";
import "./ai-scene-app.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <ai-scene-app
    title="企业级 AI 场景库"
    subtitle="基于 Calicat 图层生成，可本地轻量运行并支持外部系统嵌入。"
  ></ai-scene-app>
`;
