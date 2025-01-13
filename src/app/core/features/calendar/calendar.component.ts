import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EventInput, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CustomEvent, EventMapper } from '../../models/event';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent {
  myCustomEvents: CustomEvent[] = [
    {
      title: 'Incontro Ganna',
      start: new Date(2025, 0, 14, 15, 0, 0, 0),
      end: new Date(2025, 0, 14, 18, 0, 0, 0),
      description: 'bla bla',
      location: 'Ufficio',
    },
    {
      title: 'Incontro Jimmy',
      start: new Date(2025, 0, 15, 15, 0, 0, 0),
      end: new Date(2025, 0, 15, 18, 0, 0, 0),
      description: 'bla bla',
      location: 'Bar Jimmy',
    },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    weekends: true,
    events: EventMapper.getCalendarEvents(this.myCustomEvents),
  };
}
