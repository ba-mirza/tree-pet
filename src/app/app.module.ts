import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {DialogModule} from '@angular/cdk/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalComponent} from './modal/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    TreeNodeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    DialogModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
