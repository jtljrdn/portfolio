export interface WorkImage {
  src: string;
  alt: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
  images?: WorkImage[];
}

export interface Project {
  name: string;
  description: string;
  tech?: string[];
  live?: string;
  github?: string;
  images?: WorkImage[];
}

export interface Game {
  name: string;
  description: string;
  tech?: string[];
  live?: string;
  github?: string;
  images?: WorkImage[];
}

export interface Education {
  degree: string;
  school: string;
  location?: string;
  start: string;
  end: string;
}

export const experiences: Experience[] = [
  {
    role: "Lead Software Engineer",
    company: "Room2Room Movers",
    location: "Auburn, AL",
    start: "Jun 2026",
    end: "Present",
    current: true,
    summary:
      "Promoted to lead engineering across the Room2Room platform: the booking and scheduling system, payments, and the apps customers and movers rely on across the Auburn and Oxford campuses.",
    highlights: [
      "Lead development end to end: the customer booking flow and portal, the admin dashboard, the movers' mobile app, and the REST API behind them.",
      "Own scheduling and dynamic pricing, Stripe payments, and real-time data across multiple locations.",
      "Set technical direction and standards, review code, and keep deployments shipping reliably.",
    ],
    tech: ["TypeScript", "React", "React Native", "Hono", "Firebase", "Stripe"],
  },
  {
    role: "Software Engineer Intern",
    company: "Room2Room Movers",
    location: "Auburn, AL",
    start: "Aug 2025",
    end: "Jun 2026",
    summary:
      "Built the Room2Room Movers Mover App, a mobile app movers use to check their schedule and manage their jobs.",
    highlights: [
      "Developed and maintained mobile app features in React Native, improving usability and functionality.",
      "Collaborated with cross-functional teams to ship new functionality with smooth integration.",
      "Debugged and optimized app performance, reducing load times and improving the experience.",
    ],
    tech: ["React Native", "Expo", "Firebase", "Tailwind CSS", "OpenAI API"],
  },
  {
    role: "Information Technology Intern",
    company: "Floor & Decor",
    location: "Atlanta, GA",
    start: "Jun 2025",
    end: "Aug 2025",
    summary:
      "Worked on the F&D Pro mobile application team, building efficient, friendly solutions for professional contractors and designers.",
    highlights: [
      "Led a complete UI/UX redesign of the Premier Pro app, improving consistency across platforms.",
      "Developed front-end components in React Native, improving responsiveness and maintainability.",
      "Worked with designers, product managers, and QA to align on requirements and feasibility.",
      "Participated in code reviews and contributed to team best practices.",
    ],
    tech: ["React Native", "Bitbucket", "Figma", "Jira", "Confluence"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Auburn University, Samuel Ginn College of Engineering",
    location: "Auburn, AL",
    start: "Jan 2025",
    end: "Jun 2025",
    summary:
      "Full-stack web development for Auburn's ICAMS lab, building a web app to manage orders between manufacturers and customers.",
    highlights: [
      "Built a RESTful API in Next.js handling CRUD operations for the application.",
      "Integrated a Postgres database via Supabase to store and manage application data.",
      "Designed a clean, user-friendly interface in React and Next.js.",
    ],
    tech: ["React", "Next.js", "Node.js", "Supabase", "Tailwind CSS"],
  },
  {
    role: "Web Development Intern",
    company: "ChatDB.ai",
    location: "Remote",
    start: "Oct 2023",
    end: "Mar 2024",
    summary:
      "Contributed to AI-powered database tools and conversational interfaces for querying and analyzing data.",
    highlights: [
      "Built responsive web interfaces with modern frontend frameworks.",
      "Implemented RESTful APIs and database integration.",
      "Developed real-time chat functionality for database queries.",
    ],
    tech: ["JavaScript", "React", "Next.js", "Supabase"],
  },
];

export const projects: Project[] = [
  {
    name: "GoodRepo",
    description:
      "Scores how easy any public GitHub repo is for AI agents to work in using a combination of deterministic static analysis and LLM analysis.",
    live: "https://goodrepo.dev",
    github: "https://github.com/jtljrdn/goodrepo",
  },
  {
    name: "Handoff",
    description:
      "Web- and CLI-based tool for managing environment variables across development and production.",
    live: "https://gethandoff.dev",
    github: "https://github.com/jtljrdn/handoff-env",
  },
  {
    name: "Mythidex",
    description:
      "A searchable database and REST API for Good Mythical Morning content.",
    live: "https://mythidex.dev",
    github: "https://github.com/jtljrdn/good-mythical-archive",
  },
  {
    name: "Infinite Craft",
    description:
      "An online game where you infinitely combine items to create new ones. Inspired by neal.fun.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    live: "https://infinite-craft-clone.vercel.app",
    github: "https://github.com/jtljrdn/infinite-craft-clone",
  },
  {
    name: "Cambot Website",
    description: "A companion website for the Cambot Discord bot.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    live: "https://cambot.xyz",
    github: "https://github.com/jtljrdn/cambot-website",
  },
  {
    name: "Cambot Discord Bot",
    description:
      "A multipurpose Discord bot with moderation, music, and fun commands.",
    tech: ["Node.js", "Discord.js", "MongoDB"],
    github: "https://github.com/jtljrdn/Cam-Counter-Public",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Auburn University",
    location: "Auburn, AL",
    start: "Aug 2023",
    end: "May 2027",
  },
];
