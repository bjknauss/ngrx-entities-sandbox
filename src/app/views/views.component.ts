import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserState, userSelectors } from "../ngrx/entities";
import { Observable } from "rxjs";
import { IdSelector, Dictionary } from "@ngrx/entity";
import { User } from "../models";
import { AppState } from "../ngrx";

@Component({
  selector: "app-views",
  templateUrl: "./views.component.html",
  styleUrls: ["./views.component.scss"],
})
export class ViewsComponent implements OnInit {
  selectIds: Observable<any[]>;
  selectEntities: Observable<Dictionary<User>>;
  selectUsers: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.selectIds = this.store.select(userSelectors.selectIds);
    this.selectEntities = this.store.select(userSelectors.selectEntities);
    this.selectUsers = this.store.select(userSelectors.selectAll);
  }

  ngOnInit() {}
}
