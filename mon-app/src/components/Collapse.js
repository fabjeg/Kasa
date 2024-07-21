import { useState, useRef, useEffect } from "react";
import "../styles/Collapse.scss";

export function Collapse(props) {
  const [open, setOpen] = useState(false); /*le collapse reste fermé*/
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [open]);

  return (
    <div className="collapse">
      <button>
        {props.label}
        <i
          onClick={toggleCollapse}
          className={`fa-solid fa-chevron-up arrow ${open ? "rotate" : ""}`}
        ></i>
      </button>
      <div
        ref={contentRef}
        className={`toggle ${open ? "open" : ""}`}
      >
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
}
