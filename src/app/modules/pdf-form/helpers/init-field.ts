import { Field } from '../classes/field';
import { FieldType } from '../enums';


export function initField(field: Field): any {
  if(field.default && !field.value) {
    switch(field.type) {
      case FieldType.Date:
      case FieldType.Birthdate:
        if(field.default === 'today') {
          field.value = new Date();
        }

        break;

      default:
        field.value = field.default;
    }
  }

  return field;
}