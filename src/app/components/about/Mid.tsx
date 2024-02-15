import React from "react";
import Card from "../Card";

const Mid = () => {
  return (
    <div className=" bg-secondary-blue">
      <div className="flex">
        <Card
          heading="Professionell bakgrund"
          body="ag har en magisterexamen i psykologi från [Universitetets namn] och har över tio års erfarenhet inom psykoterapi. Min specialisering ligger inom [specifikt område], där jag har arbetat med klienter för att hantera och övervinna utmaningar inom detta område."
          className=""
          buttonTxt="Läs Mer..."
        />
        <Card
          heading="Arbetssätt och filosof"
          body="Min terapeutiska metod är grundad i kognitiv beteendeterapi (KBT), med ett holistiskt tillvägagångssätt för att adressera både mentala och emotionella aspekter av en individs liv. Jag tror starkt på att skapa en trygg och stödjande miljö där klienter kan utforska och förändra negativa tankemönster."
          className="items-center text-center"
          buttonTxt="Läs Mer..."
        />
        <Card
          heading="Erfarenhet och utbildning"
          body="Under min karriär har jag arbetat med en mångfald av klienter och ärenden, inklusive men inte begränsat till ångest, depression, relationssvårigheter och personlig utveckling. Mina klienter har upplevt positiva resultat genom att integrera olika terapeutiska tekniker och verktyg."
          className="items-end text-right"
          buttonTxt="Läs Mer..."
        />
      </div>
    </div>
  );
};

export default Mid;
