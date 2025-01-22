import { EventInput } from '@fullcalendar/core';

export interface CustomEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: string;
  severity: Severity;  
}

export enum Severity {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low',
}

export class EventMapper {
  static getCalendarEvents(events: CustomEvent[]): EventInput[] {
    return events.map((event) => {
      let backgroundColor: string;

      switch (event.severity) {
        case Severity.HIGH:
          backgroundColor = 'red';
          break;
        case Severity.MEDIUM:
          backgroundColor = 'yellow';
          break;
        case Severity.LOW:
          backgroundColor = 'green';
          break;
        default:
          backgroundColor = 'green'; 
      }
      
      return {
        title: event.title,
        start: event.start,
        end: event.end,
        extendedProps: {
          id: event.id,
          description: event.description,
          location: event.location,
        },
        backgroundColor: backgroundColor,  
      };
    });
  }
}
