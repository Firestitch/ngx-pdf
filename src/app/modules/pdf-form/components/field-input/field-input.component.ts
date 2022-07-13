import {
  Component, ChangeDetectionStrategy,
  OnInit, ElementRef, OnDestroy, ChangeDetectorRef, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';

import { Subject } from 'rxjs';
import { FieldType } from '../../enums';

import { Field } from '../../interfaces';
import { FieldService } from '../../services';


@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldInputComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild('input', { read: MatInput })
  public input: MatInput;

  @Input() public field: Field;

  @Output() public fieldChange = new EventEmitter<Field>();

  public FieldType = FieldType;
  public nextField: Field;

  private _destroy$ = new Subject();

  constructor(
    private _el: ElementRef,
    private _fieldService: FieldService,
    private _cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
   
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes.field) {
      this.nextField = this._fieldService.getNextField(this.field);
      setTimeout(() => {
        this.focus();
      });
    }
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public change(): void {
    this._fieldService.field = this.field;
  }

  public focus(): void {
    if(this.input) {
      this.input.focus();
    }
  }

  public submit = () => {
    if(this.nextField) {
      this._fieldService.field = this.nextField;
    }
    
  }
}
