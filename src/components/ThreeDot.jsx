import React from "react";

export default function ThreeDot() {
  return (
    <div className=" absolute bottom-1  w-full flex items-center justify-center">
      <p className="h-10 flex gap-5  items-center">
        <span className="w-1 h-1 rounded-full bg-slate-400 block"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 block"></span>
        <span className="w-2 h-2 rounded-full bg-slate-200 block"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 block"></span>
        <span className="w-1 h-1 rounded-full bg-slate-400 block"></span>
      </p>
    </div>
  );
}
