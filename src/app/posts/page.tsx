"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useGetPostsQuery } from "@/redux/service";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Posts() {
  const { data } = useGetPostsQuery();
  return (
    <section>
      <h1>Posts</h1>
      <div>
        {data?.map((post) => {
          return <div key={post.id}><Link href={`posts/${post.id}`}>{post.title}</Link></div>;
        })}
      </div>
    </section>
  );
}
