import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-space-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-6 shadow-neon-cyan">
        <Terminal size={32} />
      </div>
      <h1 className="text-4xl font-extrabold text-white font-mono mb-2">404 // NOT_FOUND</h1>
      <p className="text-sm font-mono text-slate-400 max-w-md mb-8">
        The coordinates you navigated to do not exist within this sector.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold shadow-neon-cyan transition-all flex items-center gap-2"
      >
        <ArrowLeft size={14} />
        <span>Return to System Origin</span>
      </Link>
    </div>
  );
}
