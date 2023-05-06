"use client";

import { useGetPostQuery } from "@/redux/service";

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetPostQuery(params.id);
  return (
    <section>
      <h1>{data?.title}</h1>
      <div className="mt-4">{data?.body}</div>
    </section>
  );
}
