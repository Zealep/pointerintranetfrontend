import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { getSpanishPaginatorIntl } from './spanish-paginator-intl';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatMomentDateModule,MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from "@angular/material-moment-adapter";


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatTooltipModule,
    MatGridListModule,
    MatStepperModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMomentDateModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatTooltipModule,
    MatGridListModule,
    MatStepperModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMomentDateModule

  ],
 providers: [

  {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}},
  {provide: MAT_DATE_LOCALE, useValue: 'es-PE' },
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE' },
    {provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class MaterialModule {

}
