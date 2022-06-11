import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      x: [0],
      y: [0],
      total: new FormControl({value: '', disabled: true})
    });

    this.drivers.push(newDriver);
  }

  onSubmit() {
  }
}
