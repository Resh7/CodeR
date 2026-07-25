import { Crosshair } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-blue-300/30 bg-blue-500/10 text-blue-400 shadow-glow">
        <Crosshair size={25} />
        <span className="absolute inset-1 rounded-lg border border-white/10" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <strong className="block text-[13px] tracking-[.18em] text-white">MOHANA SRI</strong>
          <span className="text-[10px] font-semibold tracking-[.22em] text-blue-300">CNC TECHNICS</span>
        </span>
      )}
    </div>
  );
}
