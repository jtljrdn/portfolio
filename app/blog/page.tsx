import Link from "next/link";
import { getPosts } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
    const posts = getPosts();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
                <div className="text-center">
                <h1 className="h1 font-medium">Ramblings</h1>
                <p className="text-muted-foreground text-center max-w-3xl">
                    A collection of my thoughts, ideas, and projects. I write about
                    software development, technology, and anything else that comes to
                    mind.
                </p>
                </div>
                <div className="grid grid-cols-3 w-full max-w-4xl gap-4">
                    {posts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className=""
                        >
                            <Card key={post.slug} className="gap-0">
                                <CardHeader className="border-b-2 pb-4 text-center flex flex-col items-center justify-center">
                                    {post.metadata.img && (
                                        <Image
                                            src={post.metadata.img}
                                            alt={post.metadata.title}
                                            width={400}
                                            height={400}
                                        />
                                    )}{" "}
                                    <h4 className="font-bold h4">{post.metadata.title}</h4>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center justify-center p-4">
                                    <p className="text-muted-foreground text-sm leading-4">
                                        {post.metadata.date}
                                    </p>

                                    <p className="text-muted-foreground text-sm leading-4 mt-1">
                                        {post.metadata.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </main>
            <footer className="flex gap-6 flex-wrap items-center justify-center p-4 mt-auto mb-14">
                <Link href={"/"} className="text-muted-foreground">
                    <p>Home</p>
                </Link>
                <Link href={"./projects"} className="text-muted-foreground">
                    <p>Projects</p>
                </Link>
            </footer>
        </div>
    );
}
