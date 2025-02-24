import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomEvent, Severity } from '../../models/event';

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
export class AddEventComponent {
  event: CustomEvent = { 
    id: 0,
    title: '',
    description: '',
    start: new Date(),
    end: new Date(),
    location: '',
    severity: Severity.LOW,
  };

  Severity = Severity; 

  constructor(
    public dialogRef: MatDialogRef<AddEventComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: CustomEvent | null 
  ) {
    console.log(data)
    if (data) {
      this.event = {...data};
      console.log(this.event)
    }
  }

  submit() {
    if (this.event.title && this.event.start && this.event.end) {
      this.dialogRef.close(this.event); 
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
