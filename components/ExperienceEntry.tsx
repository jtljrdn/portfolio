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
        <div className="flex flex-row justify-between my-4 cursor-pointer hover:bg-gray-50 rounded transition-colors">
          <div>
            <p className="leading-4 font-medium">{title}</p>
            <p className="text-muted-foreground text-sm leading-4 mt-1">
              {company} - {location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm">{duration}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <div className="text-muted-foreground">
            <p>
              {company} - {location}
            </p>
            <p className="text-sm">{duration}</p>
          </div>
        </DialogHeader>

        <div className="mt-1">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
