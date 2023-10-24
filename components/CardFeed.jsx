import Card from "./Card.jsx";

const CardFeed = () => {
  return (
    <div className="flex-center flex-wrap gap-5 my-3">
      <Card
        name="Auburn University"
        dates="August 2023 - Present"
        data="Software Engineering Major at Auburn University"
        link="https://auburn.edu"
        picture={true}
        imgSource="/assets/images/auburn-logo.png"
      />
      <Card
        name="Auburn Hacks"
        dates="August 2023 - Present"
        data="Technical Organizer and Web Developer for Auburn Hacks, Auburn Universities annual hackathon"
        link="https://www.auburnhacks.com/"
        picture={true}
        imgSource="/assets/images/auhacks-logo.png"
      />
      <Card
        name="ChatDB.ai"
        dates="October 2023 - Present"
        data="Web Developer for ChatDB.ai, a startup utilizing AI to analyze Postgres Databases without SQL"
        link="https://www.chatdb.ai"
        picture={true}
        imgSource="/assets/images/chatdb.png"
      />
      <Card
        name="Promptopia"
        data="Simple Web App to store and share prompts for interacting with AI, made using MongoDB, Next.js, and TailwindCSS"
        link="https://promptopia-phi-seven.vercel.app/"
        picture={false}
      />
      <Card
        name="Portfolio"
        data="This website! Made using Next.js, TailwindCSS, and Vercel"
        link="https://jtlee.dev"
        picture={false}
      />
    </div>
  );
};

export default CardFeed;
