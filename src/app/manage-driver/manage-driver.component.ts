import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { MyCSharp } from '../models/myCSharp';
import { ApiService } from '../services/api.service';
import { FormServiceService } from '../services/form-service.service';
import { ScriptService } from '../services/script.service';

@Component({
  selector: 'app-manage-driver',
  templateUrl: './manage-driver.component.html',
  styleUrls: ['./manage-driver.component.scss']
})
export class ManageDriverComponent implements OnInit {
  public behaviorInfoDetails =
    `How should this driver behave when\n
    aggregated over multiple periods? For \n
    example, "New Customers" for the last\n
    6 months would be a total of monthly\n
    results (Sum), while "Total Customers\n
    over the same period would be the\n
    latest value(Balance)`;
  private dotWindow = window as any;

  constructor(private formService: FormServiceService, private apiService: ApiService, private script: ScriptService) { }

  get form() {
    return this.formService.form as FormGroup
  }

  get drivers() {
    return this.formService.drivers as FormArray
  }


  async ngOnInit(): Promise<void> {
    this.loadTestData();
    this.script.load('helloWorld').then(data => {
      this.dotWindow.dotnet.HelloWorld.GetHostName = () => "Browser";
      this.dotWindow.dotnet.boot();
    }).catch(error => console.log(error));
  }

  loadTestData() {
    this.apiService.get().subscribe(d => this.formService.patchForm(d));
  }

  addDriver() {
    this.formService.addDriver();
  }

  deleteDriver(i: number) {
    this.formService.removeDriver(i);
  }

  asFg(ac: AbstractControl) {
    return ac as FormGroup;
  }

  onSubmit() {
    this.formService.onSubmit();
  }
}
