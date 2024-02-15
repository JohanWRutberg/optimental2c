import React from "react";
import * as icons from "react-icons";
import { LuSendToBack } from "react-icons/lu";
type CardType = {
  heading: string;
  body: string;
  icon?: string;
  className?: string;
  buttonTxt?: string;
};
const Card = ({ heading, body, className, buttonTxt }: CardType) => {
  return (
    <div
      className={`h-78 w-full bg-secondary-blue flex flex-col   p-10 ${className}`}
    >
      <h1
        className={` text-lg uppercase font-semibold  tracking-[4px] text-primary-orange mb-8`}
      >
        {heading}
      </h1>
      <p className="text-white max-w-[400px] mb-5">{body}</p>

      <button className="button-35">{buttonTxt}</button>
    </div>
  );
};

export default Card;
