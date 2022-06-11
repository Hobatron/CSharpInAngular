import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ManageDriverComponent } from './manage-driver/manage-driver.component';
import { DriverComponent } from './driver/driver.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ScriptService } from './services/script.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageDriverComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  providers: [FormBuilder,ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
