import React from "react";
import Card from "../Card";

const Mid = () => {
  return (
    <div className="  my-7 ">
      <div className="flex justify-center md:justify-around items-center p-3 gap-10 flex-wrap ">
        <Card
          title="Professionell bakgrund"
          imageUrl="https://plus.unsplash.com/premium_photo-1661277709298-a91380f68daa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          body="Jag har en magisterexamen i psykologi från [Universitetets namn] och har över tio års erfarenhet inom psykoterapi. Min specialisering ligger inom [specifikt område], där jag har arbetat med klienter för att hantera och övervinna utmaningar inom detta område."
        />
        <Card
          title="Arbetssätt och filosofi"
          imageUrl="https://images.unsplash.com/photo-1586807480822-0e95ba6666ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          body="Min terapeutiska metod är grundad i kognitiv beteendeterapi (KBT), med ett holistiskt tillvägagångssätt för att adressera både mentala och emotionella aspekter av en individs liv. Jag tror starkt på att skapa en trygg och stödjande miljö där klienter kan utforska och förändra negativa tankemönster."
        />
        <Card
          title="Erfarenhet"
          imageUrl="https://images.unsplash.com/photo-1609348954993-bc615fa8694f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          body="Under min karriär har jag arbetat med en mångfald av klienter och ärenden, inklusive men inte begränsat till ångest, depression, relationssvårigheter och personlig utveckling. Mina klienter har upplevt positiva resultat genom att integrera olika terapeutiska tekniker och verktyg."
        />
        <Card
          title="Etiska riktlinjer"
          imageUrl="https://images.unsplash.com/photo-1627388650937-3074298838c3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          body="Jag är engagerad i att upprätthålla höga etiska standarder och respekterar klienters integritet och konfidentialitet. Min praxis är grundad i de etiska riktlinjerna från [relevant organisation eller förening]."
        />
      </div>
    </div>
  );
};

export default Mid;
