import { useState } from "react";
import "../styles/Collapse.scss";

export function Collapse(props) {
  const [open, setOPen] = useState(false);
  const arrow = () => {
    setOPen(!open);
  };
  return (
    <div className="collapse">
      <button>
        {props.label}
        <i
          onClick={arrow}
          className={`fa-solid fa-chevron-up arrow ${open ? "rotate" : ""}`}
        ></i>
      </button>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
}
