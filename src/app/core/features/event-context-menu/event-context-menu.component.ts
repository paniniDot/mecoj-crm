import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'event-context-menu',
  imports: [CommonModule], 
  templateUrl: './event-context-menu.component.html',
  styles: []
})
export class EventContextMenuComponent {
  @Input() event: any;
  @Input() position: { x: number, y: number } = { x: 0, y: 0 };
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<any>();

  deleteEvent() {
    if (this.event) {
      this.onDelete.emit(this.event.extendedProps.id);
    }
  }

  editEvent() {
    if (this.event) {
      this.onEdit.emit(this.event);
    }
  }
}
