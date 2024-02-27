import Image from "next/image";
import React from "react";
import * as icons from "react-icons";
import { LuSendToBack } from "react-icons/lu";
type CardType = {
  title: string;
  imageUrl: string;
  body: string;
};
const Card = ({ title, imageUrl, body }: CardType) => {
  return (
    <div
      id="card-container"
      className=" rounded-md bg-secondary-blue text-black w-[300px] overflow-hidden shadow-[0_0px_15px_-5px_rgba(0,0,0,0.7)] hover:scale-105 border-2 hover:border-2 hover:border-primary-orange transition  ease-in"
    >
      <div id="img-container" className="overflow-hidden h-[200px] w-auto">
        <img className="overflow-hidden h-auto w-auto" src={imageUrl} alt="" />
      </div>
      <div id="card-content" className="p-4">
        <div className="font-extrabold text-xl pt-2 pb-4 line-clamp-1">
          <h3>{title}</h3>
        </div>
        <div className="line-clamp-6">
          <p>{body}</p>
        </div>
      </div>
      <div className="flex justify-center pb-1">
        <button className="uppercase text-primary-blue p-2 hover:bg-primary-blue hover:text-primary-orange transition  ease-in rounded-md tracking-[2px]">
          <a href="">Läs Mer</a>
        </button>
      </div>
    </div>
  );
};

export default Card;

// bg-[#fbeee0]
