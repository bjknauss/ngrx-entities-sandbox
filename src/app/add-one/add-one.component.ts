import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserState } from "../ngrx/entities";
import { User } from "../models";
import { FormGroup } from "@angular/forms";
import { AddOneUser } from "../ngrx/actions";

const createBlankUser = (): User => ({ username: "", displayName: "" });

@Component({
  selector: "app-add-one",
  templateUrl: "./add-one.component.html",
  styleUrls: ["./add-one.component.scss"],
})
export class AddOneComponent implements OnInit {
  user: User = createBlankUser();
  userForm: FormGroup;

  constructor(private store: Store<UserState>) {}

  ngOnInit() {}

  submit() {
    this.store.dispatch(new AddOneUser(this.user));
  }
}
