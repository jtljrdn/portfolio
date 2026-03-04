import React from "react";
import Link from "next/link";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import styles from "./mdx.module.css";
import { Greet } from "./greet";
import { HeadingLink } from "./heading-link";

function CustomLink({
  href,
  children,
  ...props
}: React.LinkHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={styles.a} {...props}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a href={href} className={styles.a} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.a}
      {...props}
    >
      {children}
    </a>
  );
}

function createHeading(level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  return function Heading({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <HeadingLink as={level} {...props}>
        {children}
      </HeadingLink>
    );
  };
}

export function CustomMDX(props: MDXRemoteProps) {
  const components = {
    a: CustomLink,
    h1: createHeading("h1"),
    h2: createHeading("h2"),
    h3: createHeading("h3"),
    h4: createHeading("h4"),
    h5: createHeading("h5"),
    h6: createHeading("h6"),
    Greet: Greet,
  };

  return (
    <div className={styles.prose}>
      <MDXRemote
        {...props}
        options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}
