import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public stateValidator: boolean = false;

  readonly formInput: FormGroup<any> = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  public close(submit?: boolean): void {
    const value = this.formInput.getRawValue();
    this.dialogRef.close({ bool: submit, value });
  }
}
