import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import itLocale from '@fullcalendar/core/locales/it';
import { CalendarOptions } from '@fullcalendar/core';
import { CustomEvent, EventMapper } from '../../models/event';
import { AddEventPopupService } from '../../services/add-event.service';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listGrid from '@fullcalendar/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Severity } from '../../models/event';
import tippy from 'tippy.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  providers: [AddEventPopupService],
  imports: [FullCalendarModule, MatButtonModule, MatDialogModule, MatTooltipModule],
})
export class CalendarComponent {
  constructor(private addEventPopupService: AddEventPopupService) {}

  myCustomEvents: CustomEvent[] = [
    {
      id: 1,
      title: 'Incontro Ganna',
      start: new Date(2025, 0, 14, 15, 0, 0, 0),
      end: new Date(2025, 0, 14, 18, 0, 0, 0),
      description: 'bla bla',
      location: 'Ufficio',
      severity: Severity.HIGH,
    },
    {
      id: 2,
      title: 'Incontro Jimmy',
      start: new Date(2025, 0, 15, 15, 0, 0, 0),
      end: new Date(2025, 0, 15, 18, 0, 0, 0),
      description: 'bla bla',
      location: 'Bar Jimmy',
      severity: Severity.MEDIUM,
    },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listGrid, bootstrap5Plugin],
    locales: [itLocale],
    locale: 'it',
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    weekends: true,
    events: EventMapper.getCalendarEvents(this.myCustomEvents),
    eventDidMount: this.addTooltip,
  };

  openAddEventPopup() {
    this.addEventPopupService.openPopup().then((newEvent) => {
      if (newEvent) {
        const eventToAdd: CustomEvent = {
          id: this.myCustomEvents.length + 1,
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

  deleteEvent(eventId: number) {
    this.myCustomEvents = this.myCustomEvents.filter((event) => event.id !== eventId);
    this.calendarOptions.events = EventMapper.getCalendarEvents(this.myCustomEvents);
  }

  addTooltip(info: any) {
    tippy(info.el, {
      content: `
        <div class="card">
          <div class="card-header">
            <strong>${info.event.title}</strong><br>
          </div>
          <div class="card-body">
            <strong>Inizio:</strong> ${info.event.start?.toLocaleString() || 'N/A'}<br>
            <strong>Fine:</strong> ${info.event.end?.toLocaleString() || 'N/A'}<br>
            <strong>Descrizione:</strong> ${info.event.extendedProps.description || 'No description'}<br>
            <strong>Luogo:</strong> ${info.event.extendedProps.location || 'No location specified'}<br>
            <div class="mt-2">
              <button id="edit-event-${info.event.extendedProps.id}" class="btn btn-sm btn-primary">Modifica</button>
              <button id="delete-event-${info.event.extendedProps.id}" class="btn btn-sm btn-danger" (click)="deleteEvent(${info.event.extendedProps.id})">Elimina</button>
            </div>
          </div>
        </div>
      `,
      placement: 'bottom',
      allowHTML: true,
      interactive: true,
      appendTo: document.body,
      theme: 'light-border',
      arrow: true,
      inertia: true,
    });
  }
  
}