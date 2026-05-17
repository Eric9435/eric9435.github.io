"use client";

import { useState } from "react";

type PieItem = {
  name: string;
  count: number;
};

export default function PieChart({ data }: { data: PieItem[] }) {
  const total = data.reduce((sum, item) => sum + item.count, 0);

  const colors = ["#172554", "#1e3a8a", "#1d4ed8", "#2563eb", "#3b82f6", "#93c5fd"];

  const [active, setActive] = useState<PieItem | null>(null);

  let current = 0;

  return (
    <div className="relative flex flex-col items-center">
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
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(null)}
            />
          );
        })}
      </svg>

      <div className="absolute top-1/2 -translate-y-1/2 text-center">
        <div className="text-3xl font-black text-blue-950">{total}</div>
        <div className="text-xs font-bold text-slate-500">Articles</div>
      </div>

      {active && (
        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3 text-center shadow-sm">
          <div className="font-black text-blue-950">{active.name}</div>
          <div className="mt-1 text-sm font-bold text-slate-600">
            {active.count} articles · {Math.round((active.count / total) * 100)}%
          </div>
        </div>
      )}
    </div>
  );
}
