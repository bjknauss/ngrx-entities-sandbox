import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models";
import { Store } from "@ngrx/store";
import { AppState } from "../ngrx";
import { userSelectors } from "../ngrx/entities";
import { UpdateUser } from "../ngrx/actions";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
  users$: Observable<User[]>;

  selected: string;

  displayName = "";

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(userSelectors.selectAll);
  }

  ngOnInit() {}

  submit() {
    this.store.dispatch(
      new UpdateUser({
        id: this.selected,
        changes: {
          displayName: this.displayName,
        },
      })
    );
  }
}
