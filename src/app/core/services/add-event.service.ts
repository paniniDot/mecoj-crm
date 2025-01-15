import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventPopupComponent } from '../features/add-event/add-event.component';

@Injectable()
export class AddEventPopupService {
  constructor(private dialog: MatDialog) {}

  openPopup(): Promise<any> {
    const dialogRef = this.dialog.open(AddEventPopupComponent);
    return dialogRef.afterClosed().toPromise();
  }
}
