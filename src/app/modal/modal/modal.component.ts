import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {
      template: TemplateRef<any>,
      data: any,
    }
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  close(submit?: boolean): void {
    this.dialogRef.close(submit);
  }
}
