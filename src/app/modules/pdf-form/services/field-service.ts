import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FieldComponent } from '../components';
import { Field } from '../classes';
import { FsPrompt } from '@firestitch/prompt';


@Injectable()
export class FieldService implements OnDestroy {

  public fieldComponents = new Map<Field,FieldComponent>();
  public containerEl;

  private _field$ = new BehaviorSubject<Field>(null);
  private _fieldChanged$ = new Subject<Field>();
  private _finished$ = new Subject<any>();
  private _destroy$ = new Subject();

  public constructor(
    private _prompt: FsPrompt,
  ) {}

  public init(field: Field, fieldComponent: FieldComponent) {
    this.fieldComponents.set(field, fieldComponent);    
  }

  public get field$(): BehaviorSubject<Field> {
    return this._field$;
  }

  public get fieldChanged$(): Subject<Field> {
    return this._fieldChanged$;
  }

  public get finished$(): Subject<any> {
    return this._finished$;
  }

  public get field() {
    return this._field$.getValue();
  }

  public set selectField(field: Field) {
    this._field$.next(field); 
  }

  public set changeField(changeField: Field) {
    this.getFields()
    .filter((field) => !!field.formula)
    .forEach((field) => {
      let formula = field.formula;
      this.getFields().forEach((variableField) => {
        if(!Array.isArray(variableField.value)) {
          formula = formula.replace(variableField.name, variableField.value || 0);
        }
      });      

      try {
        field.value = eval(formula);    
      } catch(e) {
        console.warn(`Formula error: ${e}`);
      }
    });

    this._fieldChanged$.next(changeField);
  }

  public get totalRequiredCompleted(): number {
    return this.getFields()
    .filter((field) => field.required && field.value)
    .length;
  }

  public get totalRequired(): number {
    return this.getFields()
    .filter((field) => field.required)
    .length;
  }

  public getFields(): Field[] {
    return Array.from(this.fieldComponents.keys());
  }

  public continue(): void {
    const nextField = this.getNextField(this.field);
    if(nextField) {
      this.selectField = nextField;
    } else {
      const field = this.getFields()
      .find((field) => !!field.required && !field.hasValue);

      if(field) {
        this.selectField = field;
      } else {
        this.finish();
      }      
    }
  }

  public finish(): void {
    this._prompt.confirm({
      title: 'Confirm Submit',
      template: 'You are about to submit your form. Are you sure you want to submit?',
      buttons: [
        {
          label: 'Submit',
          color: 'primary',
          value: true,
        },
        {
          label: 'Cancel',
          cancel: true,
        },
      ],
    }).subscribe(() => {
      this._finished$.next();
    });
  }

  public getFieldIndex(field: Field): number {
    const fields = this.getFields();
    return fields.indexOf(field);
  }

  public getNextField(field: Field): Field {
    const index = this.getFieldIndex(field);
    return index === -1 ? null : this.getFields()[index + 1];
  }

  public getBackField(field: Field): Field {
    const index = this.getFieldIndex(field);
    return index === -1 ? null : this.getFields()[index - 1];
  }

  public getFirstField(): Field {
    const fields = Array.from(this.fieldComponents.keys());
    return fields[0];
  }
  
  public scrollToField(field: Field): void {
    const el: any = this.containerEl.querySelector(`section[data-annotation-id="${field.id}"]`);
    if(el) {
      this.containerEl.scroll({top: this.getOffsetTop(el), behavior: 'smooth'});
    }
  }

  public scrollToSelectedField(): void {
    if(this.field) {
      this.scrollToField(this.field);
    }
  }

  public getOffsetTop(el): number {
    let top = el.offsetTop;
    
    if(el && !this.containerEl.isEqualNode(el.parentNode)) {
      top += this.getOffsetTop(el.parentNode)
    }

    return top;
  }
  
  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}