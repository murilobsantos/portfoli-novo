"use client";

import { useEffect, useState } from "react";

function formatNow(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(date);
}

export function DevlogClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateClock = () => setNow(new Date());
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <p className="mt-5 text-sm text-yellow-200/80" aria-live="polite">
      {now ? `Horário local: ${formatNow(now)}` : "Carregando horário local…"}
    </p>
  );
}
