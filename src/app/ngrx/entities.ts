import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { User } from "../models";
import { EntitySelectors } from "@ngrx/entity/src/models";
import { State } from "@ngrx/store";
import { AppState } from ".";

export interface UserState extends EntityState<User> {
  selectedUser: string;
}

export const userAdapter = createEntityAdapter<User>({
  selectId: (user: User) => user.username,
});

export const userSelectors: EntitySelectors<
  User,
  AppState
> = userAdapter.getSelectors((s: AppState) => s.users);

export const initialUserState = userAdapter.getInitialState({
  selectedUser: "",
});

export const demoUserState = userAdapter.addOne(
  { username: "jdoe", displayName: "John Doe" },
  initialUserState
);
