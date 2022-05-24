import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from '../models/driver.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  form!: FormGroup;

  get drivers() {
    return this.form.controls['drivers'] as FormArray;
  }

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      drivers: this.fb.array([])
    })
  }

  removeDriver(driverIndex: number) {
    this.drivers.removeAt(driverIndex)
  }

  patchForm(drivers: Driver[]) {
    drivers.forEach(() => {
      this.addDriver();
    });
    this.drivers.patchValue(drivers);
  }

  addDriver() {
    const newDriver = this.fb.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      behavior: ['', Validators.required]
    });

    this.drivers.push(newDriver);
  }

  onSubmit() {
    let dupes: { [name: string]: FormGroup[] } = {};
    let warning: string = 'Please rename the following driver/s:\n';
    let displayWarning = false;
    //Show errors on empty required fields
    this.form.markAllAsTouched();
    //builds a list of controls, combining ones with the same name
    this.drivers.controls.forEach(c => {
      const controlName = c.value['name'];
      if (dupes[controlName] === undefined) {dupes[controlName] = []}
      dupes[controlName].push(c as FormGroup);
    })
    Object.keys(dupes).forEach(k => {
      if (dupes[k].length>1) {
        //add name to warning
        displayWarning = true;
        warning += `${k}\n`
        dupes[k].forEach(control => {
          //mark all controls with said name error
          control.controls['name'].setErrors({duped: true});
        })
      } else {
        //clear errors if there's only 1 control with said name
        dupes[k][0].controls['name'].setErrors(null);
      }
    })
    if (displayWarning) {
      window.alert(warning);
    }
    if(!this.form.valid){
      return;
    }
    this.apiService.post(this.form.getRawValue().drivers as Driver[]);
    //console.log('Sending api request with body: ', this.form.getRawValue().drivers);
  }
}
