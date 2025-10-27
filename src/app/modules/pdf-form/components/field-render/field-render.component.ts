import { ChangeDetectionStrategy, Component, Input, OnDestroy, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Subject } from 'rxjs';

import { FieldFormat, FieldType } from '../../enums';
import { PdfField } from '../../interfaces';
import { NgTemplateOutlet } from '@angular/common';
import { FsCommonModule } from '@firestitch/common';
import { FsDateModule } from '@firestitch/date';


@Component({
    selector: 'fs-field-render',
    templateUrl: './field-render.component.html',
    styleUrls: ['./field-render.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgTemplateOutlet,
        FsCommonModule,
        FsDateModule,
    ],
})
export class FieldRenderComponent implements OnDestroy {
  private _sanitizer = inject(DomSanitizer);


  @Input() public field: PdfField;
  @Input() public optionValue;

  public FieldType = FieldType;
  public FieldFormat = FieldFormat;

  private _destroy$ = new Subject();

  public get signatureSvg() {
    if (String(this.field.value).match(/^</)) {
      return this._sanitizer.bypassSecurityTrustUrl(`data:image/svg+xml;base64,${btoa(this.field.value)}`);
    }

    return this.field.value;
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
