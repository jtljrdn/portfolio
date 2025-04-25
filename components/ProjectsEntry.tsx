import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevents duplicate CSS injection
import Link from "next/link";
import React from "react";

interface ProjectsEntryProps {
  title: string;
  description: string;
  liveLink?: string;
  ghLink?: string;
}

const ProjectsEntry = ({
  title,
  description,
  liveLink,
  ghLink,
}: ProjectsEntryProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <p className="font-bold">
          {title}
          <span className="ml-2">
            {ghLink && (
              <Link href={ghLink} className="">
                <FontAwesomeIcon icon={faGithub} size={"lg"} />
              </Link>
            )}
          </span>
        </p>
        <p className="text-muted-foreground text-sm mt-1 leading-4">
          {description}
        </p>
      </div>
      <div className="text-right">
        {liveLink && (
          <Link href={liveLink} className="text-muted-foreground underline">
            <p>View</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsEntry;
