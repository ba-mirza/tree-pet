import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  stateValidator: boolean = false;

  formInput: FormGroup<any> = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

  close(submit?: boolean): void {
    const value = this.formInput.getRawValue();
    this.dialogRef.close({ bool: submit, value });
  }
}
