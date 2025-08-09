"use client";
import { FiMapPin, FiClock, FiMic, FiSend } from "react-icons/fi";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 mf-card mb-6">
          <span className="text-2xl">🚑</span>
          <span className="text-sm font-medium text-slate-600">MediFlow — Hackathon Preview</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="mf-gradient-text">Find the fastest path to care</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          We combine live crowd levels, travel time, and estimated wait to rank nearby hospitals by
          <span className="font-semibold"> total time to treatment</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="/hospitals"
             className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow">
            Find Hospitals
          </a>
          <a href="/chat"
             className="px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow">
            AI Pre-Consultation Chat
          </a>
          <a href="/summary"
             className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow">
            View Summary PDF
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-14 grid md:grid-cols-3 gap-6">
        <div className="mf-card p-6">
          <div className="h-10 w-10 grid place-items-center rounded-xl bg-blue-50 text-blue-700">
            <FiMapPin />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Smart hospital ranking</h3>
          <p className="mt-1 text-slate-600 text-sm">
            Travel time + live wait estimates combined into one clear <em>total time</em>.
          </p>
        </div>

        <div className="mf-card p-6">
          <div className="h-10 w-10 grid place-items-center rounded-xl bg-violet-50 text-violet-700">
            <FiClock />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Real-time signals</h3>
          <p className="mt-1 text-slate-600 text-sm">
            Computer vision crowd counts and historical patterns drive more accurate wait times.
          </p>
        </div>

        <div className="mf-card p-6">
          <div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            <div className="flex gap-2"><FiMic /><FiSend /></div>
          </div>
          <h3 className="mt-4 font-semibold text-lg">AI pre-consult</h3>
          <p className="mt-1 text-slate-600 text-sm">
            Capture symptoms via voice or text and generate a doctor-ready summary instantly.
          </p>
        </div>
      </section>

      {/* PREVIEW PANEL */}
      <section className="mt-14 mf-card p-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 grid place-items-center text-slate-500">
            Map / App preview
          </div>
          <div>
            <h4 className="font-semibold text-xl">How it works</h4>
            <ol className="mt-3 list-decimal pl-5 text-slate-700 space-y-2 text-sm">
              <li>Allow location and enter symptoms.</li>
              <li>We rank hospitals by total time (travel + wait).</li>
              <li>You get an AI-generated summary & a QR to share at reception.</li>
            </ol>
            <div className="mt-6 flex gap-3">
              <a href="/hospitals" className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100">
                Try Hospitals
              </a>
              <a href="/share" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-black">
                Share to Reception
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
