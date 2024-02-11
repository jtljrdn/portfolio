import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import Card from "@/components/Card";
config.autoAddCss = false; /* eslint-disable import/first */

const page = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col mt-2">
        <h1 className="head_text blue_gradient text-center">Jordan Lee</h1>
        <h2 className="text-4xl font-extrabold text-gray-700 green_gradient leading-normal ">
          Software Engineer
        </h2>
        <p className="text-center desc mb-5">
          Full-Stack Web Developer and Software Engineering Major at Auburn
          University. Working knowledge of React, Next.js, Node.js, Express,
          MongoDB, SupaBase, Figma, and other full-stack technologies.
          <br />
          Lets get in touch!
        </p>
        <div className="flex flex-row gap-5">
          <Link
            href="https://www.linkedin.com/in/jordan-lee-2bb996296/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>
          <Link href="https://github.com/jtljrdn" target="blank">
            <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
          </Link>
          <Link href="https://twitter.com/jtljrdn" target="blank">
            <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" />
          </Link>
          <Link href="https://instagram.com/jordan.t.lee" target="blank">
            <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
          </Link>
        </div>
      </section>
      <div className="divider"></div>

      <h2 className="sub_text text-left mt-3">
        <span className="green_gradient">Experience</span>
      </h2>
      <div className="flex flex-row gap-5 mt-2">
        <Card
          name="Auburn Hacks"
          dates="August 2023 - Present"
          data="Technical Organizer and Web Developer for Auburn Hacks, Auburn Universities annual hackathon."
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
      </div>

      <h2 className="sub_text text-left mt-3">
        <span className="orange_gradient">Projects</span>
      </h2>
      <div className="flex flex-row gap-5 mt-2">
        <Card
          name="CamBot.xyz"
          data="Multipurpose utility Discord Bot. Written in Discord.js. Website made with Next.js, MongoDB, and TailwindCSS."
          link="https://cambot.xyz"
          picture={false}
        />
        <Card
          name="Infinite Craft Clone"
          data="A clone of the game Infinite Craft. Made with React, Next.js, and OpenAI's API."
          link="https://infinite-craft-clone.vercel.app/"
          picture={false}
        />
        <Card
          name="CodeGPT"
          data="Simple project that allows you to convert code from one language to another using OpenAI's API."
          link="https://code-gpt-zeta.vercel.app"
          picture={false}
        />

        <Card
          name="Portfolio"
          data="This website! Made using Next.js, TailwindCSS, and Vercel."
          link="/"
          picture={false}
        />
      </div>
      <h2 className="sub_text text-left mt-3">
        <span className="blue_gradient">Education</span>
      </h2>
      <div className="flex flex-row gap-5 mt-2">
        <Card
          name="Auburn University"
          dates="August 2023 - Present"
          data="Software Engineering Major at Auburn University."
          link="https://auburn.edu"
          picture={true}
          imgSource="/assets/images/auburn-logo.png"
        />
      </div>
    </div>
  );
};

export default page;
