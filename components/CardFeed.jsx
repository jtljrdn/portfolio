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
        data="Full-Stack Web Developer for ChatDB.ai, a startup utilizing AI to query Relational Databases using natural language."
        link="https://www.chatdb.ai"
        picture={true}
        imgSource="/assets/images/chatdb.png"
      />
      <Card
      name="CodeGPT"
      data="Simple project that allows you to convert code from one language to another using OpenAI's API"
      link="code-gpt-zeta.vercel.app"
      picture={false}
      />
      <Card
        name="Cam-Counter Discord Bot"
        data="Simple Discord bot I created to count the number of times my friend didn't join a call. Written in Discord.js"
        link="https://github.com/jtljrdn/Cam-Counter-Public"
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
