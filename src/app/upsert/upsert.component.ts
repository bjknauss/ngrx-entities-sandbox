import { Component, OnInit } from "@angular/core";
import { User } from "../models";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UserState } from "../ngrx/entities";
import { UpsertUser } from "../ngrx/actions";

const createNewUser = (): User => ({ username: "", displayName: "" });

@Component({
  selector: "app-upsert",
  templateUrl: "./upsert.component.html",
  styleUrls: ["./upsert.component.scss"],
})
export class UpsertComponent implements OnInit {
  user: User = createNewUser();

  constructor(private store: Store<UserState>) {}

  ngOnInit() {}

  submit() {
    this.store.dispatch(new UpsertUser(this.user));
    this.user = createNewUser();
  }
}
