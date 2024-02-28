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
          imageUrl="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          body="Jag är engagerad i att upprätthålla höga etiska standarder och respekterar klienters integritet och konfidentialitet. Min praxis är grundad i de etiska riktlinjerna från [relevant organisation eller förening]."
        />
        <Card
          title="Personligt perspektiv"
          imageUrl="https://images.unsplash.com/photo-1523324761162-d261f3f30ab1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          body="Min passion för psykologi och terapi väcktes av önskan att hjälpa andra navigera genom livets utmaningar. Jag tror på varje individs unika förmåga att växa och förändras, och jag är här för att stödja dig på din resa mot välbefinnande."
        />
        <Card
          title="Kontaktinformation"
          imageUrl="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          body="Om du är intresserad av att boka en session eller om du har frågor, är du välkommen att kontakta mig på [e-postadress] eller [telefonnummer]. Jag ser fram emot att höra från dig och hjälpa dig på din väg mot välmående."
        />
      </div>
    </div>
  );
};

export default Mid;
