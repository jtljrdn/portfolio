import ProjectsEntry from "@/components/ProjectsEntry";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 w-full max-w-5xl gap-4">
          <Card className="w-full sm:w-[500px] bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
            <CardHeader className="border-b-2 pb-4">
              <p className="font-bold text-xl leading-3">Projects</p>
              <p className="text-muted-foreground text-sm mt-1 leading-4">
                A list of my projects, some work and some don't. All
                code is available on GitHub.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center sm:items-start">
              <div className="w-full flex flex-col gap-4">
                <ProjectsEntry
                  title="Infinite Craft"
                  description="Created with Next.js, MongoDB, and Tailwind CSS. An online game where you can infinite combine items to create new ones. Inspired by neal.fun"
                  liveLink="infinite-craft-clone.vercel.app"
                  ghLink="https://github.com/jtljrdn/infinite-craft-clone"
                />
                <ProjectsEntry
                  title="Cambot Discord Bot"
                  description="A multipurpose Discord bot created with Node.js, Discord.js, and MongoDB. It has a variety of features including moderation, music, and fun commands."
                  ghLink="https://github.com/jtljrdn/Cam-Counter-Public"
                />
                <ProjectsEntry
                  title="Cambot Discord Bot - Website"
                  description="A website for the multipurpose Discord bot. Created with Next.js, Tailwind CSS, and MongoDB."
                  ghLink="https://github.com/jtljrdn/cambot-website"
                  liveLink="https://cambot.xyz"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href={"/"} className="text-muted-foreground">
          <p>Home</p>
        </Link>
        <Link href={"./projects"} className="text-muted-foreground ">
          <p>Projects</p>
        </Link>
      </footer>
    </div>
  );
};

export default page;
