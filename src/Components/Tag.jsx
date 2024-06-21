import React from "react";

function Tag({ text, width }) {
  return (
    <div
      className={`px-4 py-2 border-2  border-primary border-l-[12px] ${width} h-[7vh] rounded-xl bg-lGreen text-black  `}
    >
      {text}
    </div>
  );
}

export default Tag;
