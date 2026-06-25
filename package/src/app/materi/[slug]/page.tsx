import Link from "next/link";
import { notFound } from "next/navigation";
import { materials } from "@/data/materials";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MateriPage({
  params,
}: Props) {
  const { slug } = await params;

  const materi =
    materials[slug as keyof typeof materials];

  if (!materi) {
    notFound();
  }

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-4">
        {materi.title}
      </h1>

      <p className="text-black/70 mb-10">
        {materi.description}
      </p>

      <div className="space-y-8">

        {/* VIDEO */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            🎥 Video Pembelajaran
          </h2>

          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={materi.videoUrl}
              title={materi.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* PDF */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            📄 Modul PDF
          </h2>

          <a
            href={materi.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Download Modul
          </a>
        </div>

        {/* QUIZ */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            📝 Quiz Materi
          </h2>

          <p className="text-black/70 mb-4">
            Quiz terdiri dari 10 soal pilihan ganda.
          </p>

          <Link
            href={`/quiz/${slug}`}
            className="inline-block bg-green-600 text-white px-5 py-3 rounded-lg"
          >
            Kerjakan Quiz
          </Link>
        </div>

        {/* LIVE CLASS */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            🎓 Live Class
          </h2>

          <p className="text-black/70">
            Belum ada jadwal live class.
          </p>
        </div>

      </div>
    </main>
  );
}