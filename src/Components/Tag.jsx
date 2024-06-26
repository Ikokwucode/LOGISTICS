import React from "react";

function Tag({ text, style, width }) {
  return (
    <div
      className={`px-4 py-2 flex items-center justify-center font-Nunito font-bold border-primary border-l-[12px] ${width} h-[7vh] rounded-xl bg-lGreen text-black ${style}  `}
    >
      {text}
    </div>
  );
}

export default Tag;
