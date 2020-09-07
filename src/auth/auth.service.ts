import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { BehaviorSubject, Observable, from } from "rxjs";
import { Injectable } from "@angular/core";
import { switchMap } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user: BehaviorSubject<Observable<firebase.User>> = new BehaviorSubject<Observable<firebase.User>>(null);
  user$ = this.user.asObservable().pipe(
    switchMap((user: Observable<firebase.User>) => user)
  );

  constructor(
    public afAuth: AngularFireAuth,
  ) {
    this.user.next(this.afAuth.authState);
  }

//  async IsLoggedIn() {
//   try {
//     await new Promise((resolve, reject) =>
//       this.afAuth.onAuthStateChanged(
//         user => {
//           if (user) {
//             this.isLogged = true
//             debugger;
//             resolve(user)
//           } else {
//             debugger;
//             reject("no user logged in")
//           }
//         },
//         error => reject(error)
//       )
//     )
//     return true
//   } catch (error) {
//     return false
//   }
// }

  loginViaGoogle(): Observable<auth.UserCredential> {
    return from(this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()));
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }
}
