import React from "react";
interface Title {
  children: React.ReactNode;
}
const Title = ({ children }: Title) => {
  return (
    <h2 className="text-xl md:text-2xl lg:text-[39.81px] leading-tight uppercase max-width px-6">
      {children}
    </h2>
  );
};

export default Title;
