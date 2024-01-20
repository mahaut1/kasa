import React, { useState } from "react";
import "./Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="customCollapse">
      <button onClick={toggle}>
        <p className={`customTitle ${open ? "rotate" : ""}`}>{title}</p>
        <p className={`customChevron ${open ? "rotate" : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </p>
      </button>
      {open && (
        <div className={`customContent ${open ? "slide-in" : "slide-out"}`}>
          <div className="customChildren" style={{ marginTop: '1rem' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapse;


