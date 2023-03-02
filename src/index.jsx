import React from "react";
import { createRoot } from "react-dom/client";
import { palettes } from "./palettes";
import "./style.css";
import { Palette } from "./components/Palette";
import { SchemeColor } from "./components/SchemeColor";

{
  /* řešení f. */
}
{
  palettes[0].colors.map((color) => (
    <div
      className="scheme-color"
      key={color}
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  ));
}
{
  /* řešení g. */
}
{
  palettes[1].colors.map((color) => (
    <div
      className="scheme-color"
      key={color}
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  ));
}
{
  /* řešení h. */
}
{
  palettes[0].colors.map((color) => <SchemeColor key={color} color={color} />);
  palettes[1].colors.map((color) => <SchemeColor key={color} color={color} />);
}

const App = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Barevné palety</h1>
        </header>
        <main>
          {palettes.map((palette) => (
            <Palette paletteData={palette} key={palette.name} />
          ))}
        </main>
        <footer>
          <p>Czechitas, React</p>
        </footer>
      </div>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
