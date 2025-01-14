import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { CustomEvent, EventMapper } from '../../models/event';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';
import listGrid from '@fullcalendar/list';

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
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listGrid],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    weekends: true,
    events: EventMapper.getCalendarEvents(this.myCustomEvents),
    dateClick: (arg) => this.handleDateClick(arg),
};
  
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
