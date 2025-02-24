import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import itLocale from '@fullcalendar/core/locales/it';
import { CalendarOptions } from '@fullcalendar/core';
import { CustomEvent, EventMapper } from '../../models/event';
import { AddEventService } from '../../services/add-event.service';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listGrid from '@fullcalendar/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { Severity } from '../../models/event';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { EventContextMenuComponent } from '../event-context-menu/event-context-menu.component';
import { AddEventComponent } from '../add-event/add-event.component'; 

@Component({
  standalone: true,
  imports: [FullCalendarModule, MatButtonModule, MatDialogModule, MatTooltipModule, EventContextMenuComponent],
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  providers: [AddEventService],
})

export class CalendarComponent {
  customEvents: CustomEvent[] = [
    { id: 1, title: 'Meeting Ganna', start: new Date(2025, 1, 14, 15, 0), end: new Date(2025, 1, 14, 18, 0), description: 'Discussione progetto', location: 'Ufficio', severity: Severity.HIGH },
    { id: 2, title: 'Incontro Jimmy', start: new Date(2025, 0, 15, 15, 0), end: new Date(2025, 0, 15, 18, 0), description: 'Business talk', location: 'Café', severity: Severity.MEDIUM },
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
    events: EventMapper.getCalendarEvents(this.customEvents),
    eventClick: this.openContextMenu.bind(this),
  };

  selectedEvent: CustomEvent | null = null;
  contextMenuPosition = { x: 0, y: 0 };

  constructor(
    private addEventService: AddEventService,
    private dialog: MatDialog  
  ) {}

  openPopup(event?: CustomEvent): Promise<CustomEvent> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(AddEventComponent, {
        data: event || null, 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          resolve(result); 
        } else {
          reject('No event data');
        }
      });
    });
  }
  

  openContextMenu(info: any) {
    this.selectedEvent = info.event;
    this.contextMenuPosition = { x: info.jsEvent.clientX, y: info.jsEvent.clientY };
    info.jsEvent.preventDefault(); 
  }

  closeContextMenu() {
    this.selectedEvent = null;
  }

  deleteEvent(eventId: number) {
    this.customEvents = this.customEvents.filter(event => event.id !== eventId);
    this.calendarOptions.events = EventMapper.getCalendarEvents(this.customEvents);
    this.selectedEvent = null;
  }

  editEvent(event: CustomEvent) {
    console.log('Modifica evento:', event);
    this.selectedEvent = event;
  
    this.openPopup(event).then((updatedEvent) => {
      if (updatedEvent) {
        const index = this.customEvents.findIndex(e => e.id === event.id);
        if (index !== -1) {
          this.customEvents[index] = { ...updatedEvent }; 
          this.calendarOptions.events = EventMapper.getCalendarEvents(this.customEvents);
        }
      }
    });
  }
}
