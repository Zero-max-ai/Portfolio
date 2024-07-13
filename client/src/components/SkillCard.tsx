import React from "react";

interface IconItem {
  title: string;
  icon: React.ReactElement;
}

interface SkillCardProps {
  title: string;
  icons: IconItem[];
}

const SkillCard = ({ title, icons }: SkillCardProps) => {
  return (
    <div className="flex max-md:flex-col items-center max-md:items-start gap-3 md:gap-10 max-md:text-xs">
      <h2 className="w-20">{title}- </h2>
      <div className="flex flex-wrap items-center gap-3">
        {icons.map((val) => {
          return (
            <div className="bg-gray-800 p-5 rounded flex flex-col items-center gap-2 font-bold">
              {" "}
              <span>{val.icon}</span> <span>{val.title}</span>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
