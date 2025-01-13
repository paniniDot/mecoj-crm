import { EventInput } from '@fullcalendar/core';

export interface CustomEvent {
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: string;
}

export class EventMapper {
  static getCalendarEvents(events: CustomEvent[]): EventInput[] {
    return events.map((event) => ({
      title: event.title,
      start: event.start,
      end: event.end,
      extendedProps: {
        description: event.description,
        location: event.location,
      },
    }));
  }
}
