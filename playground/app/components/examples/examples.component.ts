import { Component } from '@angular/core';
import { environment } from '@env';
import { FormComponent } from '../form/form.component';

@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FormComponent]
})
export class ExamplesComponent {
  public config = environment;
}
