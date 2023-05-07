"use client";

import { useGetPostsQuery } from "@/redux/service";
import Link from "next/link";

const Posts = () => {
  const { data } = useGetPostsQuery();
  return (
    <section>
      <h1>Posts</h1>
      <div>
        {data?.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`posts/${post.id}`}>{post.title}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Posts;
