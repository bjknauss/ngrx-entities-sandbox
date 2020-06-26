import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./ngrx";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddOneComponent } from "./add-one/add-one.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewsComponent } from './views/views.component';
import { ViewComponent } from './views/view/view.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UpdateComponent } from './update/update.component';
import { UpsertComponent } from './upsert/upsert.component';

@NgModule({
  declarations: [AppComponent, AddOneComponent, ViewsComponent, ViewComponent, UpdateComponent, UpsertComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
