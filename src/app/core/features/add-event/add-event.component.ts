import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Severity } from '../../models/event';     

@Component({
  selector: 'add-event-popup',
  templateUrl: './add-event.component.html',
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatRadioModule
  ],
})
export class AddEventPopupComponent {
  event = {
    title: '',
    description: '',
    start: null,
    end: null,
    location: '',
    severity: null, 
  };

  Severity = Severity;

  constructor(private dialogRef: MatDialogRef<AddEventPopupComponent>) {}

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    this.dialogRef.close(this.event); 
  }
}
