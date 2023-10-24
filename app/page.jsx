import CardFeed from "@/components/CardFeed";
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
config.autoAddCss = false; /* eslint-disable import/first */

const page = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col mt-10">
        <h1 className="head_text blue_gradient text-center">Jordan Lee</h1>
        <p className="text-center desc mb-5">
          Welcome to my personal portfolio! Below are some of my personal
          experiences and projects.
        </p>
        <div className="flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/jordan-lee-2bb996296/">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a href="https://github.com/jtljrdn">
            <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
          </a>
          <a href="https://twitter.com/jtljrdn">
            <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" />
          </a>
          <a href="https://instagram.com/jordan.t.lee">
            <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
          </a>
        </div>
      </section>
      <div className="divider"></div>

      <h2 className="sub_text text-center mt-3">
        <span className="green_gradient">Experience</span> and{" "}
        <span className="orange_gradient">Projects</span>
      </h2>
      <div>
        <CardFeed />
      </div>
    </div>
  );
};

export default page;
