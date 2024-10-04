import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FsApiModule } from '@firestitch/api';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsPdfViewerModule } from '@firestitch/pdf-viewer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsPdfFormModule } from 'src/app/modules/pdf-form/fs-pdf-form.module';

import { AppComponent } from './app.component';
import {
  ExamplesComponent,
  FormComponent,
} from './components';
import { AppMaterialModule } from './material.module';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsPdfViewerModule,
        FsPdfFormModule,
        FsApiModule.forRoot(),
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        FsDatePickerModule.forRoot(),
        FsExampleModule.forRoot(),
        FsMessageModule.forRoot(),
        RouterModule.forRoot(routes, {}),
    ],
    declarations: [
        AppComponent,
        ExamplesComponent,
        FormComponent,
    ]
})
export class PlaygroundModule {
}
