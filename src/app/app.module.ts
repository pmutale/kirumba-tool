import { BrowserModule } from "@angular/platform-browser";

/* Angular material */
import { AngularMaterialModule } from "./angular-material.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LogInComponent } from "../components/log-in/log-in.component";

import { AppFirebaseModule } from "../components/app-firebase/app-firebase.module";
import { AppFirebaseComponent } from "../components/app-firebase/app-firebase.component";
import { AppProfileComponent } from "../components/app-profile/app-profile.component";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AppFirebaseComponent,
    AppProfileComponent

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppFirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
