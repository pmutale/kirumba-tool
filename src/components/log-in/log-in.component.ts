import { Component, OnInit } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { catchError, take } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"]
})
export class LogInComponent implements OnInit {
  user$: Observable<firebase.User> = this.auth.user$;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private _snackBar: MatSnackBar
  ) { }
  public userLoggedIn: any;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  login() {
    this.auth.loginViaGoogle().pipe(take(1),
        catchError((error) => {
          this.openSnackBar(error.message, 'ERROR!')
          console.error(error.message)
          return EMPTY;
        }),
      )
      .subscribe((response) => {
        response && this.openSnackBar("User is logged in", 'Welcome!')
      });
  }

  logout() {
    this.auth.logout().pipe(take(1)).subscribe((response) => {
        this.openSnackBar('User has logged out', 'Good Bye!')

      });
  }

  ngOnInit(): void {
  }

}
