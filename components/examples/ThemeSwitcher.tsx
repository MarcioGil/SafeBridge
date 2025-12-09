import React from "react";
import { useStore } from "../../lib/useStore";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useStore();
  return (
    <div className="flex gap-2 items-center">
      <span>Tema:</span>
      <button
        className={`px-2 py-1 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700 text-white"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Claro" : "Escuro"}
      </button>
    </div>
  );
}
