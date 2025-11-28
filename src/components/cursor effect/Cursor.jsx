import { useEffect } from "react";
import "./cursor.css";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const click = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 200);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  return <div className="cursor"></div>;
}
