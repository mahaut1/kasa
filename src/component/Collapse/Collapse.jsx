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
    <div id="divCollapse">
      <button onClick={toggle}>
        <p>{title}</p>
        <p id="chevron" className={open ? "rotate" : ""}>
          <FontAwesomeIcon icon={faChevronUp} />
        </p>
      </button>
      {open && (
        <div className={`divCol ${open ? "slide-in" : "slide-out"}`}>
          <div className="children">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
