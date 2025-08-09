export default function Summary() {
  const pdfUrl = "/sample.pdf"; // put a sample file in /public
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Doctor Summary</h2>
      <div className="rounded-xl border bg-white shadow overflow-hidden">
        <iframe src={pdfUrl} className="w-full h-[75vh]" title="Summary PDF" />
      </div>
      <a href={pdfUrl} download className="inline-block px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700">
        Download PDF
      </a>
    </section>
  );
}
