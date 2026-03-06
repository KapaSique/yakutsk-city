import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-200" aria-hidden="true" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative flex gap-6 group">
            {/* Icon marker */}
            <div className="relative z-10 flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30 ring-4 ring-white transition-transform group-hover:scale-110">
                <event.icon className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <time
                className="text-sm font-semibold text-cyan-600 mb-1 block"
                dateTime={event.date}
              >
                {event.date}
              </time>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {event.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
