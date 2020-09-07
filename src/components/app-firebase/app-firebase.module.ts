import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { environment } from "../../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";


@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebase)],
  exports: [AngularFireModule, AngularFireAuthModule],
})
export class AppFirebaseModule {}
