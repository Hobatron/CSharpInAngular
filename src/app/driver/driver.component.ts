import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ScriptService } from '../services/script.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @Input() formIndex!: number;
  @Output() delete = new EventEmitter<number>();

  private subs: Subscription[] = [];

  constructor(private maths: ScriptService) { }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe);
  }

  ngOnInit(): void {
    this.subs.push(
      this.formGroup.controls['x'].valueChanges.subscribe((num) => {
        let total = window.dotnet.Maths.FormCalcs(num ?? 0, this.formGroup.controls['y'].value ?? 0);
        this.formGroup.controls['total'].setValue(total);
      }),
      this.formGroup.controls['y'].valueChanges.subscribe((num) => {
        let total = window.dotnet.Maths.FormCalcs(this.formGroup.controls['x'].value ?? 0, num ?? 0);
        this.formGroup.controls['total'].setValue(total);
      })
    )
  }

  remove() {
    this.delete.emit(this.formIndex);
  }
}
