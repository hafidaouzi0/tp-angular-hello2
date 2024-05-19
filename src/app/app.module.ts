import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {FormsModule} from "@angular/forms";
import { EInfoComponent } from './e-info/e-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImageComponentComponent,
    EmployeeComponent,
    InscriptionComponent,
    EInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
