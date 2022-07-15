import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';


import { FsMaskModule } from '@firestitch/mask';
import { FsFormModule } from '@firestitch/form';
import { FsCommonModule } from '@firestitch/common';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsDateModule } from '@firestitch/date';
import { FsCheckboxGroupModule } from '@firestitch/checkboxgroup';
import { FsRadioGroupModule } from '@firestitch/radiogroup';
import { FsSignatureModule } from '@firestitch/signature';

import { FsPdfFormComponent } from './components/pdf-form/pdf-form.component';
import { FsPdfViewerModule } from '../pdf-viewer/fs-pdf-viewer.module';
import { FieldComponent } from './components/field';
import { FieldInputComponent, FieldRenderComponent, HeaderComponent } from './components';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FsMenuModule } from '@firestitch/menu';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,

    FsFormModule,
    FsCommonModule,  
    FsMaskModule,
    FsDatePickerModule,
    FsCheckboxGroupModule,
    FsDateModule,
    FsRadioGroupModule,
    FsMenuModule,
    FsSignatureModule,

    FsPdfViewerModule, 
  ],
  exports: [
    FsPdfFormComponent,
  ],
  declarations: [
    FieldComponent,
    FieldInputComponent,
    FsPdfFormComponent,
    HeaderComponent,
    FieldRenderComponent,
  ]
})
export class FsPdfFormModule {}
