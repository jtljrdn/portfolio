"use client";

import React from "react";

export function HeadingLink({
  as: Tag,
  id,
  children,
  ...props
}: {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>) {
  const handleCopy = () => {
    if (!id) return;
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <Tag id={id} className="group relative" {...props}>
      {children}
      {id && (
        <button
          onClick={handleCopy}
          aria-label={`Copy link to ${typeof children === "string" ? children : "this section"}`}
          className="ml-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
        >
          #
        </button>
      )}
    </Tag>
  );
}
