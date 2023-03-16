import React, { useState } from "react";

function Collapse({ title, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="header-collapse">
        <div className="title-collapse">{title}</div>
        <span
          className={`arrow-collapse ${open}`}
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <i class="fa-solid fa-chevron-down"></i>
          ) : (
            <i class="fa-solid fa-chevron-up"></i>
          )}
        </span>
      </div>
      {open && <div className="description-collapse">{desc}</div>}
    </div>
  );
}

export default Collapse;
