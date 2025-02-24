import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from '../features/add-event/add-event.component';

@Injectable()
export class AddEventService {
  constructor(private dialog: MatDialog) {}

  openPopup(): Promise<any> {
    const dialogRef = this.dialog.open(AddEventComponent);
    return dialogRef.afterClosed().toPromise();
  }
}
