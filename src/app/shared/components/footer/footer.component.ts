import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactInput: FormControl;

  constructor() {
    this.contactInput = new FormControl('',
      [
        Validators.required,
        Validators.email,
      ]
    );
  }

  submit() {
    console.log('sbmit', this.contactInput)
  }
}
