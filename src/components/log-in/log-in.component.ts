import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"]
})
export class LogInComponent implements OnInit {

  constructor() {
    this.isLoggedIn = false;
  }
  public isLoggedIn: boolean;

  ngOnInit(): void {
  }

}
