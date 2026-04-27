"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ExperienceEntryProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  children: React.ReactNode;
}

export default function ExperienceEntry({
  title,
  company,
  location,
  duration,
  children,
}: ExperienceEntryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex flex-row justify-between gap-4 py-3 -mx-2 px-2 rounded-md cursor-pointer text-left hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="min-w-0">
            <p className="font-medium">{title}</p>
            <p className="text-muted-foreground text-sm mt-1">
              {company} · {location}
            </p>
          </div>
          <p className="text-muted-foreground text-sm whitespace-nowrap shrink-0">
            {duration}
          </p>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <div className="text-muted-foreground">
            <p>
              {company} · {location}
            </p>
            <p className="text-sm">{duration}</p>
          </div>
        </DialogHeader>
        <div className="mt-1">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
