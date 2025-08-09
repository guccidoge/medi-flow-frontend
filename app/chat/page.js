"use client";
import { useState } from "react";
import { FiMic, FiSend } from "react-icons/fi";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! Tell me your symptoms. I can summarize for the doctor." }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, { role: "user", text: input }, { role: "ai", text: "Okay, noted." }]);
    setInput("");
  };

  return (
    <div className="grid grid-rows-[1fr_auto] h-[75vh] max-w-3xl mx-auto rounded-xl border bg-white shadow">
      <div className="p-4 space-y-3 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role==="user"?"justify-end":""}`}>
            <div className={`px-3 py-2 rounded-2xl max-w-[80%] text-sm
              ${m.role==="user"?"bg-blue-600 text-white":"bg-slate-100"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex gap-2">
        <button className="px-3 rounded-lg border hover:bg-slate-100" title="Voice (stub)">
          <FiMic />
        </button>
        <input
          value={input} onChange={e=>setInput(e.target.value)}
          placeholder="Type your symptoms…"
          className="flex-1 px-3 py-2 rounded-lg border outline-none focus:ring-2 ring-blue-200"
        />
        <button onClick={send}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
          <FiSend /> Send
        </button>
      </div>
    </div>
  );
}
