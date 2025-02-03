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
import { Card, CardBody, CardHeader, CardImage } from "@/components/Card";
import {
  faEnvelope,
  faFile,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
          <Link href="https://instagram.com/jordan.t.lee" target="blank">
            <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
          </Link>
          <Link href="mailto:jordan@jtlee.dev" target="blank">
            <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
          </Link>
        </div>
        <Link href="assets/Lee-Jordan-Resume.pdf" className="underline">
          Resume
        </Link>
      </section>
      <div className="divider"></div>

      <h2 className="sub_text text-left mt-3">
        <span className="green_gradient">Experience</span>
      </h2>
      <div className="flex flex-row gap-5 mt-2 overflow-scroll pb-8">
        <Card href="https://flooranddecor.com">
          <CardImage imgSource="/assets/images/f&d.png" />
          <CardHeader
            name="Floor & Decor"
            dates="June 2025 - August 2025"
            title="Incoming I.T. Intern"
          />
        </Card>
        <Card href="https://www.eng.auburn.edu/icams/">
          <CardImage imgSource="/assets/images/icams.png" />
          <CardHeader
            name="Auburn University, Samuel Ginn College of Engineering"
            dates="January 2025 - Present"
            title="Undergraduate Research Assistant"
          />
          <CardBody>
            <p>
              Worked with ICAMS faculty as a web developer to create a
              distributed manufacturing system.
            </p>
          </CardBody>
        </Card>
        <Card href="https://auburnhacks.com">
          <CardImage imgSource="/assets/images/auhacks-logo.png" />
          <CardHeader
            name="Auburn Hacks"
            dates="August 2023 - Present"
            title="Technical Director"
          />
          <CardBody>
            <p>
              Technical Director for Auburn Hacks, Alabama's largest hackathon.
            </p>
          </CardBody>
        </Card>
        <Card href="https://www.chatdb.ai">
          <CardImage imgSource="/assets/images/chatdb.png" />
          <CardHeader
            name="ChatDB.ai"
            dates="October 2023 - March 2024"
            title="Web Developer"
          />
          <CardBody>
            <p>
              Helped Auburn University Alum with startup ChatDB.ai, a tool to
              utilize AI to query Relational Databases using natural language.
            </p>
          </CardBody>
        </Card>
      </div>

      <h2 className="sub_text text-left mt-3">
        <span className="orange_gradient">Projects</span>
      </h2>
      <div className="flex flex-row gap-5 mt-2 overflow-auto md:overflow-visible pb-8">
        <Card href="https://cambot.xyz">
          <CardImage imgSource="/assets/images/cambot.png" />
          <CardHeader name="CamBot.xyz" title="Discord Bot" />
          <CardBody>
            <p>
              Multipurpose utility Discord Bot. Written in Discord.js. Website
              made with Next.js, MongoDB, and TailwindCSS.
            </p>
          </CardBody>
        </Card>
        <Card href="https://infinite-craft-clone.vercel.app/">
          <CardHeader name="Infinite Craft Clone" title="AI Browser Game" />
          <CardBody>
            <p>
              Clone of the game Infinite Craft. Made with React, Next.js, and
              OpenAI's API.
            </p>
          </CardBody>
        </Card>
        <Card href="#">
          <CardHeader name="Portfolio" title="Personal Website" />
          <CardBody>
            <p>This website! Made using Next.js, TailwindCSS, and Vercel.</p>
          </CardBody>
        </Card>
      </div>
      <h2 className="sub_text text-left mt-3">
        <span className="blue_gradient">Education</span>
      </h2>
      <div className="flex flex-row gap-5 mt-2 pb-8">
        <Card href="https://auburn.edu">
          <CardImage imgSource="/assets/images/auburn-logo.png" />
          <CardHeader
            name="Auburn University"
            dates="August 2023 - May 2027"
            title="B.E Software Engineering"
          />
          <CardBody>
            <p>
              Activities and Societies: Auburn Hacks Technical Director, Auburn
              Association of Computing Machinery (ACM) Secretary
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default page;
