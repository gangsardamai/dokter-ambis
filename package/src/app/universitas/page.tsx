import Link from "next/link";
export default function UniversitasPage() {
  const universities = [
  {
    name: "Universitas Airlangga",
    slug: "unair",
  },
  {
    name: "Universitas Brawijaya",
    slug: "brawijaya",
  },
  {
    name: "Universitas Jember",
    slug: "unej",
  },
  {
    name: "Universitas Indonesia",
    slug: "ui",
  },
  {
    name: "Universitas Padjadjaran",
    slug: "unpad",
  },
  {
    name: "Universitas Hasanuddin",
    slug: "unhas",
  },
];

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-4">
        Daftar Universitas
      </h1>

      <p className="text-lg text-black/70 mb-10">
        Pilih universitas yang sesuai dengan kampus Anda.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((university, index) => (
  <div
    key={index}
    className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
  >
    <h3 className="text-xl font-semibold">
      {university.name}
    </h3>

    <p className="mt-3 text-black/70">
      Program blok tersedia
    </p>

    <Link
      href={`/universitas/${university.slug}`}
      className="inline-block mt-5 px-4 py-2 rounded-lg bg-primary text-white"
    >
      Lihat Blok
    </Link>
  </div>
))}
      </div>
    </main>
  );
}