import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  crns = [
    { idct: 23, creneau: '11:45:00', nb_places: 61, nbre: 55, subs: 6 },
    { idct: 27, creneau: '12:30:00', nb_places: 90, nbre: 90, subs: 0 },
    { idct: 28, creneau: '13:15:00', nb_places: 120, nbre: 41, subs: 97 }
  ];
  form: FormGroup;
  noCantine = 0;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      canteen: [null]
    });
  }

  changeTime() {

  }

  onCancel() {

  }

  getFormData() {

  }

}
