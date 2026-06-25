type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function QuizPage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold mb-4">
        Quiz Materi
      </h1>

      <p className="mb-10 text-black/70">
        Quiz untuk materi: {slug}
      </p>

      <div className="border rounded-2xl p-8">

        <h3 className="text-xl font-semibold mb-4">
          Soal 1
        </h3>

        <p className="mb-6">
          Organ manakah yang berfungsi memompa darah ke seluruh tubuh?
        </p>

        <div className="space-y-3">

          <label className="block">
            <input type="radio" name="q1" />
            <span className="ml-2">Paru</span>
          </label>

          <label className="block">
            <input type="radio" name="q1" />
            <span className="ml-2">Jantung</span>
          </label>

          <label className="block">
            <input type="radio" name="q1" />
            <span className="ml-2">Ginjal</span>
          </label>

          <label className="block">
            <input type="radio" name="q1" />
            <span className="ml-2">Hati</span>
          </label>

        </div>

        <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg">
          Submit Quiz
        </button>

      </div>
    </main>
  );
}