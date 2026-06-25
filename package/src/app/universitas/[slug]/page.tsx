import Link from "next/link";
import { universities } from "@/data/universities";
import { blocks } from "@/data/blocks";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function UniversityDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const university = universities[slug as keyof typeof universities];

  if (!university) {
    return (
      <main className="container py-20">
        <h1 className="text-4xl font-bold">
          Universitas Tidak Ditemukan
        </h1>
      </main>
    );
  }

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-4">
        {university.name}
      </h1>

      <p className="text-black/70 mb-10">
        Daftar blok yang tersedia.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {university.blocks.map((blockSlug) => (
          <div
            key={blockSlug}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">
              {blocks[blockSlug as keyof typeof blocks]?.name}
            </h3>

            <Link
              href={`/blok/${blockSlug}`}
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-primary text-white"
            >
              Lihat Materi
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}