import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, CustomDateFormat1 } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';



@NgModule({
  declarations: [HeaderComponent, ConfirmDialogComponent,LoginComponent,LogoutComponent, ProgressSpinnerComponent,CustomDateFormat1],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ConfirmDialogComponent,
    LogoutComponent,
    LoginComponent,
    ProgressSpinnerComponent,
    CustomDateFormat1
  ],
  entryComponents: [ConfirmDialogComponent]

})
export class SharedModule { }
