export const metadata = { title: "MediFlow", description: "Real-time hospital flow" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-30 border-b bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold">🚑 MediFlow</a>
            <nav className="flex gap-4 text-sm">
              <a href="/hospitals" className="hover:underline">Hospitals</a>
              <a href="/chat" className="hover:underline">AI Chat</a>
              <a href="/summary" className="hover:underline">Summary</a>
              <a href="/share" className="hover:underline">Share</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
