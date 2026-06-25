import Link from "next/link";
import { blocks } from "@/data/blocks";
import { materials } from "@/data/materials";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlockPage({
  params,
}: Props) {
  const { slug } = await params;

  const block = blocks[slug as keyof typeof blocks];

  if (!block) {
    return (
      <main className="container py-20">
        <h1 className="text-4xl font-bold">
          Blok Tidak Ditemukan
        </h1>
      </main>
    );
  }

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-4">
        {block.name}
      </h1>

      <p className="text-black/70 mb-10">
        Daftar materi pembelajaran.
      </p>

      <div className="grid gap-4">
        {block.materials.map((materialSlug) => (
          <div
            key={materialSlug}
            className="border rounded-xl p-5 shadow-sm"
          >
            <h3 className="font-semibold text-lg">
              {
                materials[
                  materialSlug as keyof typeof materials
                ]?.title
              }
            </h3>

            <Link
              href={`/materi/${materialSlug}`}
              className="inline-block mt-3 text-primary"
            >
              Buka Materi →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}