import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

import { FieldFormat, FieldType } from '../../enums';
import { hasValue, pdfFieldRequired } from '../../helpers';
import { PdfField } from '../../interfaces';
import { FieldService } from '../../services/field-service';
import { NgClass } from '@angular/common';
import { FieldRenderComponent } from '../field-render/field-render.component';


@Component({
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass, FieldRenderComponent],
})
export class FieldComponent implements OnInit, OnDestroy {
  private _field = inject<PdfField>('field' as any);
  private _fieldService = inject<FieldService>('fieldService' as any);
  optionValue = inject<{
    value: any;
    label: any;
}>('optionValue' as any);
  scale = inject<number>('scale' as any);
  private _cdRef = inject(ChangeDetectorRef);
  protected _sanitizer = inject(DomSanitizer);


  public selected = false;
  public FieldType = FieldType;
  public FieldFormat = FieldFormat;
  public fontScaleThreshold = 9;

  private _destroy$ = new Subject();

  @HostListener('click')
  public click(): void {
    this.select();
  }

  public ngOnInit(): void {
    this._fieldService.fieldSelected$
      .pipe(
        tap(() => {
          this.selected = false;
          this._cdRef.markForCheck();
        }),
        filter((field: PdfField) => field?.guid === this._field?.guid),
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this.selected = true;
        this._cdRef.markForCheck();
      });

    this._fieldService.fieldChanged$
      .pipe(
        filter((field: PdfField) => field.guid === this._field.guid),
        takeUntil(this._destroy$),
      )
      .subscribe((field) => {
        this.field = { ...field };
        this._cdRef.markForCheck();
      });
  }

  public get required(): boolean {
    if (!pdfFieldRequired(this.field)) {
      return false;
    }

    const groupField = this._fieldService.getGroupField(this.field.name);

    return !hasValue(groupField);
  }

  public select(): void {
    if (this.field.readonly) {
      return;
    }

    if (this.field.type === FieldType.RadioButton) {
      this._fieldService.checkRadioButtonField(this.field.name, this.field);
    }

    if (this.field.type === FieldType.Checkbox) {
      this._fieldService.checkCheckboxField(this.field, !this.field.value);
    }

    this._fieldService.selectField = this.field;
  }

  public get field(): PdfField {
    return this._field;
  }

  public set field(field: PdfField) {
    this._field = field;
  }

  public markForCheck(): void {
    this._cdRef.markForCheck();
  }

  public ngOnDestroy(): void {
    this._fieldService.removeField(this._field);
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
