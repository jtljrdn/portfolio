import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ExperienceEntry from "@/components/ExperienceEntry";
import ProjectsEntry from "@/components/ProjectsEntry";

const cardClass =
  "w-full sm:w-[550px] border border-border rounded-lg shadow-sm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 sm:py-20">
      <main className="flex flex-col items-stretch gap-6 w-full sm:w-[550px]">
        <header className="flex flex-col gap-2 px-1">
          <div className="flex flex-row items-baseline gap-3 flex-wrap">
            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">
              Jordan Lee
            </h1>
            <div className="flex flex-row items-center gap-3 text-muted-foreground">
              <Link
                href="https://www.linkedin.com/in/jordan-lee-2bb996296/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="hover:text-foreground transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.github.com/jtljrdn"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                className="hover:text-foreground transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              </Link>
              <Link
                href="/Lee-Jordan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Resume"
                aria-label="Resume"
                className="hover:text-foreground transition-colors"
              >
                <FontAwesomeIcon icon={faFile} className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <p className="text-muted-foreground">
            Software Engineer · Full Stack Developer
          </p>
        </header>

        <Card className={cardClass}>
          <CardHeader className="border-b pb-4">
            <p className="font-semibold text-lg">Experience</p>
          </CardHeader>
          <CardContent className="flex flex-col">
            <ExperienceEntry
              title="Software Engineer Intern"
              company="Room2Room Movers"
              location="Auburn, AL"
              duration="Aug. 2025 — Present"
            >
              <div className="space-y-3">
                <p>
                  Working on the Room2Room Movers Mover App, a mobile app used
                  by the movers to check their schedule and manage their jobs.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Developed and maintained mobile app features using React
                      Native, improving user experience and functionality.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to implement new
                      functionality, ensuring smooth integration and alignment
                      with project goals.
                    </li>
                    <li>
                      Debugged and optimized app performance, enhancing user
                      experience and reducing load times.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <p className="text-sm">
                    React Native, Expo, Firebase, Tailwind CSS, OpenAI API
                  </p>
                </div>
              </div>
            </ExperienceEntry>

            <ExperienceEntry
              title="Information Technology Intern"
              company="Floor & Decor"
              location="Atlanta, GA"
              duration="June 2025 — Aug. 2025"
            >
              <div className="space-y-3">
                <p>
                  Working on the F&D Pro mobile application development team,
                  focusing on creating efficient and user-friendly solutions
                  for professional contractors and designers.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Led a complete UI/UX redesign of the Premier Pro App,
                      enhancing user experience and interface consistency
                      across platforms.
                    </li>
                    <li>
                      Developed and implemented front-end components using
                      React Native, improving application responsiveness and
                      maintainability.
                    </li>
                    <li>
                      Collaborated with cross-functional teams including
                      designers, product managers, and QA to align on user
                      requirements and technical feasibility.
                    </li>
                    <li>
                      Participate in code reviews and contribute to team best
                      practices.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <p className="text-sm">
                    React Native, Bitbucket, Figma, Jira, Confluence
                  </p>
                </div>
              </div>
            </ExperienceEntry>

            <ExperienceEntry
              title="Undergraduate Research Assistant"
              company="Auburn University, Samuel Ginn College of Engineering"
              location="Auburn, AL"
              duration="Jan. 2025 — Present"
            >
              <div className="space-y-3">
                <p>
                  Full-Stack Web Development for Auburn University&apos;s ICAMS
                  lab, creating a web application to help manage orders between
                  manufacturers and customers.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Developed a web application to help manage orders between
                      manufacturers and customers.
                    </li>
                    <li>
                      Implemented a RESTful API in Next.js to handle CRUD
                      operations for the web application.
                    </li>
                    <li>
                      Integrated a Postgres database using Supabase to store
                      and manage the application data.
                    </li>
                    <li>
                      Developed a user-friendly interface using React and
                      Next.js.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <p className="text-sm">
                    React, Next.js, Node.js, Supabase, Tailwind CSS
                  </p>
                </div>
              </div>
            </ExperienceEntry>

            <ExperienceEntry
              title="Web Development Intern"
              company="ChatDB.ai"
              location="Remote"
              duration="Oct. 2023 — Mar. 2024"
            >
              <div className="space-y-3">
                <p>
                  Contributed to the development of AI-powered database
                  management tools and conversational interfaces for data
                  querying and analysis.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Built responsive web interfaces using modern frontend
                      frameworks.
                    </li>
                    <li>
                      Implemented RESTful APIs and database integration.
                    </li>
                    <li>
                      Developed real-time chat functionality for database
                      queries.
                    </li>
                    <li>
                      Optimized application performance and user experience.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <p className="text-sm">
                    JavaScript, React, Next.js, Supabase
                  </p>
                </div>
              </div>
            </ExperienceEntry>
          </CardContent>
        </Card>

        <Card className={cardClass}>
          <CardHeader className="border-b pb-4">
            <p className="font-semibold text-lg">Projects</p>
            <p className="text-muted-foreground text-sm">
              A list of my projects, some work and some don&apos;t. All code is
              available on GitHub.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
          <ProjectsEntry
              title="Handoff"
              description="Web- and CLI-based tool for managing environment variables in development and production environments."
              liveLink="https://gethandoff.dev"
              ghLink="https://github.com/jtljrdn/handoff-env"
            />
            <ProjectsEntry
              title="Mythidex"
              description="A searchable database and REST API for Good Mythical Morning content."
              liveLink="https://mythidex.dev"
              ghLink="https://github.com/jtljrdn/good-mythical-archive"
            />
            <ProjectsEntry
              title="Infinite Craft"
              description="An online game where you can infinitely combine items to create new ones. Inspired by neal.fun. Built with Next.js, MongoDB, and Tailwind CSS."
              liveLink="https://infinite-craft-clone.vercel.app"
              ghLink="https://github.com/jtljrdn/infinite-craft-clone"
            />
            <ProjectsEntry
              title="Cambot Discord Bot"
              description="A multipurpose Discord bot built with Node.js, Discord.js, and MongoDB. Includes moderation, music, and fun commands."
              ghLink="https://github.com/jtljrdn/Cam-Counter-Public"
            />
            <ProjectsEntry
              title="Cambot Website"
              description="A companion website for the Cambot Discord bot. Built with Next.js, Tailwind CSS, and MongoDB."
              ghLink="https://github.com/jtljrdn/cambot-website"
              liveLink="https://cambot.xyz"
            />
          </CardContent>
        </Card>

        <Card className={cardClass}>
          <CardHeader className="border-b pb-4">
            <p className="font-semibold text-lg">Education</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row justify-between gap-4">
              <div>
                <p className="font-medium">Bachelor of Software Engineering</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Auburn University
                </p>
              </div>
              <p className="text-muted-foreground text-sm whitespace-nowrap">
                Aug. 2023 — May 2027
              </p>
            </div>
          </CardContent>
        </Card>

        <footer className="flex gap-6 items-center justify-center text-sm text-muted-foreground mt-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Me
          </Link>
          <Link
            href="/blog"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </footer>
      </main>
    </div>
  );
}
