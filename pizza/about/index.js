import katex from './node_modules/katex/dist/katex.mjs';
import renderMathInElement from './node_modules/katex/dist/contrib/auto-render.mjs';

console.log("Hello from the about page!");

document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "\\(", right: "\\)", display: false}
    ]
  });
});