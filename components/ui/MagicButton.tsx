import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  ${otherClasses}`}
      onClick={handleClick}
    >
      {position === "left" && <span className="mr-2">{icon}</span>}
      {title}
      {position === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default MagicButton;
