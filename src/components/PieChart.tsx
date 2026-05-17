"use client";

import { useState } from "react";

type PieItem = {
  name: string;
  count: number;
};

export default function PieChart({ data }: { data: PieItem[] }) {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  const colors = ["#172554", "#1e3a8a", "#1d4ed8", "#2563eb", "#3b82f6", "#93c5fd"];

  const [tooltip, setTooltip] = useState<{
    item: PieItem;
    x: number;
    y: number;
  } | null>(null);

  let current = 0;

  return (
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 42 42" className="h-56 w-56 rotate-[-90deg]">
        {data.map((item, index) => {
          const percent = total ? (item.count / total) * 100 : 0;
          const dashArray = `${percent} ${100 - percent}`;
          const dashOffset = 100 - current;
          current += percent;

          return (
            <circle
              key={item.name}
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke={colors[index % colors.length]}
              strokeWidth="9"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              className="cursor-pointer transition-opacity hover:opacity-80"
              onMouseMove={(e) =>
                setTooltip({
                  item,
                  x: e.clientX,
                  y: e.clientY,
                })
              }
              onMouseLeave={() => setTooltip(null)}
            />
          );
        })}
      </svg>

      <div className="absolute text-center">
        <div className="text-3xl font-black text-blue-950">{total}</div>
        <div className="text-xs font-bold text-slate-500">Articles</div>
      </div>

      {tooltip && (
        <div
          className="pointer-events-none fixed z-[9999] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-xl"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y + 14,
          }}
        >
          <div className="font-black text-blue-950">{tooltip.item.name}</div>
          <div className="mt-1 font-semibold text-slate-600">
            {tooltip.item.count} articles ·{" "}
            {Math.round((tooltip.item.count / total) * 100)}%
          </div>
        </div>
      )}
    </div>
  );
}
