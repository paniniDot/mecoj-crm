import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { CustomEvent, EventMapper } from '../../models/event';
import { AddEventPopupService } from '../../services/add-event.service';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listGrid from '@fullcalendar/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Severity } from '../../models/event';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [AddEventPopupService],
  imports: [FullCalendarModule, MatButtonModule, MatDialogModule],
})
export class CalendarComponent {
  constructor(private addEventPopupService: AddEventPopupService) {}

  myCustomEvents: CustomEvent[] = [
    {
      title: 'Incontro Ganna',
      start: new Date(2025, 0, 14, 15, 0, 0, 0),
      end: new Date(2025, 0, 14, 18, 0, 0, 0),
      description: 'bla bla',
      location: 'Ufficio',
      severity: Severity.HIGH,
    },
    {
      title: 'Incontro Jimmy',
      start: new Date(2025, 0, 15, 15, 0, 0, 0),
      end: new Date(2025, 0, 15, 18, 0, 0, 0),
      description: 'bla bla',
      location: 'Bar Jimmy',
      severity: Severity.MEDIUM,
    },
  ];

  openAddEventPopup() {
    this.addEventPopupService.openPopup().then((newEvent) => {
      if (newEvent) {
        const eventToAdd: CustomEvent = {
          title: newEvent.title,
          start: new Date(newEvent.start),
          end: new Date(newEvent.end),
          description: newEvent.description,
          location: newEvent.location, 
          severity: newEvent.severity,
        };
        this.myCustomEvents = [...this.myCustomEvents, eventToAdd];
        this.calendarOptions.events = EventMapper.getCalendarEvents(
          this.myCustomEvents
        );
      }
    });
  }

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
    alert('date click! ' + arg.dateStr);
  }
}
