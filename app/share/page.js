"use client";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Share() {
  const [link, setLink] = useState("");

  useEffect(() => {
    const url = typeof window !== "undefined"
      ? `${window.location.origin}/summary`
      : "https://example.com/summary";
    setLink(url);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="rounded-2xl border bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">Share to Reception</h2>
        <p className="text-slate-600 mt-1">Scan this to open the patient summary.</p>
        <div className="mt-6 grid place-items-center">
          {link && <QRCodeCanvas value={link} size={220} />}
        </div>
      </div>
      <div className="rounded-2xl border bg-white p-6 shadow">
        <h3 className="font-medium">Or copy the link</h3>
        <code className="block mt-2 p-3 bg-slate-100 rounded">{link || "…"}</code>
        {link && (
          <a href={link} target="_blank" className="mt-4 inline-block px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
            Open Summary
          </a>
        )}
      </div>
    </div>
  );
}
