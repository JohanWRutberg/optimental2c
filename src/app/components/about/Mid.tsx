import React from "react";
import Card from "../Card";

const Mid = () => {
  return (
    <div className="max-w-[2000px] flex-auto">
      <div className="xl:flex xl:flex-row flex flex-col">
        <Card
          heading="Professionell bakgrund"
          body="Jag har en magisterexamen i psykologi från [Universitetets namn] och har över tio års erfarenhet inom psykoterapi. Min specialisering ligger inom [specifikt område], där jag har arbetat med klienter för att hantera och övervinna utmaningar inom detta område."
          className="items-center xl:items-start  border-primary-blue "
          buttonTxt="Läs Mer..."
        />
        <Card
          heading="Arbetssätt och filosof"
          body="Min terapeutiska metod är grundad i kognitiv beteendeterapi (KBT), med ett holistiskt tillvägagångssätt för att adressera både mentala och emotionella aspekter av en individs liv. Jag tror starkt på att skapa en trygg och stödjande miljö där klienter kan utforska och förändra negativa tankemönster."
          className="items-center xl:text-center xl:border-r-[3px] xl:border-l-[3px] border-primary-blue border-t-[3px] border-b-[3px] xl:border-t-[0px] xl:border-b-[0px]"
          buttonTxt="Läs Mer..."
        />
        <Card
          heading="Erfarenhet och utbildning"
          body="Under min karriär har jag arbetat med en mångfald av klienter och ärenden, inklusive men inte begränsat till ångest, depression, relationssvårigheter och personlig utveckling. Mina klienter har upplevt positiva resultat genom att integrera olika terapeutiska tekniker och verktyg."
          className="xl:items-end xl:text-right items-center  "
          buttonTxt="Läs Mer..."
        />
      </div>
    </div>
  );
};

export default Mid;
