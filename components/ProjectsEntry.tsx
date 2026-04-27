import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Link from "next/link";

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
    <div className="flex flex-row justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium">{title}</p>
          {ghLink && (
            <Link
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            </Link>
          )}
        </div>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
      {liveLink && (
        <Link
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm underline underline-offset-4 hover:text-foreground transition-colors whitespace-nowrap shrink-0"
        >
          View
        </Link>
      )}
    </div>
  );
};

export default ProjectsEntry;
