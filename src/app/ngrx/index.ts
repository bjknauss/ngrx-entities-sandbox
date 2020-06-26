import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { environment } from "../../environments/environment";
import { UserState, userAdapter } from "./entities";
import { UserActionTypes, UserActions } from "./actions";
import { userReducer } from "./reducers";

export interface AppState {
  users: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: userReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
