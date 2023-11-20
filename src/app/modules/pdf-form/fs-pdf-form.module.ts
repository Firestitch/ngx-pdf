import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FsCheckboxGroupModule } from '@firestitch/checkboxgroup';
import { FsCommonModule } from '@firestitch/common';
import { FsDateModule } from '@firestitch/date';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsFormModule } from '@firestitch/form';
import { FsLabelModule } from '@firestitch/label';
import { FsMaskModule } from '@firestitch/mask';
import { FsMenuModule } from '@firestitch/menu';
import { FsPdfViewerModule } from '@firestitch/pdf-viewer';
import { FsRadioGroupModule } from '@firestitch/radiogroup';
import { FsSignatureModule } from '@firestitch/signature';

import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldRenderComponent } from './components/field-render/field-render.component';
import { FieldComponent } from './components/field/field.component';
import { HeaderComponent } from './components/header/header.component';
import { FsPdfFormComponent } from './components/pdf-form/pdf-form.component';


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
    FsLabelModule,

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
  ],
})
export class FsPdfFormModule { }
