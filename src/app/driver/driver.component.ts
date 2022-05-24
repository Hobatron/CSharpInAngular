import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Option } from '../models/options.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @Input() formIndex!: number;
  @Output() delete = new EventEmitter<number>();

  public sumBalanceOptions = [
    {text: 'Sum', value: 'Sum'},
    {text: 'Balance', value: 'Balance'}
  ]
  public average = [
    {text: 'Average', value: 'Average'}
  ] as Option[]

  public allBehaviors = [
    ...this.sumBalanceOptions,
    ...this.average
  ] as Option[]

  public units = [
    {text: '# Number', value: '#'},
    {text: '$ Dollar', value: '$'},
    {text: '% Percent', value: '%'}
  ] as Option[]

  public currentBehaviors?: Option[];

  private subs: Subscription[] = [];

  constructor() { }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe);
  }

  ngOnInit(): void {
    this.currentBehaviors = this.allBehaviors;
    this.disableHandler(this.formGroup.controls['unit'].value);
    this.subs.push(this.formGroup.controls['unit'].valueChanges.subscribe((value: string) => {
      this.disableHandler(value);
    }));
  }

  remove() {
    this.delete.emit(this.formIndex);
  }

  disableHandler(value: string) {
    if (value === '$' || value === '#') {
      this.currentBehaviors = this.sumBalanceOptions;
      this.formGroup.get('behavior')?.enable();
    } else if (value === '%') {
      this.currentBehaviors = this.average;
      this.formGroup.get('behavior')?.setValue('Average');
      this.formGroup.get('behavior')?.disable();
    };
  }
}
