import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Card className="w-full sm:w-[500px] bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
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
                <p className="font-bold">Experience</p>

                <div className="grid grid-cols-2 gap-4 my-2">
                  <div>
                    <p className="leading-4">Incoming SWE Intern</p>
                    <p className="text-muted-foreground text-sm leading-4 mt-1">
                      Floor & Decor
                    </p>
                  </div>
                  <div className=" flex justify-end">
                    <p className="text-muted-foreground text-sm">
                      June 2025 - Aug. 2025
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 my-4">
                  <div>
                    <p className="leading-4">
                      Undergraduate Research Assistant
                    </p>
                    <p className="text-muted-foreground text-sm leading-4 mt-1">
                      Auburn University, Samuel Ginn College of Engineering
                    </p>
                  </div>
                  <div className=" flex justify-end">
                    <p className="text-muted-foreground text-sm">
                      Jan. 2025 - Present
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 my-4">
                  <div>
                    <p className="leading-4">Web Development Intern</p>
                    <p className="text-muted-foreground text-sm leading-4 mt-1">
                      ChatDB.ai
                    </p>
                  </div>
                  <div className=" flex justify-end">
                    <p className="text-muted-foreground text-sm">
                      Oct. 2023 - Mar. 2024
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold">Education</p>
                <div className="grid grid-cols-2 gap-4 my-2">
                  <div>
                    <p className="leading-4">
                      Bachelor of Software Engineering
                    </p>
                    <p className="text-muted-foreground text-sm leading-4 mt-1">
                      Auburn University, Samuel Ginn College of Engineering
                    </p>
                  </div>
                  <div className=" flex justify-end">
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
        <Link href={"./projects"} className="text-muted-foreground ">
          <p>Projects</p>
        </Link>
        <Link href={"./blog"} className="text-muted-foreground">
          <p>Blog</p>
        </Link>
      </footer>
    </div>
  );
}
