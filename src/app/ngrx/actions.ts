import { Action } from "@ngrx/store";
import { User } from "../models";
import { Update } from "@ngrx/entity";
import { UpdateStr } from "@ngrx/entity/src/models";

export enum UserActionTypes {
  AddOne = "[User] Add one",
  AddMany = "[User] Add many",
  Update = "[User] Update",
  Upsert = "[User] Upsert",
  Remove = "[User] Remove",
}

export class AddOneUser implements Action {
  readonly type = UserActionTypes.AddOne;

  constructor(public payload: User) {}
}

export class AddManyUser implements Action {
  readonly type = UserActionTypes.AddMany;

  constructor(public payload: User[]) {}
}

interface UpdatePayload {
  id: string;
  changes: Partial<User>;
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.Update;

  constructor(public payload: UpdatePayload) {}
}

export class UpsertUser implements Action {
  readonly type = UserActionTypes.Upsert;

  constructor(public payload: User) {}
}

export type UserActions = AddOneUser | AddManyUser | UpdateUser | UpsertUser;
