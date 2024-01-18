import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleChange = (e) => {
    setTheme(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Default</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="default"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Retro</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="retro"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Cyberpunk</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="cyberpunk"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Valentine</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="valentine"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Aqua</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="aqua"
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
}

export default App;
