import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ExperienceEntry from "@/components/ExperienceEntry";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Card className="w-full sm:w-[550px] bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
          <CardHeader className="border-b-2 pb-4">
            <div className="flex flex-row gap-3 items-center">
              <p className="font-bold text-xl leading-3">Jordan Lee</p>

              <Link
                href={"https://www.linkedin.com/in/jordan-lee-2bb996296/"}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} height={16} />
              </Link>
              <Link
                href={"https://www.github.com/jtljrdn"}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} height={16} />
              </Link>

              <Link
                href={"./Lee-Jordan-Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                title="Resume"
              >
                <FontAwesomeIcon icon={faFile} height={16} />
              </Link>
            </div>

            <p className="text-muted-foreground">
              Software Engineer | Full Stack Developer
            </p>
          </CardHeader>
          <CardContent className="flex flex-col items-center sm:items-start">
            <div className="w-full">
              <div>
                <p className="font-bold mb-2">Experience</p>

                <ExperienceEntry
                  title="Software Engineer Intern"
                  company="Room2Room Movers"
                  location="Auburn, AL"
                  duration="Aug. 2025 - Present"
                >
                  <div className="space-y-3">
                    <p>
                      Working on the Room2Room Movers Mover App, a mobile app
                      used by the movers to check their schedule and manage
                      their jobs.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>
                          Developed and maintained mobile app features using
                          React Native, improving user experience and
                          functionality.
                        </li>
                        <li>
                          Collaborated with cross-functional teams to implement
                          new functionality, ensuring smooth integration and
                          alignment with project goals.
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
                  duration="June 2025 - Aug. 2025"
                >
                  <div className="space-y-3">
                    <p>
                      Working on the F&D Pro mobile application development
                      team, focusing on creating efficient and user-friendly
                      solutions for professional contractors and designers.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Key Responsibilities:
                      </h4>
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
                          Participate in code reviews and contribute to team
                          best practices
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
                  duration="Jan. 2025 - Present"
                >
                  <div className="space-y-3">
                    <p>
                      Full-Stack Web Development for Auburn University's ICAMS
                      lab, creating a web application to help manage orders
                      between manufacturers and customers.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>
                          Developed a web application to help manage orders
                          between manufacturers and customers
                        </li>
                        <li>
                          Implemented a RESTful API in Next.js to handle CRUD
                          operations for the web application
                        </li>
                        <li>
                          Integrated a Postgres database using Supabase to store
                          and manage the application data.
                        </li>
                        <li>
                          Developed a user-friendly interface using React and
                          Next.js
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
                  duration="Oct. 2023 - Mar. 2024"
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
                          frameworks
                        </li>
                        <li>
                          Implemented RESTful APIs and database integration
                        </li>
                        <li>
                          Developed real-time chat functionality for database
                          queries
                        </li>
                        <li>
                          Optimized application performance and user experience
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
              </div>

              <div>
                <p className="font-bold">Education</p>
                <div className="flex flex-row justify-between my-2">
                  <div>
                    <p className="leading-4">
                      Bachelor of Software Engineering
                    </p>
                    <p className="text-muted-foreground text-sm leading-4 mt-1">
                      Auburn University
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-sm">
                      Aug. 2023 - May 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href={"./"} className="text-muted-foreground">
          <p>Me</p>
        </Link>
        <Link href={"./projects"} className="text-muted-foreground ">
          <p>My Projects</p>
        </Link>
        <Link href={"./blog"} className="text-muted-foreground ">
          <p>My Blog</p>
        </Link>
      </footer>
    </div>
  );
}
